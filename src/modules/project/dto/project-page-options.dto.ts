import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { IntersectionType, OmitType, PartialType } from '@nestjs/mapped-types';
import { StringFieldOptional } from 'src/decorators';
import { ProjectCreateDto } from './project-create.dto';

/*
 * @Author: jason
 * @Date: 2024-12-02 09:42:14
 * @LastEditTime: 2024-12-16 15:47:32
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\project\dto\project-page-options.dto.ts
 *
 */
export class ProjectPageOptionsDto extends IntersectionType(
  PartialType(OmitType(ProjectCreateDto, ['status'])),
  PageOptionsDto,
) {
  @StringFieldOptional()
  status?: string;
}
