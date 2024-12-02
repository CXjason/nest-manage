/*
 * @Author: jason
 * @Date: 2024-12-02 09:49:29
 * @LastEditTime: 2024-12-02 09:57:49
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\common\dto\page.dto.ts
 *
 */
import { ApiProperty } from '@nestjs/swagger';
import { PageMetaDto } from './page-meta.dto';
import { ClassField } from 'src/decorators';

export class PageDto<T> {
  @ApiProperty({ isArray: true })
  readonly data: T[];

  @ClassField(() => PageMetaDto)
  readonly meta: PageMetaDto;

  constructor(data: T[], meta: PageMetaDto) {
    this.data = data;
    this.meta = meta;
  }
}
