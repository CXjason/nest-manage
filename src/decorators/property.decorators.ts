/*
 * @Author: jason
 * @Date: 2024-11-18 11:33:33
 * @LastEditTime: 2024-11-18 16:36:13
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\decorators\property.decorators.ts
 *
 *
 */

import { ApiProperty, type ApiPropertyOptions } from '@nestjs/swagger';
import { getVariableName } from 'src/common/utils';
export function ApiUUIDProperty(
  options: Omit<ApiPropertyOptions, 'type' | 'format'> &
    Partial<{ each: boolean }> = {},
): PropertyDecorator {
  return ApiProperty({
    type: options.each ? [String] : String,
    format: 'uuid',
    isArray: options.each,
    enumName: 'Uuid',
    ...options,
  } as ApiPropertyOptions);
}

export function ApiEnumProperty<TEnum>(
  getEnum: () => TEnum,
  options: Omit<ApiPropertyOptions, 'type'> & { each?: boolean } = {},
): PropertyDecorator {
  // eslint-disable-next-line
  const enumValue = getEnum() as any;

  return ApiProperty({
    type: options.each ? [String] : String,
    // throw error during the compilation of swagger
    //isArray: options.each,
    enum: enumValue,
    enumName: getVariableName(getEnum),
    ...options,
  } as ApiPropertyOptions);
}
