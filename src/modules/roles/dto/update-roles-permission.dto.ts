/*
 * @Author: jason
 * @Date: 2024-12-03 09:55:05
 * @LastEditTime: 2024-12-12 14:35:24
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\roles\dto\update-roles-permission.dto.ts
 *
 */

import { IsArray } from 'class-validator';
import { ArrayUuidField } from 'src/decorators';

export class UpdateRolesPermissionDto {
  @ArrayUuidField({ description: '权限id列表', example: ['1', '2'] })
  permissionIds!: string[];
}
