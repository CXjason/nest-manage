import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { IntersectionType, OmitType, PartialType } from '@nestjs/mapped-types';
import { DateFieldOptional, StringFieldOptional } from 'src/decorators';
import { WorktaskCreateDto } from './worktask-create.dto';
import { OrderDateDto } from 'src/common/dto/OrderDate.dto';

/*
 * @Author: jason
 * @Date: 2024-12-02 09:42:14
 * @LastEditTime: 2024-12-23 16:11:07
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\worktask\dto\worktask-page-options.dto.ts
 *
 */
export class WorktaskPageOptionsDto extends IntersectionType(
  PartialType(OmitType(WorktaskCreateDto, ['status', 'startTime', 'endTime'])),
  PageOptionsDto,
  OrderDateDto,
) {
  @StringFieldOptional()
  status?: string;

  @DateFieldOptional()
  startStartTime?: Date;

  @DateFieldOptional()
  startEndTime?: Date;
}
