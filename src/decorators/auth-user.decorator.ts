/*
 * @Author: jason
 * @Date: 2024-11-26 11:44:20
 * @LastEditTime: 2024-11-26 14:47:14
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\decorators\auth-user.decorator.ts
 *
 */

import type { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
export function AuthUser() {
  return createParamDecorator((_data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    const user = request.user;

    if (user?.[Symbol.for('isPublic')]) {
      return;
    }

    return user;
  })();
}
