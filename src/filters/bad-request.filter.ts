/*
 * @Author: jason
 * @Date: 2024-11-28 10:32:10
 * @LastEditTime: 2024-11-29 08:32:25
 * @LastEditors: jason
 * @Description: 铺货参数错误
 * @FilePath: \nest-manage\src\filters\bad-request.filter.ts
 *
 */
import type { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Catch, UnprocessableEntityException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { Response } from 'express';
import { ValidationError } from 'class-validator';
import _ from 'lodash';
import { responseMsg } from 'src/common/utils/response-data';

@Catch(UnprocessableEntityException)
export class HttpExceptionFilter
  implements ExceptionFilter<UnprocessableEntityException>
{
  constructor(public reflector: Reflector) {}

  catch(exception: UnprocessableEntityException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const statusCode = exception.getStatus();
    const r = exception.getResponse() as {
      message: ValidationError[];
      statusCode: number;
      error: string;
    };

    const validationErrors = r.message;

    this.validationFilter(validationErrors);

    response.status(statusCode).json(
      responseMsg({
        ...r,
        code: r.statusCode,
      }),
    );
  }

  private validationFilter(validationErrors: ValidationError[]): void {
    for (const validationError of validationErrors) {
      const children = validationError.children;

      if (children && !_.isEmpty(children)) {
        this.validationFilter(children);
        return;
      }

      delete validationError.children;

      const constraints = validationError.constraints;

      if (!constraints) {
        return;
      }

      for (const [constraintKey, constraint] of Object.entries(constraints)) {
        if (!constraint) {
          constraints[constraintKey] = `error.fields.${_.snakeCase(
            constraintKey,
          )}`;
        }
      }
    }
  }
}
