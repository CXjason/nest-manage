/*
 * @Author: jason
 * @Date: 2024-11-19 09:34:39
 * @LastEditTime: 2024-12-12 10:15:38
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\auth\dto\user-login.dto.ts
 *
 */
import { EmailField, StringField } from '../../../decorators';

export class UserLoginDto {
  @EmailField({ description: '邮箱', example: '1234567890@qq.com' })
  readonly email!: string;

  @StringField({ description: '密码', example: '123456' })
  readonly password!: string;
}
