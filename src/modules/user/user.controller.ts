/*
 * @Author: jason
 * @Date: 2024-11-15 16:08:20
 * @LastEditTime: 2024-12-12 17:00:47
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\user\user.controller.ts
 *
 */
import { Body, Controller, Get, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { Auth, UUIDParam } from 'src/decorators/http.decorators';
import { UserPageOptionsDto } from './dtos/user-page-options.dto';
import { UserUpdateDto } from './dtos/user-update.dto';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { ApiDataResponse } from 'src/common/dto/response.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { UserDto } from './dtos/user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @Auth()
  @ApiOperation({ summary: '获取列表' })
  @ApiDataResponse(UserDto, true)
  getUsers(
    @Query() userPageOptionsDto: UserPageOptionsDto,
  ): Promise<PageDto<UserDto>> {
    console.log(userPageOptionsDto);
    return this.userService.getUsers(userPageOptionsDto);
  }

  @Get(':id')
  @Auth()
  @ApiOperation({ summary: '获取单个' })
  @ApiParam({ name: 'id', description: '用户id', example: '1' })
  getSingleUser(@UUIDParam('id') id: Uuid) {
    return this.userService.getSingleUser(id);
  }

  @Put(':id')
  @Auth()
  @ApiOperation({ summary: '修改' })
  @ApiParam({ name: 'id', description: '用户id', example: '1' })
  updateUser(@UUIDParam('id') id: Uuid, @Body() userUpdateDto: UserUpdateDto) {
    return this.userService.updateUser(id, userUpdateDto);
  }
}
