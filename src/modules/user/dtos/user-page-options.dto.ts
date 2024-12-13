import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { IntersectionType, PartialType, OmitType } from '@nestjs/mapped-types';
import { UserCreateDto } from './user-create.dto';

export class UserPageOptionsDto extends IntersectionType(
  PageOptionsDto,
  PartialType(UserCreateDto),
) {}
