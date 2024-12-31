import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorktaskEntity } from './worktask.entity';
import { WorktaskCreateDto } from './dto/worktask-create.dto';
import { UserService } from '../user/user.service';
import { Repository } from 'typeorm';
import { WorktaskUpdateDto } from './dto/worktask-update.dto';
import { BatchDeleteDto } from 'src/common/dto/batch-delete.dto';
import { UUIDParam } from 'src/decorators/http.decorators';
import { WorktaskDto } from './dto/worktask.dto';
import { WorktaskPageOptionsDto } from './dto/worktask-page-options.dto';
import { ProjectService } from '../project/project.service';
import { OrderDateDto } from 'src/common/dto/OrderDate.dto';

@Injectable()
export class WorktaskService {
  constructor(
    @InjectRepository(WorktaskEntity)
    private readonly worktaskRepository: Repository<WorktaskEntity>,
    private readonly userService: UserService,
    private readonly projectService: ProjectService,
  ) {}

  async getAll(pageOptionsDto: WorktaskPageOptionsDto): Promise<any> {
    // return this.worktaskRepository.find({
    //   relations: ['workUser', 'project'],
    // });

    const queryBuilder = this.worktaskRepository
      .createQueryBuilder('worktask')
      .leftJoinAndSelect('worktask.workUser', 'workUser')
      .leftJoinAndSelect('worktask.project', 'project');

    const worktaskCreateDto = new WorktaskCreateDto().toObject(pageOptionsDto);
    queryBuilder.searchFieldString('worktask', worktaskCreateDto);

    const orderDateDto = new OrderDateDto().toObject(pageOptionsDto);
    console.log(orderDateDto);

    queryBuilder.orderByFields('worktask', orderDateDto);

    const { workUserId, projectId, startEndTime, startStartTime } =
      pageOptionsDto;

    if (workUserId) {
      queryBuilder.andWhere('workUser.id = :workUserId', { workUserId });
    }

    if (projectId) {
      queryBuilder.andWhere('project.id = :projectId', { projectId });
    }

    if (startStartTime && startEndTime) {
      queryBuilder.searchByDateTimeRange('worktask', 'startTime', {
        startDateTime: startStartTime,
        endDateTime: startEndTime,
      });
    }

    const [items, pageMetaDto] = await queryBuilder.paginate(pageOptionsDto);

    return items.toPageDto(pageMetaDto);
  }

  async create(worktaskCreateDto: WorktaskCreateDto) {
    const { workUserId, projectId, ...rest } = worktaskCreateDto;
    // 获取用户
    const user = (await this.userService.getSingleUser(workUserId)) as any;
    const project = await this.projectService.getSingle(projectId);

    console.log(user);
    console.log(project);

    const worktaskParams = {
      ...rest,
    };
    if (user) {
      worktaskParams['workUser'] = user;
    }

    if (project) {
      worktaskParams['project'] = project;
    }

    return this.worktaskRepository.save(worktaskParams);
  }

  async update(id: Uuid, worktaskUpdateDto: WorktaskUpdateDto) {
    const { workUserId, ...rest } = worktaskUpdateDto;
    const updateParams = rest;

    if (workUserId) {
      // 获取用户
      updateParams['workUser'] = this.userService.getSingleUser(
        workUserId,
      ) as any;
    }

    await this.worktaskRepository.update(id, updateParams);
  }

  async delete(id: Uuid) {
    return this.worktaskRepository.delete(id);
  }

  async batchDelete(batchDeleteDto: BatchDeleteDto) {
    return this.worktaskRepository.delete(batchDeleteDto.ids);
  }

  async getSingle(@UUIDParam('id') id: Uuid): Promise<WorktaskDto> {
    return this.worktaskRepository.findOne({
      where: { id },
    });
  }
}
