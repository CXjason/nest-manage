/*
 * @Author: jason
 * @Date: 2024-11-23 17:06:37
 * @LastEditTime: 2024-12-10 11:36:55
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
import { UserEntity } from '../user/user.entity';

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

  @ManyToMany(() => PermissionEntity, (permission) => permission.roles, {
    onDelete: 'CASCADE',
  })
  @JoinTable({
    name: 'roles_permissions',
  })
  permissions: PermissionEntity[];

  @ManyToMany(() => UserEntity, (user) => user.roles, {
    onDelete: 'CASCADE',
  })
  users: UserEntity[];
}
