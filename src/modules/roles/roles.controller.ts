/*
 * @Author: jason
 * @Date: 2024-11-23 16:59:01
 * @LastEditTime: 2024-12-10 17:36:00
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\roles\roles.controller.ts
 *
 */
/*
 * @Author: jason
 * @Date: 2024-11-23 16:59:01
 * @LastEditTime: 2024-12-10 11:25:38
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
  UsePipes,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesCreateDto } from './dto/roles-create.dto';
import { UUIDParam } from 'src/decorators/http.decorators';
import { RolesDto } from './dto/roles.dto';
import { RolesPageOptionsDto } from './dto/roles-page-options.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { UpdateRolesPermissionDto } from './dto/update-roles-permission.dto';
import { RolesUpdateDto } from './dto/roles-update.dto';
import { BatchDeleteDto } from 'src/common/dto/batch-delete.dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  async getRoles(
    @Query() rolesPageOptionDto: RolesPageOptionsDto,
  ): Promise<PageDto<RolesDto>> {
    console.log(rolesPageOptionDto);
    return this.rolesService.getAllRoles(rolesPageOptionDto);
  }

  @Get(':id')
  async getSingleRole(@UUIDParam('id') id: Uuid): Promise<RolesDto> {
    const entity = await this.rolesService.getSingleRole(id);

    return entity.toDto();
  }

  @Post()
  create(@Body() body: RolesCreateDto) {
    console.log(body);
    return this.rolesService.create(body);
  }

  @Delete(':id')
  async delete(@UUIDParam('id') id: Uuid): Promise<void> {
    await this.rolesService.delete(id);
  }

  @Delete('/batch/delete')
  async batchDelete(@Body() batchDeleteDto: BatchDeleteDto): Promise<void> {
    await this.rolesService.batchDelete(batchDeleteDto);
  }

  @Put(':id')
  update(
    @UUIDParam('id') id: Uuid,
    @Body() updateRolesDto: RolesUpdateDto,
  ): Promise<void> {
    console.log(updateRolesDto);

    return this.rolesService.update(id, updateRolesDto);
  }

  @Get('/permissions/:id')
  async getRolePermissions(@UUIDParam('id') id: Uuid): Promise<any> {
    return this.rolesService.getRolePermissions(id);
  }

  @Post('/permissions/:id')
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
