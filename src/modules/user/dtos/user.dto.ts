/*
 * @Author: jason
 * @Date: 2024-11-18 15:09:51
 * @LastEditTime: 2024-11-18 15:42:07
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\modules\user\dtos\user.dto.ts
 *
 */
/*
 * @Author: jason
 * @Date: 2024-11-18 15:09:51
 * @LastEditTime: 2024-11-18 15:21:08
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\modules\user\dtos\user.dto.ts
 *
 */
import { AbstractDto } from 'src/common/dto/absrract.dto';
import { RoleType } from 'src/constrants/role-type';
import {
  BooleanFieldOptional,
  EmailFieldOptional,
  EnumFieldOptional,
  PhoneFieldOptional,
  StringFieldOptional,
} from 'src/decorators';
import type { UserEntity } from '../user.entity';

export type UserDtoOptions = Partial<{ isActive: boolean }>;

export class UserDto extends AbstractDto {
  @StringFieldOptional({ nullable: true })
  firstName?: string | null;

  @StringFieldOptional({ nullable: true })
  lastName?: string | null;

  @StringFieldOptional({ nullable: true })
  username!: string;

  @EnumFieldOptional(() => RoleType)
  role?: RoleType;

  @EmailFieldOptional({ nullable: true })
  email?: string | null;

  @StringFieldOptional({ nullable: true })
  avatar?: string | null;

  @PhoneFieldOptional({ nullable: true })
  phone?: string | null;

  @BooleanFieldOptional()
  isActive?: boolean;

  constructor(user: UserEntity, options?: UserDtoOptions) {
    super(user);
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.role = user.role;
    this.email = user.email;
    this.avatar = user.avatar;
    this.phone = user.phone;
    this.isActive = options?.isActive;
  }
}
