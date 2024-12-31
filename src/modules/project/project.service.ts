import { Injectable } from '@nestjs/common';
import { ProjectEntity } from './project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BatchDeleteDto } from 'src/common/dto/batch-delete.dto';
import { ProjectCreateDto } from './dto/project-create.dto';
import { ProjectUpdateDto } from './dto/project-update.dto';
import { ProjectNotFoundException } from './exceptions/project-not-found.exception';
import { ProjectPageOptionsDto } from './dto/project-page-options.dto';
import { ProjectDto } from './dto/project.dto';
import { PageDto } from 'src/common/dto/page.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>,
  ) {}

  create(params: ProjectCreateDto) {
    return this.projectRepository.save(params);
  }

  async delete(id: Uuid): Promise<void> {
    const queryBuilder = this.projectRepository
      .createQueryBuilder('roles')
      .where('roles.id = :id', { id });

    const postEntity = await queryBuilder.getOne();

    if (!postEntity) {
      throw new ProjectNotFoundException();
    }

    await this.projectRepository.remove(postEntity);
  }

  async batchDelete(batchDeleteDto: BatchDeleteDto): Promise<void> {
    const { ids } = batchDeleteDto;
    console.log(ids);

    await this.projectRepository.delete(ids);
  }

  async update(id, updateProjectDto: ProjectUpdateDto): Promise<void> {
    const queryBuilder = this.projectRepository
      .createQueryBuilder('roles')
      .where('roles.id = :id', { id });

    const rolesEntity = await queryBuilder.getOne();

    if (!rolesEntity) {
      throw new ProjectNotFoundException();
    }

    //this.projectRepository.merge(rolesEntity, updateProjectDto);

    await this.projectRepository.update(id, updateProjectDto);
  }

  async getSingle(id: Uuid): Promise<ProjectEntity> {
    const queryBuilder = this.projectRepository
      .createQueryBuilder('project')
      .where('project.id=:id', { id });

    const entity = await queryBuilder.getOne();

    if (!entity) {
      throw new ProjectNotFoundException();
    }

    return entity;
  }

  async getAllProject(
    projectPageOptionsDto: ProjectPageOptionsDto,
  ): Promise<PageDto<ProjectDto>> {
    const queryBuilder = this.projectRepository.createQueryBuilder('project');
    //console.log(queryBuilder);

    const projectCreateDto = new ProjectCreateDto().toObject(
      projectPageOptionsDto,
    );

    queryBuilder.searchFieldString('project', projectCreateDto);

    const [items, pageMetaDto] = await queryBuilder.paginate(
      projectPageOptionsDto,
    );

    return items.toPageDto(pageMetaDto);
  }
}
