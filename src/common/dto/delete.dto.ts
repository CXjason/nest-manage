/*
 * @Author: jason
 * @Date: 2024-11-29 16:53:49
 * @LastEditTime: 2024-11-29 16:54:47
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\common\dto\delete.dto.ts
 *
 */
import { UUIDField } from 'src/decorators';

export class DeleteDto {
  @UUIDField()
  id!: string;
}
