/*
 * @Author: jason
 * @Date: 2024-11-18 17:50:05
 * @LastEditTime: 2024-11-29 08:32:59
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
import { RoleType } from 'src/constrants';
import { ApiOkResponse } from '@nestjs/swagger';
import { UserEntity } from '../user/user.entity';
import { AuthUser } from 'src/decorators/auth-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  async userLogin(
    @Body() userLoginDto: UserLoginDto,
  ): Promise<LoginPayloadDto> {
    const userEntity = await this.authService.validateUser(userLoginDto);

    const token = await this.authService.createAccessToken({
      userId: userEntity.id,
      role: userEntity.role,
    });

    return new LoginPayloadDto(userEntity.toDto(), token);
  }

  @Post('register')
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
  @Auth([RoleType.USER, RoleType.ADMIN])
  @ApiOkResponse({ type: UserDto, description: 'current user info' })
  getCurrentUser(@AuthUser() user: UserEntity): UserDto {
    console.log('getCurrentUser');
    console.log(user);

    return user.toDto();
  }

  @Get('getTest')
  @Auth([RoleType.USER, RoleType.ADMIN], { public: true })
  getTest() {
    return 'getTest';
  }
}
