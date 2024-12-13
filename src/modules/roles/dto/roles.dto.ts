/*
 * @Author: jason
 * @Date: 2024-12-02 08:53:28
 * @LastEditTime: 2024-12-12 14:08:59
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\roles\dto\roles.dto.ts
 *
 */
import { AbstractDto } from 'src/common/dto/absrract.dto';
import {
  BooleanFieldOptional,
  EnumFieldOptional,
  StringField,
  StringFieldOptional,
} from 'src/decorators';
import { RolesStatus } from 'src/enum/roles-status.enum';
import { RolesEntity } from '../roles.entity';

export type RolesDtoOptions = Partial<{ isActive: boolean }>;

export class RolesDto extends AbstractDto {
  @StringField({ nullable: true, description: '角色名称', example: '管理员' })
  name!: string;

  @StringField({ nullable: true, description: '角色标识', example: 'admin' })
  key!: string;

  @EnumFieldOptional(() => RolesStatus, { description: '状态', example: 1 })
  status!: RolesStatus;

  @StringFieldOptional({ description: '描述', example: '管理员' })
  description?: string;

  @BooleanFieldOptional({ description: '是否激活', example: true })
  isActive?: boolean;

  constructor(roles: RolesEntity, options?: RolesDtoOptions) {
    super(roles);
    this.name = roles.name;
    this.key = roles.key;
    this.status = roles.status;
    this.description = roles.description;
    this.isActive = options?.isActive;
  }
}
