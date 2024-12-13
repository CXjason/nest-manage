/*
 * @Author: jason
 * @Date: 2024-11-28 10:46:29
 * @LastEditTime: 2024-12-12 16:47:07
 * @LastEditors: jason
 * @Description: 捕获数据库查询错误
 * @FilePath: \nest-manage\src\filters\query-failed.filter.ts
 *
 */
import { STATUS_CODES } from 'node:http';
import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Catch, HttpStatus } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import type { Response } from 'express';
import { constraintErrors } from './constraint-error';
import { Reflector } from '@nestjs/core';
import { responseMsg } from 'src/common/utils/response-data';

@Catch(QueryFailedError)
export class QueryFailedFilter implements ExceptionFilter<QueryFailedError> {
  constructor(public reflector: Reflector) {}
  catch(
    exception: QueryFailedError & { constraint?: string },
    host: ArgumentsHost,
  ) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = exception.constraint?.startsWith('UQ')
      ? HttpStatus.CONFLICT
      : HttpStatus.INTERNAL_SERVER_ERROR;

    console.log('QueryFailedError');
    console.log(exception);

    response.status(status).json(
      responseMsg({
        code: status,
        error: STATUS_CODES[status],
        message: exception.constraint
          ? constraintErrors[exception.constraint]
          : undefined,
      }),
    );
  }
}
