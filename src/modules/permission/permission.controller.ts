/*
 * @Author: jason
 * @Date: 2024-12-02 11:47:55
 * @LastEditTime: 2024-12-12 15:54:54
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\permission\permission.controller.ts
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
import { PermissionService } from './permission.service';
import { PermissionPageOptionsDto } from './dto/permission-page-options.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { PermissionDto } from './dto/permission.dto';
import { Auth, UUIDParam } from 'src/decorators/http.decorators';
import { PermissionCreateDto } from './dto/permission-create.dto';
import { PermissionUpdateDto } from './dto/permission-update.dto';
import { BatchDeleteDto } from 'src/common/dto/batch-delete.dto';
import { ApiDataResponse } from 'src/common/dto/response.dto';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('permission')
@ApiTags('权限')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get()
  @Auth()
  @ApiOperation({ summary: '获取列表' })
  @ApiDataResponse(PermissionDto, true)
  async getPermission(
    @Query() permissionPageOptionsDto: PermissionPageOptionsDto,
  ): Promise<PageDto<PermissionDto>> {
    return this.permissionService.getAllPermissions(permissionPageOptionsDto);
  }

  @Get(':id')
  @Auth()
  @ApiOperation({ summary: '获取单个' })
  @ApiParam({ name: 'id', description: '权限id', example: '1' })
  @ApiDataResponse(PermissionDto)
  async getSinglePermission(@UUIDParam('id') id: Uuid): Promise<PermissionDto> {
    const entity = await this.permissionService.getSinglePermission(id);
    return entity;
  }

  @Post()
  @Auth()
  @ApiOperation({ summary: '新增' })
  create(@Body() permissionCreateDto: PermissionCreateDto) {
    return this.permissionService.create(permissionCreateDto);
  }

  @Put(':id')
  @Auth()
  @ApiOperation({ summary: '修改' })
  @ApiParam({ name: 'id', description: '权限id', example: '1' })
  update(
    @UUIDParam('id') id: Uuid,
    @Body() permissionUpdateDto: PermissionUpdateDto,
  ): Promise<void> {
    // console.log('permissionUpdateDto');
    // console.log(permissionUpdateDto);

    return this.permissionService.update(id, permissionUpdateDto);
  }

  @Delete(':id')
  @Auth()
  @ApiOperation({ summary: '删除' })
  @ApiParam({ name: 'id', description: '权限id', example: '1' })
  async delete(@UUIDParam('id') id: Uuid): Promise<void> {
    console.log(id);

    await this.permissionService.delete(id);
  }

  @Delete('/batch/delete')
  @Auth()
  @ApiOperation({ summary: '删除多个' })
  async batchDelete(@Body() batchDeleteDto: BatchDeleteDto): Promise<void> {
    await this.permissionService.batchDelete(batchDeleteDto);
  }
}
