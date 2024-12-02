import { StringField } from 'src/decorators';

/*
 * @Author: jason
 * @Date: 2024-12-02 15:26:24
 * @LastEditTime: 2024-12-02 15:27:14
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

  @StringField()
  description?: string;
}
