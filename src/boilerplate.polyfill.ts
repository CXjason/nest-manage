import { AbstractEntity } from './common/abstract.entity';
import { AbstractDto } from './common/dto/absrract.dto';
import { compact, map } from 'lodash';
/*
 * @Author: jason
 * @Date: 2024-11-18 11:27:51
 * @LastEditTime: 2024-11-18 15:05:33
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\boilerplate.polyfill.ts
 */
export {};

declare global {
  export type Uuid = string & { _uuidBrand: undefined };

  interface Array<T> {
    toDtos<Dto extends AbstractDto>(this: T[], options?: unknown): Dto[];
  }
}

Array.prototype.toDtos = function <
  Entity extends AbstractEntity<Dto>,
  Dto extends AbstractDto,
>(options?: unknown): Dto[] {
  return compact(
    map<Entity, Dto>(this as Entity[], (item) => item.toDto(options as never)),
  );
};
