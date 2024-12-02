/*
 * @Author: jason
 * @Date: 2024-12-02 11:46:58
 * @LastEditTime: 2024-12-02 14:24:22
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\permission\permission.module.ts
 *
 */
import { Module } from '@nestjs/common';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionEntity } from './permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PermissionEntity])],
  controllers: [PermissionController],
  providers: [PermissionService],
})
export class PermissionModule {}
