/*
 * @Author: jason
 * @Date: 2024-12-12 10:31:52
 * @LastEditTime: 2024-12-12 14:23:38
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\common\dto\response.dto.ts
 *
 */

import {
  ApiExtraModels,
  ApiProperty,
  ApiResponse,
  getSchemaPath,
} from '@nestjs/swagger';
import { applyDecorators, Type } from '@nestjs/common';
import { PageDto } from './page.dto';
import { PageMetaDto } from './page-meta.dto';

export class ResponseData<T> {
  @ApiProperty({ type: () => Object })
  object: T;
}

export class ResponseDto<T> {
  @ApiProperty({
    description: '响应消息',
    example: '操作成功',
  })
  message: string;

  @ApiProperty({
    description: '响应状态码',
    example: 200,
  })
  code: number;

  @ApiProperty({ description: '响应数据', type: () => Object })
  data: ResponseData<T>;
}

export function ApiDataResponse<T>(
  entity: Type<T>,
  isPaginated: boolean = false,
) {
  const dataSchema = isPaginated
    ? {
        $ref: getSchemaPath(PageDto),
        properties: {
          data: { $ref: getSchemaPath(entity) },
          meta: { $ref: getSchemaPath(PageMetaDto) },
        },
      }
    : {
        $ref: getSchemaPath(entity),
      };

  return applyDecorators(
    ApiExtraModels(ResponseDto, PageDto, PageMetaDto, entity),
    ApiResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(ResponseDto) },
          {
            properties: {
              data: dataSchema,
            },
          },
        ],
      },
    }),
  );
}
