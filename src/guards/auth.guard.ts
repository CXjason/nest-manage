/*
 * @Author: jason
 * @Date: 2024-11-26 10:23:13
 * @LastEditTime: 2024-11-27 15:34:19
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\guards\auth.guard.ts
 *
 */

import type { IAuthGuard, Type } from '@nestjs/passport';
import { AuthGuard as NestAuthGuard } from '@nestjs/passport';

export function AuthGuard(
  options?: Partial<{ public: boolean }>,
): Type<IAuthGuard> {
  const strategies = ['jwt'];

  if (options?.public) {
    strategies.push('public');
  }

  return NestAuthGuard(strategies);
}
