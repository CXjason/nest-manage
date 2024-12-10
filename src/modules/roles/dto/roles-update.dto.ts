/*
 * @Author: jason
 * @Date: 2024-12-10 09:47:10
 * @LastEditTime: 2024-12-10 09:48:02
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\roles\dto\roles-update.dto.ts
 *
 */
import { RolesCreateDto } from './roles-create.dto';
import { PartialType } from '@nestjs/mapped-types';

export class RolesUpdateDto extends PartialType(RolesCreateDto) {}
