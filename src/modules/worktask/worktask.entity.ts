/*
 * @Author: jason
 * @Date: 2024-12-17 11:19:24
 * @LastEditTime: 2024-12-18 09:03:13
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\worktask\worktask.entity.ts
 *
 */
import { AbstractEntity } from 'src/common/abstract.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { WorktaskStatus } from './enum';
import { UserEntity } from '../user/user.entity';
import { WorktaskDto } from './dto/worktask.dto';
import { UseDto } from 'src/decorators';
import { ProjectEntity } from '../project/project.entity';

@Entity('worktask')
@UseDto(WorktaskDto)
export class WorktaskEntity extends AbstractEntity {
  @Column()
  title!: string;

  @Column()
  content!: string;

  @Column({ type: 'datetime', nullable: true })
  startTime?: Date;

  @Column({ type: 'datetime', nullable: true })
  endTime?: Date;

  @Column({
    type: 'enum',
    enum: WorktaskStatus,
    default: WorktaskStatus.PENDING,
  })
  status!: WorktaskStatus;

  @ManyToOne(() => UserEntity, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  workUser: UserEntity;

  @ManyToOne(() => ProjectEntity, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  project: ProjectEntity;
}
