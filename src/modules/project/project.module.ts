/*
 * @Author: jason
 * @Date: 2024-12-16 15:28:32
 * @LastEditTime: 2024-12-17 19:59:50
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\project\project.module.ts
 *
 */
import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from './project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity])],
  controllers: [ProjectController],
  providers: [ProjectService],
  exports: [ProjectService],
})
export class ProjectModule {}
