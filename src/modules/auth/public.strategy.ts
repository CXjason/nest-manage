/*
 * @Author: jason
 * @Date: 2024-11-26 14:10:58
 * @LastEditTime: 2024-11-27 15:57:08
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\auth\public.strategy.ts
 *
 */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport';

@Injectable()
export class PublicStrategy extends PassportStrategy(Strategy, 'public') {
  constructor() {
    super();
  }

  authenticate(): void {
    (this as any).success({ [Symbol.for('isPublic')]: true });
  }
}
