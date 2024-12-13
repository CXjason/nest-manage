/*
 * @Author: jason
 * @Date: 2024-11-23 16:59:01
 * @LastEditTime: 2024-12-12 14:55:18
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\roles\roles.controller.ts
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
import { RolesService } from './roles.service';
import { RolesCreateDto } from './dto/roles-create.dto';
import { Auth, UUIDParam } from 'src/decorators/http.decorators';
import { RolesDto } from './dto/roles.dto';
import { RolesPageOptionsDto } from './dto/roles-page-options.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { UpdateRolesPermissionDto } from './dto/update-roles-permission.dto';
import { RolesUpdateDto } from './dto/roles-update.dto';
import { BatchDeleteDto } from 'src/common/dto/batch-delete.dto';
import { ApiOperation, ApiParam, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ApiDataResponse } from 'src/common/dto/response.dto';

@Controller('roles')
@ApiSecurity('bearer') // 安全认证
@ApiTags('角色')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  @Auth()
  @ApiOperation({ summary: '获取列表' })
  @ApiDataResponse(RolesDto, true)
  async getRoles(
    @Query() rolesPageOptionDto: RolesPageOptionsDto,
  ): Promise<PageDto<RolesDto>> {
    console.log(rolesPageOptionDto);
    return this.rolesService.getAllRoles(rolesPageOptionDto);
  }

  @Get(':id')
  @Auth()
  @ApiOperation({ summary: '获取单个' })
  @ApiParam({ name: 'id', description: '角色id', example: '1' })
  @ApiDataResponse(RolesDto)
  async getSingleRole(@UUIDParam('id') id: Uuid): Promise<RolesDto> {
    const entity = await this.rolesService.getSingleRole(id);

    return entity.toDto();
  }

  @Post()
  @Auth()
  @ApiOperation({ summary: '新增' })
  create(@Body() body: RolesCreateDto) {
    console.log(body);
    return this.rolesService.create(body);
  }

  @Delete(':id')
  @Auth()
  @ApiOperation({ summary: '删除' })
  @ApiParam({ name: 'id', description: '角色id', example: '1' })
  async delete(@UUIDParam('id') id: Uuid): Promise<void> {
    await this.rolesService.delete(id);
  }

  @Delete('/batch/delete')
  @Auth()
  @ApiOperation({ summary: '删除多个' })
  async batchDelete(@Body() batchDeleteDto: BatchDeleteDto): Promise<void> {
    await this.rolesService.batchDelete(batchDeleteDto);
  }

  @Put(':id')
  @Auth()
  @ApiOperation({ summary: '修改' })
  @ApiParam({ name: 'id', description: '角色id', example: '1' })
  update(
    @UUIDParam('id') id: Uuid,
    @Body() updateRolesDto: RolesUpdateDto,
  ): Promise<void> {
    console.log(updateRolesDto);

    return this.rolesService.update(id, updateRolesDto);
  }

  @Get('/permissions/:id')
  @Auth()
  @ApiOperation({ summary: '获取权限' })
  @ApiParam({ name: 'id', description: '角色id', example: '1' })
  async getRolePermissions(@UUIDParam('id') id: Uuid): Promise<any> {
    return this.rolesService.getRolePermissions(id);
  }

  @Post('/permissions/:id')
  @Auth()
  @ApiOperation({ summary: '修改权限' })
  @ApiParam({ name: 'id', description: '角色id', example: '1' })
  async updateRolePermissions(
    @UUIDParam('id') id: Uuid,
    @Body() updateRolesPermissionDto: UpdateRolesPermissionDto,
  ): Promise<void> {
    return this.rolesService.updateRolePermissions(
      id,
      updateRolesPermissionDto,
    );
  }
}
