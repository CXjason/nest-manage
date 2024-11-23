/*
 * @Author: jason
 * @Date: 2024-11-23 16:58:19
 * @LastEditTime: 2024-11-23 17:01:18
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\modules\roles\roles.module.ts
 *
 */
import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
