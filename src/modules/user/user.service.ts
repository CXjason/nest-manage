/*
 * @Author: jason
 * @Date: 2024-11-15 16:09:47
 * @LastEditTime: 2024-12-06 09:33:17
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

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findOne(
    findData: FindOptionsWhere<UserEntity>,
  ): Promise<UserEntity | null> {
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
}
