import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { isPlainObject, assign } from 'lodash';
import { Reflector } from '@nestjs/core';
export class ResponseTransformInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const result = {
          code: 0,
          message: '',
          data: data,
        };

        if (isPlainObject(data) && 'code' in data) {
          return assign(result, data);
        }

        return result;
      }),
      catchError((err) => {
        //console.log('---', err);
        const result = {
          code: err.status,
          message: err.message,
          data: null,
        };
        return of(result);
      }),
    );
  }
}
