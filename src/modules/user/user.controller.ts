/*
 * @Author: jason
 * @Date: 2024-11-15 16:08:20
 * @LastEditTime: 2024-11-18 16:44:08
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\modules\user\user.controller.ts
 *
 */
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return '232323';
  }
}
