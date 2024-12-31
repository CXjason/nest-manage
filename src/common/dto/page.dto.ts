/*
 * @Author: jason
 * @Date: 2024-12-02 09:49:29
 * @LastEditTime: 2024-12-23 14:49:24
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\common\dto\page.dto.ts
 *
 */
import { ApiProperty } from '@nestjs/swagger';
import { PageMetaDto } from './page-meta.dto';
import { ClassField } from 'src/decorators';

export class PageDto<T> {
  @ApiProperty({ isArray: true, description: '数据', example: [] })
  data: T[];

  @ClassField(() => PageMetaDto)
  meta: PageMetaDto;

  constructor(data: T[], meta: PageMetaDto) {
    this.data = data;
    this.meta = meta;
  }
}
