/*
 * @Author: jason
 * @Date: 2024-11-18 17:51:22
 * @LastEditTime: 2024-11-23 16:52:08
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\modules\auth\auth.service.ts
 *
 */
import { Injectable } from '@nestjs/common';
import { UserLoginDto } from './dto/user-login.dto';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { validateHash } from 'src/common/utils';
import { UserNotFoundException } from 'src/exceptions/user-not-found.exception';
import { RoleType } from 'src/constrants/role-type';
import { TokenPayloadDto } from './dto/token-paytoken.dto';
import { ApiConfigService } from '../../shared/services/api-config.service';
import { JwtService } from '@nestjs/jwt';
import { TokenType } from 'src/constrants/tyken-type';

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
    role: RoleType;
    userId: Uuid;
  }): Promise<TokenPayloadDto> {
    return new TokenPayloadDto({
      expiresIn: this.configService.authConfig.jwtExpirationTime,
      accessToken: await this.jwtService.signAsync({
        userId: data.userId,
        type: TokenType.ACCESS_TOKEN,
        role: data.role,
      }),
    });
  }
}
