/*
 * @Author: jason
 * @Date: 2024-11-15 16:08:20
 * @LastEditTime: 2024-12-06 09:26:32
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\user\user.controller.ts
 *
 */
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UUIDParam } from 'src/decorators/http.decorators';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  getSingleUser(@UUIDParam('id') id: Uuid) {
    return this.userService.getSingleUser(id);
  }
}
