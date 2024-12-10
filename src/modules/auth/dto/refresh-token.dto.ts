import { StringField } from 'src/decorators';

/*
 * @Author: jason
 * @Date: 2024-12-05 08:24:42
 * @LastEditTime: 2024-12-05 08:25:15
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\auth\dto\refresh-token.dto.ts
 *
 */
export class RefreshTokenDto {
  @StringField()
  refreshToken!: string;
}
