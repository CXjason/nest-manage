import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { PartialType, IntersectionType } from '@nestjs/mapped-types';
import { PermissionCreateDto } from './permission-create.dto';
/*
 * @Author: jason
 * @Date: 2024-12-02 14:26:26
 * @LastEditTime: 2024-12-10 17:51:36
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\permission\dto\permission-page-options.dto.ts
 *
 */
export class PermissionPageOptionsDto extends IntersectionType(
  PageOptionsDto,
  PartialType(PermissionCreateDto),
) {}
