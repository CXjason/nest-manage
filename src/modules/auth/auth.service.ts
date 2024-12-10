/*
 * @Author: jason
 * @Date: 2024-11-18 17:51:22
 * @LastEditTime: 2024-12-05 17:56:36
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\auth\auth.service.ts
 *
 */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserLoginDto } from './dto/user-login.dto';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { validateHash } from 'src/common/utils';
import { UserNotFoundException } from 'src/exceptions/user-not-found.exception';
import { TokenPayloadDto } from './dto/token-paytoken.dto';
import { ApiConfigService } from '../../shared/services/api-config.service';
import { JwtService } from '@nestjs/jwt';
import { TokenType } from 'src/constrants/tyken-type';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly userService: UserService,
    private readonly configService: ApiConfigService,
  ) {}

  async validateUser(userLoginDto: UserLoginDto): Promise<UserEntity> {
    const user = await this.userService.findOne({
      email: userLoginDto.email,
    });

    if (user) {
      const isPasswordValid = await validateHash(
        userLoginDto.password,
        user?.password,
      );

      if (!isPasswordValid) {
        throw new UserNotFoundException();
      }
    }

    return user!;
  }

  async createAccessToken(data: {
    roles: string[];
    userId: Uuid;
  }): Promise<TokenPayloadDto> {
    return new TokenPayloadDto({
      expiresIn: this.configService.authConfig.jwtExpirationTime,
      accessToken: await this.jwtService.signAsync(
        {
          userId: data.userId,
          type: TokenType.ACCESS_TOKEN,
          role: data.roles,
        },
        { expiresIn: 2 * 60 * 60 },
      ),
      refreshToken: await this.jwtService.signAsync(
        {
          userId: data.userId,
        },
        {
          expiresIn: 1 * 24 * 60 * 60,
        },
      ),
    });
  }

  async refreshToken(refreshTokenDto: RefreshTokenDto) {
    const { refreshToken } = refreshTokenDto;

    try {
      const decoded = this.jwtService.verify(refreshToken);

      const user = await this.userService.findOne({
        id: decoded.userId,
      });

      return this.createAccessToken({
        userId: user.id,
        roles: user.roles.map((role) => role.key),
      });
    } catch (_err) {
      throw new UnauthorizedException('refresh_token已过期', '10000');
    }
  }
}
