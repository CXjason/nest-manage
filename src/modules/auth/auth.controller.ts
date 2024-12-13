/*
 * @Author: jason
 * @Date: 2024-11-18 17:50:05
 * @LastEditTime: 2024-12-12 17:32:35
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\auth\auth.controller.ts
 *
 */
import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Post, Body } from '@nestjs/common';
import { UserLoginDto } from './dto/user-login.dto';
import { LoginPayloadDto } from './dto/login-payload.dto';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserService } from '../user/user.service';
import { UserDto } from '../user/dtos/user.dto';
import { Auth } from 'src/decorators/http.decorators';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserEntity } from '../user/user.entity';
import { AuthUser } from 'src/decorators/auth-user.decorator';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { UserNotFoundException } from 'src/exceptions/user-not-found.exception';
import { ApiDataResponse } from 'src/common/dto/response.dto';
import { TokenPayloadDto } from './dto/token-paytoken.dto';

@Controller('auth')
@ApiTags('授权')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  @ApiOperation({ summary: '登录' })
  @ApiDataResponse(LoginPayloadDto)
  async userLogin(
    @Body() userLoginDto: UserLoginDto,
  ): Promise<LoginPayloadDto> {
    const userEntity = await this.authService.validateUser(userLoginDto);

    if (!userEntity) {
      throw new UserNotFoundException('用户名或密码错误');
    }

    console.log(userEntity);

    const token = await this.authService.createAccessToken({
      userId: userEntity.id,
      roles: userEntity.roles.map((role) => role.key),
    });

    return new LoginPayloadDto(userEntity.toDto(), token);
  }

  @Post('register')
  @ApiOperation({ summary: '注册' })
  @ApiDataResponse(UserDto)
  async userRegister(
    @Body() userRegisterDto: UserRegisterDto,
  ): Promise<UserDto> {
    const createdUser = await this.userService.createUser(userRegisterDto);

    return createdUser.toDto({
      isActive: true,
    });
  }

  @Get('me')
  @HttpCode(HttpStatus.OK)
  @Auth()
  @ApiOkResponse({ type: UserDto, description: 'current user info' })
  getCurrentUser(@AuthUser() user: UserEntity): UserDto {
    console.log('getCurrentUser');
    console.log(user);
    return user.toDto();
  }

  @Get('getTest')
  @Auth([], { public: true })
  getTest() {
    return 'getTest';
  }

  @Post('refresh-token')
  @ApiOperation({ summary: '刷新token' })
  @ApiDataResponse(TokenPayloadDto)
  async refreshToken(
    @Body() refreshTokenDto: RefreshTokenDto,
  ): Promise<TokenPayloadDto> {
    return this.authService.refreshToken(refreshTokenDto);
  }
}
