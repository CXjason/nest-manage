import { PartialType } from '@nestjs/mapped-types';
import { UserDto } from './user.dto';

export class UserCreateDto extends PartialType(UserDto) {
  toObject(obj) {
    return {
      firstName: obj.firstName,
      lastName: obj.lastName,
      username: obj.username,
      email: obj.email,
      avatar: obj.avatar,
      phone: obj.phone,
      isActive: obj.isActive,
    };
  }
}
