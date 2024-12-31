/*
 * @Author: jason
 * @Date: 2024-11-13 14:58:13
 * @LastEditTime: 2024-12-17 11:25:50
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\app.module.ts
 *
 */

import './boilerplate.polyfill';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from './shared/shared.modules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiConfigService } from './shared/services/api-config.service';
import { addTransactionalDataSource } from 'typeorm-transactional';
import { DataSource } from 'typeorm';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { RolesModule } from './modules/roles/roles.module';
import { ClsModule } from 'nestjs-cls';
import { PermissionModule } from './modules/permission/permission.module';
import { ProjectModule } from './modules/project/project.module';
import { WorktaskModule } from './modules/worktask/worktask.module';
@Module({
  imports: [
    UserModule,
    AuthModule,
    RolesModule,
    PermissionModule,
    ProjectModule,
    WorktaskModule,
    ClsModule.forRoot({
      global: true,
      middleware: {
        mount: true,
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    SharedModule,
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      useFactory: (configService: ApiConfigService) =>
        configService.mysqlConfig,
      inject: [ApiConfigService],
      dataSourceFactory: (options) => {
        if (!options) {
          throw new Error('Invalid options passed');
        }

        return Promise.resolve(
          addTransactionalDataSource(new DataSource(options)),
        );
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
