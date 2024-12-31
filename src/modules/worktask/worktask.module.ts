/*
 * @Author: jason
 * @Date: 2024-12-17 11:21:02
 * @LastEditTime: 2024-12-17 19:58:52
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\worktask\worktask.module.ts
 *
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorktaskController } from './worktask.controller';
import { WorktaskService } from './worktask.service';

import { WorktaskEntity } from './worktask.entity';
import { UserModule } from '../user/user.module';
import { ProjectModule } from '../project/project.module';

@Module({
  imports: [
    UserModule,
    ProjectModule,
    TypeOrmModule.forFeature([WorktaskEntity]),
  ],
  controllers: [WorktaskController],
  providers: [WorktaskService],
})
export class WorktaskModule {}
