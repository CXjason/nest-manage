/*
 * @Author: jason
 * @Date: 2024-11-26 11:07:10
 * @LastEditTime: 2024-11-26 11:08:48
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\decorators\public-route.decorator.ts
 *
 */
import type { CustomDecorator } from '@nestjs/common';
import { SetMetadata } from '@nestjs/common';

export const PUBLIC_ROUTE_KEY = 'public_route';

export const PublicRoute = (isPublic = false): CustomDecorator =>
  SetMetadata(PUBLIC_ROUTE_KEY, isPublic);
