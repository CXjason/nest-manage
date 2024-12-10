/*
 * @Author: jason
 * @Date: 2024-12-02 14:18:26
 * @LastEditTime: 2024-12-10 17:40:36
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\permission\dto\permission.dto.ts
 *
 */
import { AbstractDto } from 'src/common/dto/absrract.dto';
import {
  EnumFieldOptional,
  StringField,
  StringFieldOptional,
} from 'src/decorators';
import { PermissionEntity } from '../permission.entity';
import { RolesStatus } from 'src/enum/roles-status.enum';

export type PermissionDtoOptions = Partial<{ isActive: boolean }>;

export class PermissionDto extends AbstractDto {
  @StringField({ nullable: true })
  name!: string;

  @StringField({ nullable: true })
  key!: string;

  @StringFieldOptional()
  description?: string;

  @EnumFieldOptional(() => RolesStatus)
  status!: RolesStatus;

  constructor(permission: PermissionEntity, _options?: PermissionDtoOptions) {
    super(permission);
    this.name = permission.name;
    this.key = permission.key;
    this.description = permission.description;
    this.status = permission.status;
  }
}
