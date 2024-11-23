/*
 * @Author: jason
 * @Date: 2024-11-23 16:59:01
 * @LastEditTime: 2024-11-23 17:01:51
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\modules\roles\roles.controller.ts
 *
 */
import { Controller } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}
}
