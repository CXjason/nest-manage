/*
 * @Author: jason
 * @Date: 2024-12-17 17:16:19
 * @LastEditTime: 2024-12-23 11:50:30
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\worktask\dto\worktask.dto.ts
 *
 */
import { AbstractDto } from 'src/common/dto/absrract.dto';
import {
  BooleanFieldOptional,
  DateFieldOptional,
  EnumFieldOptional,
  StringField,
} from 'src/decorators';

import { WorktaskStatus } from '../enum/index';
import { WorktaskEntity } from '../worktask.entity';
import { ProjectEntity } from 'src/modules/project/project.entity';
import { UserEntity } from 'src/modules/user/user.entity';

export type wordtaskDtoOptions = Partial<{ isActive: boolean }>;

export class WorktaskDto extends AbstractDto {
  @StringField({ description: '标题', example: '标题' })
  title!: string;

  @StringField({ description: '内容', example: '内容' })
  content!: string;

  @EnumFieldOptional(() => WorktaskStatus, {
    description: '状态',
    example: '1',
    default: WorktaskStatus.PENDING,
  })
  status?: WorktaskStatus;

  @DateFieldOptional({ description: '创建时间' })
  startTime?: Date;

  @DateFieldOptional({ description: '结束时间' })
  endTime?: Date;

  workUser?: UserEntity;

  project?: ProjectEntity;

  @BooleanFieldOptional({ description: '是否激活', example: true })
  isActive?: boolean;

  constructor(worktask: WorktaskEntity, options?: wordtaskDtoOptions) {
    super(worktask);
    if (!worktask) {
      return;
    }
    const { isActive } = options || {};
    this.title = worktask.title;
    this.content = worktask.content;
    this.status = worktask.status;
    this.startTime = worktask.startTime;
    this.endTime = worktask.endTime;
    this.workUser = worktask.workUser;
    this.project = worktask.project;
    this.isActive = isActive;
  }
}
