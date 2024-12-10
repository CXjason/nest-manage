/*
 * @Author: jason
 * @Date: 2024-11-19 09:55:05
 * @LastEditTime: 2024-12-05 16:19:37
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\exceptions\user-not-found.exception.ts
 *
 */
import { HttpException } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor(msg?: string, code?: number) {
    super(msg || 'User not found11', code || 4041);
  }
}
