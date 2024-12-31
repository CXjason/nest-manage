/*
 * @Author: jason
 * @Date: 2024-12-16 15:30:02
 * @LastEditTime: 2024-12-17 20:06:39
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\project\project.controller.ts
 *
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { ApiOperation, ApiParam, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Auth, UUIDParam } from 'src/decorators/http.decorators';
import { ApiDataResponse } from 'src/common/dto/response.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { ProjectDto } from './dto/project.dto';
import { ProjectCreateDto } from './dto/project-create.dto';
import { BatchDeleteDto } from 'src/common/dto/batch-delete.dto';
import { ProjectPageOptionsDto } from './dto/project-page-options.dto';
import { ProjectUpdateDto } from './dto/project-update.dto';

@Controller('project')
@ApiSecurity('bearer')
@ApiTags('项目')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  @Auth()
  @ApiOperation({ summary: '获取列表' })
  @ApiDataResponse(ProjectDto, true)
  async getProject(
    @Query() projectPageOptionDto: ProjectPageOptionsDto,
  ): Promise<PageDto<ProjectDto>> {
    console.log(projectPageOptionDto);
    return this.projectService.getAllProject(projectPageOptionDto);
  }

  @Get(':id')
  @Auth()
  @ApiOperation({ summary: '获取单个' })
  @ApiParam({ name: 'id', description: '角色id', example: '1' })
  @ApiDataResponse(ProjectDto)
  async getSingleRole(@UUIDParam('id') id: Uuid): Promise<ProjectDto> {
    const entity = await this.projectService.getSingle(id);

    return entity.toDto();
  }

  @Post()
  @Auth()
  @ApiOperation({ summary: '新增' })
  create(@Body() body: ProjectCreateDto) {
    console.log(body);
    return this.projectService.create(body);
  }

  @Delete(':id')
  @Auth()
  @ApiOperation({ summary: '删除' })
  @ApiParam({ name: 'id', description: '角色id', example: '1' })
  async delete(@UUIDParam('id') id: Uuid): Promise<void> {
    await this.projectService.delete(id);
  }

  @Delete('/batch/delete')
  @Auth()
  @ApiOperation({ summary: '删除多个' })
  async batchDelete(@Body() batchDeleteDto: BatchDeleteDto): Promise<void> {
    await this.projectService.batchDelete(batchDeleteDto);
  }

  @Put(':id')
  @Auth()
  @ApiOperation({ summary: '修改' })
  @ApiParam({ name: 'id', description: '角色id', example: '1' })
  update(
    @UUIDParam('id') id: Uuid,
    @Body() updateProjectDto: ProjectUpdateDto,
  ): Promise<void> {
    console.log(updateProjectDto);

    return this.projectService.update(id, updateProjectDto);
  }
}
