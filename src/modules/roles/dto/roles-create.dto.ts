import {
  NumberFieldOptional,
  StringField,
  StringFieldOptional,
} from 'src/decorators';

export class RolesCreateDto {
  @StringField({ description: '名称', example: '管理员' })
  name!: string;

  @StringField({ description: '标识', example: 'admin' })
  key!: string;

  @NumberFieldOptional({ description: '状态', example: 1 })
  status?: number;

  @StringFieldOptional({ description: '描述', example: '管理员' })
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
