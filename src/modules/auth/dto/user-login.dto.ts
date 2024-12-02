/*
 * @Author: jason
 * @Date: 2024-11-19 09:34:39
 * @LastEditTime: 2024-11-28 16:58:27
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\auth\dto\user-login.dto.ts
 *
 */
import { EmailField, StringField } from '../../../decorators';

export class UserLoginDto {
  @EmailField()
  readonly email!: string;

  @StringField()
  readonly password!: string;
}
