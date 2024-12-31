/*
 * @Author: jason
 * @Date: 2024-12-17 11:23:30
 * @LastEditTime: 2024-12-23 14:59:59
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\worktask\worktask.controller.ts
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
import { WorktaskService } from './worktask.service';
import { Auth, UUIDParam } from 'src/decorators/http.decorators';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { WorktaskCreateDto } from './dto/worktask-create.dto';
import { WorktaskUpdateDto } from './dto/worktask-update.dto';
import { BatchDeleteDto } from 'src/common/dto/batch-delete.dto';
import { ApiDataResponse } from 'src/common/dto/response.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { WorktaskPageOptionsDto } from './dto/worktask-page-options.dto';
import { WorktaskDto } from './dto/worktask.dto';

@Controller('worktask')
export class WorktaskController {
  constructor(private readonly worktaskService: WorktaskService) {}

  @Get()
  @Auth()
  @ApiOperation({ summary: '获取列表' })
  @ApiDataResponse(WorktaskDto, true)
  async getProject(
    @Query() pageOptionDto: WorktaskPageOptionsDto,
  ): Promise<PageDto<WorktaskDto>> {
    return this.worktaskService.getAll(pageOptionDto);
  }

  @Post()
  @Auth()
  @ApiOperation({ summary: '新增' })
  create(@Body() worktaskCreateDto: WorktaskCreateDto) {
    return this.worktaskService.create(worktaskCreateDto);
  }

  @Put(':id')
  @Auth()
  @ApiOperation({ summary: '修改' })
  update(
    @UUIDParam('id') id: Uuid,
    @Body() worktaskUpdateDto: WorktaskUpdateDto,
  ) {
    console.log(worktaskUpdateDto);

    return this.worktaskService.update(id, worktaskUpdateDto);
  }

  @Delete(':id')
  @Auth()
  @ApiOperation({ summary: '删除' })
  delete(@UUIDParam('id') id: Uuid) {
    return this.worktaskService.delete(id);
  }

  @Delete('/batch/delete')
  @Auth()
  @ApiOperation({ summary: '删除多个' })
  batchDelete(@Body() batchDeleteDto: BatchDeleteDto) {
    return this.worktaskService.batchDelete(batchDeleteDto);
  }

  @Get(':id')
  @Auth()
  @ApiOperation({ summary: '获取单个' })
  @ApiParam({ name: 'id', description: 'id', example: '1' })
  async getSingleRole(@UUIDParam('id') id: Uuid) {
    return await this.worktaskService.getSingle(id);
  }
}
