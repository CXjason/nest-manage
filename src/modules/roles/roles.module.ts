/*
 * @Author: jason
 * @Date: 2024-11-23 16:58:19
 * @LastEditTime: 2024-12-02 17:17:59
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\roles\roles.module.ts
 *
 */
import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesEntity } from './roles.entity';
import { PermissionEntity } from '../permission/permission.entity';
@Module({
  imports: [TypeOrmModule.forFeature([RolesEntity, PermissionEntity])],
  controllers: [RolesController],
  providers: [RolesService],
  //exports: [RolesService],
})
export class RolesModule {}
