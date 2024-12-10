/*
 * @Author: jason
 * @Date: 2024-11-29 17:12:19
 * @LastEditTime: 2024-12-05 18:03:32
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\user\exceptions\users-not-found.exception.ts
 *
 */
import { HttpException } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor(msg?: string, code?: number) {
    super(msg || 'User not found11', code || 4041);
  }
}
