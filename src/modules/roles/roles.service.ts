/*
 * @Author: jason
 * @Date: 2024-11-23 16:59:46
 * @LastEditTime: 2024-12-10 17:36:24
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\roles\roles.service.ts
 *
 */
import { Injectable } from '@nestjs/common';
import { RolesCreateDto } from './dto/roles-create.dto';
import { RolesEntity } from './roles.entity';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesNotFoundException } from './exceptions/roles-not-found.exception';
import { RolesPageOptionsDto } from './dto/roles-page-options.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { RolesDto } from './dto/roles.dto';
import { PermissionEntity } from '../permission/permission.entity';
import { UpdateRolesPermissionDto } from './dto/update-roles-permission.dto';
import { RolesUpdateDto } from './dto/roles-update.dto';
import { BatchDeleteDto } from 'src/common/dto/batch-delete.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RolesEntity)
    private readonly rolesRepository: Repository<RolesEntity>,
    @InjectRepository(PermissionEntity)
    private readonly permissionsRepository: Repository<PermissionEntity>,
  ) {}

  create(params: RolesCreateDto) {
    return this.rolesRepository.save(params);
  }

  async delete(id: Uuid): Promise<void> {
    const queryBuilder = this.rolesRepository
      .createQueryBuilder('roles')
      .where('roles.id = :id', { id });

    const postEntity = await queryBuilder.getOne();

    if (!postEntity) {
      throw new RolesNotFoundException();
    }

    await this.rolesRepository.remove(postEntity);
  }

  async batchDelete(batchDeleteDto: BatchDeleteDto): Promise<void> {
    const { ids } = batchDeleteDto;
    console.log(ids);

    await this.rolesRepository.delete(ids);
  }

  async update(id, updateRolesDto: RolesUpdateDto): Promise<void> {
    const queryBuilder = this.rolesRepository
      .createQueryBuilder('roles')
      .where('roles.id = :id', { id });

    const rolesEntity = await queryBuilder.getOne();

    if (!rolesEntity) {
      throw new RolesNotFoundException();
    }

    //this.rolesRepository.merge(rolesEntity, updateRolesDto);

    await this.rolesRepository.update(id, updateRolesDto);
  }

  async getSingleRole(id: Uuid): Promise<RolesEntity> {
    const queryBuilder = this.rolesRepository
      .createQueryBuilder('roles')
      .where('roles.id=:id', { id });

    const rolesEntity = await queryBuilder.getOne();

    if (!rolesEntity) {
      throw new RolesNotFoundException();
    }

    return rolesEntity;
  }

  async getAllRoles(
    rolesPageOptionsDto: RolesPageOptionsDto,
  ): Promise<PageDto<RolesDto>> {
    const queryBuilder = this.rolesRepository.createQueryBuilder('roles');
    //console.log(queryBuilder);

    const rolesCreateDto = new RolesCreateDto().toObject(rolesPageOptionsDto);
    //console.log(rolesCreateDto);

    queryBuilder.searchFieldString('roles', rolesCreateDto);

    const [items, pageMetaDto] =
      await queryBuilder.paginate(rolesPageOptionsDto);

    //console.log(queryBuilder);

    // console.log(items);
    // console.log(pageMetaDto);

    return items.toPageDto(pageMetaDto);
  }

  async getRolePermissions(id: Uuid): Promise<any> {
    const queryBuilder = this.rolesRepository
      .createQueryBuilder('roles')
      .leftJoinAndSelect('roles.permissions', 'permissions')
      .where('roles.id=:id', { id });

    const rolesEntity = await queryBuilder.getOne();

    return rolesEntity;
  }

  async updateRolePermissions(
    id: Uuid,
    updateRolesPermissionDto: UpdateRolesPermissionDto,
  ): Promise<void> {
    const { permissionIds } = updateRolesPermissionDto;

    const queryBuilder = this.rolesRepository
      .createQueryBuilder('roles')
      .leftJoinAndSelect('roles.permissions', 'permissions')
      .where('roles.id=:id', { id });

    const rolesEntity = await queryBuilder.getOne();

    if (!rolesEntity) {
      throw new RolesNotFoundException();
    }

    const permissions = await this.permissionsRepository.findBy({
      id: In(permissionIds),
    });

    rolesEntity.permissions = permissions;

    await this.rolesRepository.save(rolesEntity);
  }
}
