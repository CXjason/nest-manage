/*
 * @Author: jason
 * @Date: 2024-12-10 10:11:18
 * @LastEditTime: 2024-12-12 14:35:04
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\common\dto\batch-delete.dto.ts
 *
 */
import { StringField } from '../../decorators';

export class BatchDeleteDto {
  @StringField({ each: true, description: 'id列表', example: ['1', '2'] })
  ids: string[];
}
