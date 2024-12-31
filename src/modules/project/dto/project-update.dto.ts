/*
 * @Author: jason
 * @Date: 2024-12-10 09:47:10
 * @LastEditTime: 2024-12-16 15:50:01
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\project\dto\project-update.dto.ts
 *
 */
import { PartialType } from '@nestjs/mapped-types';
import { ProjectCreateDto } from './project-create.dto';

export class ProjectUpdateDto extends PartialType(ProjectCreateDto) {}
