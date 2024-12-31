/*
 * @Author: jason
 * @Date: 2024-12-17 14:59:23
 * @LastEditTime: 2024-12-17 20:04:14
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\worktask\dto\worktask-create.dto.ts
 *
 */
import {
  DateFieldOptional,
  EnumFieldOptional,
  StringField,
  UUIDField,
} from 'src/decorators';
import { WorktaskStatus } from '../enum';

export class WorktaskCreateDto {
  @StringField({ description: '标题', example: '任务' })
  title!: string;

  @StringField({ description: '内容', example: '任务' })
  content!: string;

  @EnumFieldOptional(() => WorktaskStatus, {
    description: '状态',
    example: WorktaskStatus.PENDING,
  })
  status?: WorktaskStatus;

  @DateFieldOptional({ description: '开始时间', example: '2024-01-01' })
  startTime?: string;

  @DateFieldOptional({ description: '结束时间', example: '2024-01-01' })
  endTime?: string;

  @UUIDField({
    description: '用户id',
    example: 'ac369a45-9b39-439f-8dfb-f4df9e095b8d',
  })
  workUserId: Uuid;

  @UUIDField({
    description: '项目id',
    example: 'ac369a45-9b39-439f-8dfb-f4df9e095b8d',
  })
  projectId: Uuid;

  toObject(obj) {
    const { title, content, status } = obj;
    return {
      title,
      content,
      status,
    };
  }
}
