/*
 * @Author: jason
 * @Date: 2024-12-17 16:15:28
 * @LastEditTime: 2024-12-17 16:19:50
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\worktask\dto\worktask-update.dto.ts
 *
 */

import { PartialType } from '@nestjs/mapped-types';
import { WorktaskCreateDto } from './worktask-create.dto';

export class WorktaskUpdateDto extends PartialType(WorktaskCreateDto) {}
