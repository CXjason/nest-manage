/*
 * @Author: jason
 * @Date: 2024-11-15 16:13:29
 * @LastEditTime: 2024-11-22 15:34:16
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\modules\user\user.entity.ts
 *
 */
import { AbstractEntity } from 'src/common/abstract.entity';
import { Column, Entity, VirtualColumn } from 'typeorm';
import type { UserDtoOptions } from './dtos/user.dto';
import { UserDto } from './dtos/user.dto';
import { RoleType } from 'src/constrants/role-type';
import { UseDto } from 'src/decorators';

@Entity({ name: 'users' })
@UseDto(UserDto)
export class UserEntity extends AbstractEntity<UserDto, UserDtoOptions> {
  @Column({ nullable: true, type: 'varchar' })
  firstName!: string | null;

  @Column({ nullable: true, type: 'varchar' })
  lastName!: string | null;

  @Column({ type: 'enum', enum: RoleType, default: RoleType.USER })
  role!: RoleType;

  @Column({ unique: true, nullable: true, type: 'varchar' })
  email!: string | null;

  @Column({ nullable: true, type: 'varchar' })
  password!: string | null;

  @Column({ nullable: true, type: 'varchar' })
  phone!: string | null;

  @Column({ nullable: true, type: 'varchar' })
  avatar!: string | null;

  @VirtualColumn({
    query: (alias) =>
      `SELECT CONCAT(${alias}.first_name, ' ', ${alias}.last_name)`,
  })
  fullName!: string;
}
