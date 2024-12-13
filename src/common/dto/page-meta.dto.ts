/*
 * @Author: jason
 * @Date: 2024-12-02 09:51:13
 * @LastEditTime: 2024-12-12 14:10:39
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
  @NumberField({ description: '当前页码', example: 1 })
  readonly page: number;

  @NumberField({ description: '每页数量', example: 10 })
  readonly take: number;

  @NumberField({ description: '总数', example: 100 })
  readonly itemCount: number;

  @NumberField({ description: '总页数', example: 10 })
  readonly pageCount: number;

  @BooleanField({ description: '是否有上一页', example: false })
  readonly hasPreviousPage: boolean;

  @BooleanField({ description: '是否有下一页', example: true })
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
