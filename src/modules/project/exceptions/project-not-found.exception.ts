/*
 * @Author: jason
 * @Date: 2024-11-29 17:12:19
 * @LastEditTime: 2024-12-16 16:33:04
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\project\exceptions\project-not-found.exception.ts
 *
 */
import { NotFoundException } from '@nestjs/common';

export class ProjectNotFoundException extends NotFoundException {
  constructor(error?: string) {
    super('error.projectNotFound', error);
  }
}
