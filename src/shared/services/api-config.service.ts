/*
 * @Author: jason
 * @Date: 2024-11-13 19:01:46
 * @LastEditTime: 2024-11-22 16:02:21
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\shared\services\api-config.service.ts
 *
 */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { isNil } from 'lodash';
import parse, { type Units } from 'parse-duration';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserSubscriber } from '../../entity-subscribers/user-subscriber';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  get isDevelopment(): boolean {
    return this.nodeEnv === 'development';
  }

  get isTest(): boolean {
    return this.nodeEnv === 'test';
  }

  private get(key: string): string {
    const value = this.configService.get<string>(key);
    if (isNil(value)) {
      throw new Error(key + ' env variable does not set');
    }
    return value;
  }

  private getNumber(key: string): number {
    const value = this.get(key);

    try {
      return Number(value);
    } catch {
      throw new Error(key + ' env variable is not a number');
    }
  }

  private getDuration(key: string, format?: Units): number {
    const value = this.get(key);
    const duration = parse(value, format);

    if (duration === undefined) {
      throw new Error(`${key} env variable is not a valid duration`);
    }

    return duration;
  }

  private getString(key: string): string {
    const value = this.get(key);
    return value.replaceAll('\\n', '\n');
  }

  private getBoolean(key: string): boolean {
    const value = this.get(key);

    try {
      return Boolean(JSON.parse(value));
    } catch {
      throw new Error(key + ' env var is not a boolean');
    }
  }

  get nodeEnv(): string {
    return this.getString('NODE_ENV');
  }

  get appConfig() {
    return {
      port: this.getString('PORT'),
    };
  }

  get documentationEnabled(): boolean {
    return this.getBoolean('ENABLE_DOCUMENTATION');
  }

  get mysqlConfig(): TypeOrmModuleOptions {
    const entities = [
      __dirname + '/../../modules/**/*.entity{.ts,.js}',
      __dirname + '/../../modules/**/*.view-entity{.ts,.js}',
    ];
    const migrations = [__dirname + '/../../database/migrations/*{.ts,.js}'];

    return {
      entities,
      migrations,
      keepConnectionAlive: !this.isTest,
      dropSchema: this.isTest,
      type: 'mysql',
      name: 'root',
      host: this.getString('DB_HOST'),
      port: this.getNumber('DB_PORT'),
      username: this.getString('DB_USERNAME'),
      password: this.getString('DB_PASSWORD'),
      database: this.getString('DB_DATABASE'),
      subscribers: [UserSubscriber],
      synchronize: this.isDevelopment,
      //logging: this.getBoolean('ENABLE_ORM_LOGS'),
      //autoLoadEntities: this.isDevelopment,
    };
  }

  get authConfig() {
    return {
      privateKey: this.getString('JWT_PRIVATE_KEY'),
      publicKey: this.getString('JWT_PUBLIC_KEY'),
      jwtExpirationTime: this.getNumber('JWT_EXPIRATION_TIME'),
    };
  }
}
