/*
 * @Author: jason
 * @Date: 2024-11-26 11:01:24
 * @LastEditTime: 2024-12-12 17:01:14
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\interceptors\auth-user-interceptor.service.ts
 *
 */
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';

import { Injectable } from '@nestjs/common';

import type { UserEntity } from '../modules/user/user.entity';

import { ContextProvider } from '../providers';

@Injectable()
export class AuthUserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();

    const user = request.user as UserEntity;

    ContextProvider.setAuthUser(user);

    return next.handle();
  }
}
