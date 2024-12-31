import { AbstractEntity } from './common/abstract.entity';
import { AbstractDto } from './common/dto/absrract.dto';
import { compact, map } from 'lodash';
import { PageOptionsDto } from './common/dto/page-options.dto';
import { PageMetaDto } from './common/dto/page-meta.dto';
import { KeyOfType } from './types';
import { Brackets, ObjectLiteral, SelectQueryBuilder } from 'typeorm';
import { LanguageCode } from './constrants/language-code';
import { PageDto } from './common/dto/page.dto';
import { OrderEnum } from './enum/order.enum';
/*
 * @Author: jason
 * @Date: 2024-11-18 11:27:51
 * @LastEditTime: 2024-12-23 16:17:59
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\boilerplate.polyfill.ts
 */
export {};

export type DateTimeRange = {
  startDateTime: Date;
  endDateTime: Date;
};

declare global {
  export type Uuid = string & { _uuidBrand: undefined };

  interface Array<T> {
    toDtos<Dto extends AbstractDto>(this: T[], options?: unknown): Dto[];

    // getByLanguage(
    //   this: CreateTranslationDto[],
    //   languageCode: LanguageCode,
    // ): string;

    toPageDto<Dto extends AbstractDto>(
      this: T[],
      pageMetaDto: PageMetaDto,
      // FIXME make option type visible from entity
      options?: unknown,
    ): PageDto<Dto>;
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

declare module 'typeorm' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface SelectQueryBuilder<Entity> {
    searchByString(
      q: string,
      columnNames: string[],
      options?: {
        formStart: boolean;
      },
    ): this;

    searchByDateTimeRange(
      q: string,
      column: string,
      dateTimeRange: DateTimeRange,
    ): this;

    searchFieldString<T extends object>(
      tableName: string,
      columns: T,
      options?: {
        formStart: boolean;
      },
    ): this;

    orderByField(tableName: string, fieldName: string, order: OrderEnum): this;

    orderByFields(
      tableName: string,
      fields: { [key: string]: OrderEnum },
    ): this;

    paginate(
      this: SelectQueryBuilder<Entity>,
      pageOptionsDto: PageOptionsDto,
      options?: Partial<{ takeAll: boolean; skipCount: boolean }>,
    ): Promise<[Entity[], PageMetaDto]>;

    leftJoinAndSelect<AliasEntity extends AbstractEntity, A extends string>(
      this: SelectQueryBuilder<Entity>,
      property: `${A}.${Exclude<
        KeyOfType<AliasEntity, AbstractEntity>,
        symbol
      >}`,
      alias: string,
      condition?: string,
      parameters?: ObjectLiteral,
    ): this;

    leftJoin<AliasEntity extends AbstractEntity, A extends string>(
      this: SelectQueryBuilder<Entity>,
      property: `${A}.${Exclude<
        KeyOfType<AliasEntity, AbstractEntity>,
        symbol
      >}`,
      alias: string,
      condition?: string,
      parameters?: ObjectLiteral,
    ): this;

    innerJoinAndSelect<AliasEntity extends AbstractEntity, A extends string>(
      this: SelectQueryBuilder<Entity>,
      property: `${A}.${Exclude<
        KeyOfType<AliasEntity, AbstractEntity>,
        symbol
      >}`,
      alias: string,
      condition?: string,
      parameters?: ObjectLiteral,
    ): this;

    innerJoin<AliasEntity extends AbstractEntity, A extends string>(
      this: SelectQueryBuilder<Entity>,
      property: `${A}.${Exclude<
        KeyOfType<AliasEntity, AbstractEntity>,
        symbol
      >}`,
      alias: string,
      condition?: string,
      parameters?: ObjectLiteral,
    ): this;
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

// Array.prototype.getByLanguage = function (languageCode: LanguageCode): string {
//   // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
//   return this.find((translation) => languageCode === translation.languageCode)!
//     .text;
// };

Array.prototype.toPageDto = function (
  pageMetaDto: PageMetaDto,
  options?: unknown,
) {
  return new PageDto(this.toDtos(options), pageMetaDto);
};

// 扩展 SelectQueryBuilder 原型  对该表的字段做排序
SelectQueryBuilder.prototype.orderByFields = function (
  tableName: string,
  fields: { [key: string]: OrderEnum },
) {
  for (const [key, value] of Object.entries(fields)) {
    if (value) {
      this.orderByField(tableName, key, value);
    }
  }
  return this;
};
// 扩展 SelectQueryBuilder 原型  对该表的某个字段做排序
SelectQueryBuilder.prototype.orderByField = function (
  tableName: string,
  fieldName: string,
  order: OrderEnum = OrderEnum.ASC,
) {
  if (!tableName || !fieldName) {
    throw new Error('Table name and field name are required');
  }

  const alias = this.expressionMap.aliases.find(
    (alias) => alias.metadata.tableName === tableName,
  );
  if (!alias) {
    throw new Error(`Table alias for ${tableName} not found`);
  }

  this.addOrderBy(`${alias.name}.${fieldName}`, order);
  return this;
};

// 根据表中字段模糊搜索
SelectQueryBuilder.prototype.searchFieldString = function (
  tableName,
  columns,
  options,
) {
  this.andWhere(
    new Brackets((qb) => {
      for (const [key, value] of Object.entries(columns)) {
        if (value || value === 0) {
          qb.andWhere(`${tableName}.${key} LIKE :${key}`);
          this.setParameter(
            key,
            options?.formStart ? `${value}%` : `%${value}%`,
          );
        }
      }
    }),
  );

  return this;
};

SelectQueryBuilder.prototype.searchByString = function (
  q,
  columnNames,
  options,
) {
  if (!q) {
    return this;
  }

  this.andWhere(
    new Brackets((qb) => {
      for (const item of columnNames) {
        console.log(`${item} LIKE :q`);
        qb.orWhere(`${item} LIKE :q`);
      }
    }),
  );

  if (options?.formStart) {
    this.setParameter('q', `${q}%`);
  } else {
    this.setParameter('q', `%${q}%`);
  }

  return this;
};

SelectQueryBuilder.prototype.searchByDateTimeRange = function (
  q,
  column,
  { startDateTime, endDateTime }: DateTimeRange,
) {
  this.andWhere(`${q}.${column} BETWEEN :startDateTime AND :endDateTime`, {
    startDateTime,
    endDateTime,
  });
  return this;
};

SelectQueryBuilder.prototype.paginate = async function (
  pageOptionsDto: PageOptionsDto,
  options?: Partial<{
    skipCount: boolean;
    takeAll: boolean;
  }>,
) {
  if (!options?.takeAll) {
    this.skip((pageOptionsDto.page - 1) * pageOptionsDto.take).take(
      pageOptionsDto.take,
    );
  }

  const entities = await this.getMany();

  let itemCount = -1;

  if (!options?.skipCount) {
    itemCount = await this.getCount();
  }

  const pageMetaDto = new PageMetaDto({
    itemCount,
    pageOptionsDto,
  });

  return [entities, pageMetaDto];
};
