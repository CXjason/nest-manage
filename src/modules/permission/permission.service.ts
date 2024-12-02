/*
 * @Author: jason
 * @Date: 2024-12-02 11:48:46
 * @LastEditTime: 2024-12-02 15:54:36
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\permission\permission.service.ts
 *
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionEntity } from './permission.entity';
import { Repository } from 'typeorm';
import { PermissionPageOptionsDto } from './dto/permission-page-options.dto';
import { PermissionDto } from './dto/permission.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { PermissionNotFoundException } from './exceptions/permission-not-found.exception';
import { PermissionCreateDto } from './dto/permission-create.dto';
import { PermissionUpdateDto } from './dto/permission-update.dto';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(PermissionEntity)
    private readonly permissionRepository: Repository<PermissionEntity>,
  ) {}

  async getAllPermissions(
    permissionPageOptionsDto: PermissionPageOptionsDto,
  ): Promise<PageDto<PermissionDto>> {
    const queryBuilder =
      this.permissionRepository.createQueryBuilder('permission');

    const [items, pageMetaDto] = await queryBuilder.paginate(
      permissionPageOptionsDto,
    );

    return items.toPageDto(pageMetaDto);
  }

  async getSinglePermission(id: Uuid): Promise<PermissionEntity> {
    const queryBuilder = this.permissionRepository
      .createQueryBuilder('permission')
      .where('permission.id=:id', { id });

    const permissionEntity = await queryBuilder.getOne();

    if (!permissionEntity) {
      throw new PermissionNotFoundException();
    }

    return permissionEntity;
  }

  create(permissionCreateDto: PermissionCreateDto) {
    return this.permissionRepository.save(permissionCreateDto);
  }

  async update(id, permissionUpdateDto: PermissionUpdateDto) {
    const queryBuilder = this.permissionRepository
      .createQueryBuilder('permission')
      .where('permission.id=:id', { id });

    const permissionEntity = await queryBuilder.getOne();

    if (!permissionEntity) {
      throw new PermissionNotFoundException();
    }

    //this.permissionRepository.merge(permissionEntity, permissionUpdateDto);

    await this.permissionRepository.update(id, permissionUpdateDto);
  }

  async delete(id: Uuid): Promise<void> {
    const queryBuilder = this.permissionRepository
      .createQueryBuilder('permission')
      .where('permission.id=:id', { id });

    const permissionEntity = await queryBuilder.getOne();

    if (!permissionEntity) {
      throw new PermissionNotFoundException();
    }

    await this.permissionRepository.remove(permissionEntity);
  }
}
