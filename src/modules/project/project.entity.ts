/*
 * @Author: jason
 * @Date: 2024-12-16 15:34:44
 * @LastEditTime: 2024-12-17 20:26:04
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\project\project.entity.ts
 *
 */
import { RolesStatus } from 'src/enum/roles-status.enum';
import { Column, Entity, OneToMany } from 'typeorm';
import { ProjectDto, ProjectDtoOptions } from './dto/project.dto';
import { UseDto } from 'src/decorators';
import { AbstractEntity } from 'src/common/abstract.entity';
import { WorktaskEntity } from '../worktask/worktask.entity';

@Entity('project')
@UseDto(ProjectDto)
export class ProjectEntity extends AbstractEntity<
  ProjectDto,
  ProjectDtoOptions
> {
  @Column({ unique: true })
  name!: string;

  @Column({ type: 'enum', enum: RolesStatus, default: RolesStatus.ENABLE })
  status!: RolesStatus;

  @Column({ default: '' })
  description: string;

  // @OneToMany(() => WorktaskEntity, (worktask) => worktask.project)
  // worktasks: WorktaskEntity[];
}
