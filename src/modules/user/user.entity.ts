/*
 * @Author: jason
 * @Date: 2024-11-15 16:13:29
 * @LastEditTime: 2024-12-19 15:01:26
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\user\user.entity.ts
 *
 */
import { AbstractEntity } from 'src/common/abstract.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  VirtualColumn,
} from 'typeorm';
import type { UserDtoOptions } from './dtos/user.dto';
import { UserDto } from './dtos/user.dto';
import { UseDto } from 'src/decorators';
import { RolesEntity } from '../roles/roles.entity';
import { RolesStatus } from 'src/enum/roles-status.enum';
import { WorktaskEntity } from '../worktask/worktask.entity';
import { Transform } from 'class-transformer';

@Entity({ name: 'users' })
@UseDto(UserDto)
export class UserEntity extends AbstractEntity<UserDto, UserDtoOptions> {
  @Column({ nullable: true, type: 'varchar' })
  firstName!: string | null;

  @Column({ nullable: true, type: 'varchar' })
  lastName!: string | null;

  @Column({ unique: true, nullable: true, type: 'varchar' })
  email!: string | null;

  @Column({ type: 'enum', enum: RolesStatus, default: RolesStatus.ENABLE })
  status!: RolesStatus;

  @Column({ nullable: true, type: 'varchar' })
  password!: string | null;

  @Column({ nullable: true, type: 'varchar' })
  phone!: string | null;

  @Column({ nullable: true, type: 'varchar' })
  avatar!: string | null;

  @ManyToMany(() => RolesEntity, (roles) => roles.users)
  @JoinTable({
    name: 'users_roles',
    joinColumn: { name: 'user_id' },
    inverseJoinColumn: { name: 'role_id' },
  })
  roles: RolesEntity[];

  @OneToMany(() => WorktaskEntity, (worktask) => worktask.workUser)
  worktasks?: WorktaskEntity[];
}
