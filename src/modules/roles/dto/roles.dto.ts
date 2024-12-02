/*
 * @Author: jason
 * @Date: 2024-12-02 08:53:28
 * @LastEditTime: 2024-12-02 09:14:32
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\roles\dto\roles.dto.ts
 *
 */
import { AbstractDto } from 'src/common/dto/absrract.dto';
import { EnumFieldOptional, StringFieldOptional } from 'src/decorators';
import { RolesStatus } from 'src/enum/roles-status.enum';
import { RolesEntity } from '../roles.entity';

export type RolesDtoOptions = Partial<{ isActive: boolean }>;

export class RolesDto extends AbstractDto {
  @StringFieldOptional({ nullable: true })
  name!: string;

  @StringFieldOptional({ nullable: true })
  key!: string;

  @EnumFieldOptional(() => RolesStatus)
  status!: RolesStatus;

  @StringFieldOptional()
  description?: string;

  constructor(roles: RolesEntity, options?: RolesDtoOptions) {
    super(roles);
    this.name = roles.name;
    this.key = roles.key;
    this.status = roles.status;
    this.description = roles.description;
  }
}
