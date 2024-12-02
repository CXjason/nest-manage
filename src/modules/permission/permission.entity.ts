/*
 * @Author: jason
 * @Date: 2024-12-02 14:15:56
 * @LastEditTime: 2024-12-02 16:13:32
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\permission\permission.entity.ts
 *
 */
import { AbstractEntity } from 'src/common/abstract.entity';
import { Column, Entity, ManyToMany } from 'typeorm';
import { PermissionDto, PermissionDtoOptions } from './dto/permission.dto';
import { UseDto } from 'src/decorators';
import { RolesEntity } from '../roles/roles.entity';

@Entity('permission')
@UseDto(PermissionDto)
export class PermissionEntity extends AbstractEntity<
  PermissionDto,
  PermissionDtoOptions
> {
  @Column({ unique: true })
  name!: string;

  @Column({ unique: true })
  key!: string;

  @Column({ default: '' })
  description?: string;

  @ManyToMany(() => RolesEntity, (roles) => roles.permissions)
  roles: RolesEntity[];
}
