/*
 * @Author: jason
 * @Date: 2024-12-11 17:40:37
 * @LastEditTime: 2024-12-11 17:41:13
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\user\dtos\user-update.dto.ts
 *
 */
import { PartialType } from '@nestjs/mapped-types';
import { UserCreateDto } from './user-create.dto';

export class UserUpdateDto extends PartialType(UserCreateDto) {}
