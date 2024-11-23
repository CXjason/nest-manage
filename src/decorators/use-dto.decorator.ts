/*
 * @Author: jason
 * @Date: 2024-11-15 16:15:43
 * @LastEditTime: 2024-11-22 15:34:11
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\decorators\use-dto.decorator.ts
 *
 */

import type { Constructor } from '../types';

export function UseDto(dtoClass: Constructor): ClassDecorator {
  return (ctor) => {
    if (!(dtoClass as unknown)) {
      throw new Error('useDto decorator requires dtoClass');
    }

    ctor.prototype.dtoClass = dtoClass;
  };
}
