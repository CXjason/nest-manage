/*
 * @Author: jason
 * @Date: 2024-11-29 17:12:19
 * @LastEditTime: 2024-11-29 17:13:16
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\exceptions\roles-not-found.exception.ts
 *
 */
import { NotFoundException } from '@nestjs/common';

export class RolesNotFoundException extends NotFoundException {
  constructor(error?: string) {
    super('error.rolesNotFound', error);
  }
}
