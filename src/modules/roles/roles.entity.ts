/*
 * @Author: jason
 * @Date: 2024-11-23 17:06:37
 * @LastEditTime: 2024-11-23 17:17:53
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\modules\roles\roles.entity.ts
 *
 */
import { Column, Entity } from 'typeorm';

enum Status {
  ENABLE = 1,
  DISABLE = 0,
}

@Entity()
export class RolesEntity {
  @Column({ unique: true })
  name!: string;

  @Column({ unique: true })
  key!: string;

  @Column({ type: 'enum', enum: Status, default: Status.ENABLE })
  status!: Status;
}
