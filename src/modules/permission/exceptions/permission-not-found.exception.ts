/*
 * @Author: jason
 * @Date: 2024-11-29 17:12:19
 * @LastEditTime: 2024-12-02 15:23:23
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\permission\exceptions\permission-not-found.exception.ts
 *
 */
import { NotFoundException } from '@nestjs/common';

export class PermissionNotFoundException extends NotFoundException {
  constructor(error?: string) {
    super('error.permissionNotFound', error);
  }
}
