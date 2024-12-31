/*
 * @Author: jason
 * @Date: 2024-12-16 15:45:48
 * @LastEditTime: 2024-12-16 15:46:36
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\project\dto\project-create.dto.ts
 *
 */
import {
  NumberFieldOptional,
  StringField,
  StringFieldOptional,
} from 'src/decorators';

export class ProjectCreateDto {
  @StringField({ description: '名称', example: '项目' })
  name!: string;

  @NumberFieldOptional({ description: '状态', example: 1 })
  status?: number;

  @StringFieldOptional({ description: '描述', example: '项目' })
  description?: string;

  // 新增方法：获取所有属性组成的对象
  toObject(obj) {
    return {
      name: obj.name,
      status: obj.status,
      description: obj.description,
    };
  }
}
