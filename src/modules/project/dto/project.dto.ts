/*
 * @Author: jason
 * @Date: 2024-12-02 08:53:28
 * @LastEditTime: 2024-12-16 15:40:54
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\project\dto\project.dto.ts
 *
 */
import { AbstractDto } from 'src/common/dto/absrract.dto';
import {
  BooleanFieldOptional,
  EnumFieldOptional,
  StringField,
  StringFieldOptional,
} from 'src/decorators';
import { RolesStatus } from 'src/enum/roles-status.enum';
import { ProjectEntity } from '../project.entity';

export type ProjectDtoOptions = Partial<{ isActive: boolean }>;

export class ProjectDto extends AbstractDto {
  @StringField({ nullable: true, description: '名称', example: 'A项目' })
  name!: string;

  @EnumFieldOptional(() => RolesStatus, { description: '状态', example: 1 })
  status!: RolesStatus;

  @StringFieldOptional({ description: '描述', example: 'aaa项目' })
  description?: string;

  @BooleanFieldOptional({ description: '是否激活', example: true })
  isActive?: boolean;

  constructor(project: ProjectEntity, options?: ProjectDtoOptions) {
    super(project);
    this.name = project.name;
    this.status = project.status;
    this.description = project.description;
    this.isActive = options?.isActive;
  }
}
