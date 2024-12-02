/*
 * @Author: jason
 * @Date: 2024-11-26 10:21:13
 * @LastEditTime: 2024-11-26 10:21:47
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\decorators\roles.decorator.ts
 *
 */
import { Reflector } from '@nestjs/core';

export const Roles = Reflector.createDecorator<string[]>();
