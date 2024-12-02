/*
 * @Author: jason
 * @Date: 2024-11-23 17:06:37
 * @LastEditTime: 2024-12-02 16:17:32
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\roles\roles.entity.ts
 *
 */
import { AbstractEntity } from 'src/common/abstract.entity';
import { RolesStatus } from 'src/enum/roles-status.enum';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { RolesDto, RolesDtoOptions } from './dto/roles.dto';
import { UseDto } from 'src/decorators';
import { PermissionEntity } from '../permission/permission.entity';

@Entity('roles')
@UseDto(RolesDto)
export class RolesEntity extends AbstractEntity<RolesDto, RolesDtoOptions> {
  @Column({ unique: true })
  name!: string;

  @Column({ unique: true })
  key!: string;

  @Column({ type: 'enum', enum: RolesStatus, default: RolesStatus.ENABLE })
  status!: RolesStatus;

  @Column({ default: '' })
  description: string;

  @ManyToMany(() => PermissionEntity, (permission) => permission.roles)
  @JoinTable({
    name: 'roles_permissions',
  })
  permissions: PermissionEntity[];
}
