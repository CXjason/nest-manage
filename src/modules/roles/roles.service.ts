/*
 * @Author: jason
 * @Date: 2024-11-23 16:59:46
 * @LastEditTime: 2024-12-02 17:39:52
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

  async update(id, updateRolesDto: RolesCreateDto): Promise<void> {
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

    const [items, pageMetaDto] =
      await queryBuilder.paginate(rolesPageOptionsDto);

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

  async updateRolePermissions(id: Uuid, permissionIds: Uuid[]): Promise<void> {
    const queryBuilder = this.rolesRepository
      .createQueryBuilder('roles')
      .leftJoinAndSelect('roles.permissions', 'permissions')
      .where('roles.id=:id', { id });

    const rolesEntity = await queryBuilder.getOne();

    if (!rolesEntity) {
      throw new RolesNotFoundException();
    }

    console.log(permissionIds);
    console.log(this.permissionsRepository);
    const permissions = await this.permissionsRepository.find({
      where: {
        id: In(permissionIds),
      },
    });

    console.log(permissions);

    rolesEntity.permissions = permissions;

    await this.rolesRepository.save(rolesEntity);
  }
}
