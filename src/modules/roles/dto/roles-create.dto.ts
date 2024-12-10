import {
  EnumFieldOptional,
  NumberFieldOptional,
  StringField,
  StringFieldOptional,
} from 'src/decorators';
import { RolesStatus } from 'src/enum/roles-status.enum';
import { RolesDto } from './roles.dto';

export class RolesCreateDto {
  @StringField()
  name!: string;

  @StringField()
  key!: string;

  @NumberFieldOptional()
  status?: number;

  @StringFieldOptional()
  description?: string;

  // 新增方法：获取所有属性组成的对象
  toObject(obj) {
    return {
      name: obj.name,
      key: obj.key,
      status: obj.status,
      description: obj.description,
    };
  }
}
