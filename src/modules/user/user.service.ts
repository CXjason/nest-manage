/*
 * @Author: jason
 * @Date: 2024-11-15 16:09:47
 * @LastEditTime: 2024-11-23 16:48:58
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\modules\user\user.service.ts
 *
 */
import { Injectable } from '@nestjs/common';
import { FindOptionsWhere } from 'typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRegisterDto } from '../auth/dto/user-register.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  findOne(findData: FindOptionsWhere<UserEntity>): Promise<UserEntity | null> {
    return this.userRepository.findOneBy(findData);
  }

  async createUser(userRegisterDto: UserRegisterDto): Promise<UserEntity> {
    const user = this.userRepository.create(userRegisterDto);

    await this.userRepository.save(user);

    return user;
  }
}
