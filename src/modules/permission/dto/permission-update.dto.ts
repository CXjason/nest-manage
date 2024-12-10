import { PartialType } from '@nestjs/mapped-types';
import { PermissionCreateDto } from './permission-create.dto';

export class PermissionUpdateDto extends PartialType(PermissionCreateDto) {}
