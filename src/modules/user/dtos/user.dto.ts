/*
 * @Author: jason
 * @Date: 2024-11-18 15:09:51
 * @LastEditTime: 2024-12-12 17:00:25
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\user\dtos\user.dto.ts
 *
 */

import { AbstractDto } from 'src/common/dto/absrract.dto';

import {
  BooleanFieldOptional,
  ClassField,
  EmailFieldOptional,
  EnumFieldOptional,
  StringField,
  StringFieldOptional,
} from 'src/decorators';
import type { UserEntity } from '../user.entity';
import { RolesStatus } from 'src/enum/roles-status.enum';
import { RolesDto } from 'src/modules/roles/dto/roles.dto';
export type UserDtoOptions = Partial<{ isActive: boolean }>;

export class UserDto extends AbstractDto {
  @StringFieldOptional({ nullable: true })
  firstName?: string | null;

  @StringFieldOptional({ nullable: true })
  lastName?: string | null;

  @StringField({ nullable: true })
  username!: string;

  @EmailFieldOptional({ nullable: true })
  email?: string | null;

  @EnumFieldOptional(() => RolesStatus)
  status!: RolesStatus;

  @StringFieldOptional({ nullable: true })
  avatar?: string | null;

  @StringFieldOptional({ nullable: true })
  phone?: string | null;

  @BooleanFieldOptional()
  isActive?: boolean;

  @ClassField(() => RolesDto)
  roles: RolesDto[];

  constructor(user: UserEntity, options?: UserDtoOptions) {
    super(user);
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.status = user.status;
    this.avatar = user.avatar;
    this.phone = user.phone;
    this.isActive = options?.isActive;
    this.roles = user.roles?.map((role) => new RolesDto(role)) || [];
  }
}
