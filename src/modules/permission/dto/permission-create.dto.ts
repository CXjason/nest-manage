import {
  NumberFieldOptional,
  StringField,
  StringFieldOptional,
} from 'src/decorators';

/*
 * @Author: jason
 * @Date: 2024-12-02 15:26:24
 * @LastEditTime: 2024-12-12 14:58:01
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\permission\dto\permission-create.dto.ts
 *
 */
export class PermissionCreateDto {
  @StringField({ description: '名称', example: '新增' })
  name!: string;

  @StringField({ description: '标识', example: 'add' })
  key!: string;

  @StringFieldOptional({ description: '描述', example: '新增' })
  description?: string;

  @NumberFieldOptional({ description: '状态', example: 1 })
  status?: number;

  toObject(obj) {
    return {
      name: obj.name,
      key: obj.key,
      description: obj.description,
      status: obj.status,
    };
  }
}
