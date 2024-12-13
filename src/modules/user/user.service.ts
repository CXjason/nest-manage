/*
 * @Author: jason
 * @Date: 2024-11-15 16:09:47
 * @LastEditTime: 2024-12-12 17:39:04
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\user\user.service.ts
 *
 */
import { Injectable } from '@nestjs/common';
import { FindOptionsWhere } from 'typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRegisterDto } from '../auth/dto/user-register.dto';
import { UserNotFoundException } from './exceptions/users-not-found.exception';
import { UserDto } from './dtos/user.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { UserPageOptionsDto } from './dtos/user-page-options.dto';
import { UserCreateDto } from './dtos/user-create.dto';
import { UserUpdateDto } from './dtos/user-update.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getUsers(
    userPageOptionsDto: UserPageOptionsDto,
  ): Promise<PageDto<UserDto>> {
    const queryBuilder = this.userRepository.createQueryBuilder('users');
    //console.log(queryBuilder.getQuery());

    const userCreateDto = new UserCreateDto().toObject(userPageOptionsDto);

    queryBuilder.searchFieldString('users', userCreateDto);

    const [items, pageMetaDto] =
      await queryBuilder.paginate(userPageOptionsDto);

    return items.toPageDto(pageMetaDto);
  }

  async findOne(
    findData: FindOptionsWhere<UserEntity>,
  ): Promise<UserEntity | null> {
    // console.log('UserService findOne');
    // console.log(findData);

    const queryBuilder = this.userRepository
      .createQueryBuilder('users')
      .leftJoinAndSelect('users.roles', 'roles')
      .where(findData);

    const userEntity = await queryBuilder.getOne();
    return userEntity;
  }

  async createUser(userRegisterDto: UserRegisterDto): Promise<UserEntity> {
    const user = this.userRepository.create(userRegisterDto);

    await this.userRepository.save(user);

    return user;
  }

  async getSingleUser(id: Uuid): Promise<UserEntity> {
    const queryBuilder = this.userRepository
      .createQueryBuilder('users')
      .leftJoinAndSelect('users.roles', 'roles')
      .where('users.id=:id', { id });

    const userEntity = await queryBuilder.getOne();

    if (!userEntity) {
      throw new UserNotFoundException();
    }

    return userEntity;
  }

  async updateUser(id: Uuid, userUpdateDto: UserUpdateDto): Promise<void> {
    const queryBuilder = this.userRepository
      .createQueryBuilder('users')
      .where('users.id=:id', { id });

    const usersEntity = await queryBuilder.getOne();

    if (!usersEntity) {
      throw new UserNotFoundException();
    }

    await this.userRepository.update(id, userUpdateDto);
  }
}
