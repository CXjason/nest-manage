import {
  NumberFieldOptional,
  StringField,
  StringFieldOptional,
} from 'src/decorators';

/*
 * @Author: jason
 * @Date: 2024-12-02 15:26:24
 * @LastEditTime: 2024-12-10 17:55:04
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\permission\dto\permission-create.dto.ts
 *
 */
export class PermissionCreateDto {
  @StringField()
  name!: string;

  @StringField()
  key!: string;

  @StringFieldOptional()
  description?: string;

  @NumberFieldOptional()
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
