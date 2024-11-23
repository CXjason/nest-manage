import { NumberField, StringField } from 'src/decorators';

/*
 * @Author: jason
 * @Date: 2024-11-19 09:40:57
 * @LastEditTime: 2024-11-19 09:59:44
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\modules\auth\dto\token-paytoken.dto.ts
 *
 */
export class TokenPayloadDto {
  @NumberField()
  expiresIn: number;

  @StringField()
  accessToken: string;

  constructor(data: { expiresIn: number; accessToken: string }) {
    this.expiresIn = data.expiresIn;
    this.accessToken = data.accessToken;
  }
}
