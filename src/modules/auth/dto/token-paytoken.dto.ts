import { NumberField, StringField } from 'src/decorators';

/*
 * @Author: jason
 * @Date: 2024-11-19 09:40:57
 * @LastEditTime: 2024-12-04 18:02:08
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\auth\dto\token-paytoken.dto.ts
 *
 */

export interface TokenPayload {
  expiresIn: number;
  accessToken: string;
  refreshToken: string;
}

export class TokenPayloadDto {
  @NumberField()
  expiresIn: number;

  @StringField()
  accessToken: string;

  @StringField()
  refreshToken: string;

  constructor(data: TokenPayload) {
    this.expiresIn = data.expiresIn;
    this.accessToken = data.accessToken;
    this.refreshToken = data.refreshToken;
  }
}
