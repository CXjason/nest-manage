/*
 * @Author: jason
 * @Date: 2024-11-26 10:18:52
 * @LastEditTime: 2024-11-29 17:49:29
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\decorators\http.decorators.ts
 *
 */
import { applyDecorators, UseInterceptors } from '@nestjs/common';
import { RoleType } from 'src/constrants/role-type';
import { Roles } from './roles.decorator';
import { UseGuards, Param, ParseUUIDPipe } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AuthUserInterceptor } from 'src/interceptors/auth-user-interceptor.service';
import { PublicRoute } from './public-route.decorator';
import type { Type } from '@nestjs/common/interfaces';
import type { PipeTransform } from '@nestjs/common';
export function Auth(
  roles: RoleType[] = [],
  options?: Partial<{ public: boolean }>,
): MethodDecorator {
  const isPublicRoute = options?.public;

  return applyDecorators(
    Roles(roles),
    UseGuards(AuthGuard({ public: isPublicRoute }), RolesGuard),
    ApiBearerAuth(),
    UseInterceptors(AuthUserInterceptor),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
    PublicRoute(isPublicRoute),
  );
}

export function UUIDParam(
  property: string,
  ...pipes: Array<Type<PipeTransform> | PipeTransform>
): ParameterDecorator {
  return Param(property, new ParseUUIDPipe({ version: '4' }), ...pipes);
}
