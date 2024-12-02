/*
 * @Author: jason
 * @Date: 2024-12-02 09:51:13
 * @LastEditTime: 2024-12-02 09:55:14
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\common\dto\page-meta.dto.ts
 *
 */
import { BooleanField, NumberField } from 'src/decorators';
import type { PageOptionsDto } from './page-options.dto';

interface IPageMetaDtoParameters {
  pageOptionsDto: PageOptionsDto;
  itemCount: number;
}

export class PageMetaDto {
  @NumberField()
  readonly page: number;

  @NumberField()
  readonly take: number;

  @NumberField()
  readonly itemCount: number;

  @NumberField()
  readonly pageCount: number;

  @BooleanField()
  readonly hasPreviousPage: boolean;

  @BooleanField()
  readonly hasNextPage: boolean;

  constructor({ pageOptionsDto, itemCount }: IPageMetaDtoParameters) {
    this.page = pageOptionsDto.page;
    this.take = pageOptionsDto.take;
    this.itemCount = itemCount;
    this.pageCount = Math.ceil(this.itemCount / this.take);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.pageCount;
  }
}
