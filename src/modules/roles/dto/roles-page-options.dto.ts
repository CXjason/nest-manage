import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { IntersectionType, OmitType, PartialType } from '@nestjs/mapped-types';
import { RolesCreateDto } from './roles-create.dto';
import { StringFieldOptional } from 'src/decorators';

/*
 * @Author: jason
 * @Date: 2024-12-02 09:42:14
 * @LastEditTime: 2024-12-09 16:06:59
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\roles\dto\roles-page-options.dto.ts
 *
 */
export class RolesPageOptionsDto extends IntersectionType(
  PartialType(OmitType(RolesCreateDto, ['status'])),
  PageOptionsDto,
) {
  @StringFieldOptional()
  status?: string;
}
