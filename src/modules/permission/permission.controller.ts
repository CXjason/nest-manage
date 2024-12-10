/*
 * @Author: jason
 * @Date: 2024-12-02 11:47:55
 * @LastEditTime: 2024-12-10 17:49:55
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
import { UUIDParam } from 'src/decorators/http.decorators';
import { PermissionCreateDto } from './dto/permission-create.dto';
import { PermissionUpdateDto } from './dto/permission-update.dto';
import { BatchDeleteDto } from 'src/common/dto/batch-delete.dto';

@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get()
  async getPermission(
    @Query() permissionPageOptionsDto: PermissionPageOptionsDto,
  ): Promise<PageDto<PermissionDto>> {
    return this.permissionService.getAllPermissions(permissionPageOptionsDto);
  }

  @Get(':id')
  async getSinglePermission(@UUIDParam('id') id: Uuid): Promise<PermissionDto> {
    const entity = await this.permissionService.getSinglePermission(id);
    return entity;
  }

  @Post()
  create(@Body() permissionCreateDto: PermissionCreateDto) {
    return this.permissionService.create(permissionCreateDto);
  }

  @Put(':id')
  update(
    @UUIDParam('id') id: Uuid,
    @Body() permissionUpdateDto: PermissionUpdateDto,
  ): Promise<void> {
    // console.log('permissionUpdateDto');
    // console.log(permissionUpdateDto);

    return this.permissionService.update(id, permissionUpdateDto);
  }

  @Delete(':id')
  async delete(@UUIDParam('id') id: Uuid): Promise<void> {
    console.log(id);

    await this.permissionService.delete(id);
  }

  @Delete('/batch/delete')
  async batchDelete(@Body() batchDeleteDto: BatchDeleteDto): Promise<void> {
    await this.permissionService.batchDelete(batchDeleteDto);
  }
}
