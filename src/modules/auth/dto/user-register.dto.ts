/*
 * @Author: jason
 * @Date: 2024-11-22 15:21:42
 * @LastEditTime: 2024-12-12 13:49:48
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\auth\dto\user-register.dto.ts
 *
 */
import {
  EmailField,
  PasswordField,
  PhoneFieldOptional,
  StringField,
} from 'src/decorators';

export class UserRegisterDto {
  @StringField({ description: '首名称', example: '张', required: true })
  readonly firstName!: string;

  @StringField({ description: '后名称', example: '三', required: true })
  readonly lastName!: string;

  @EmailField({ description: '邮箱', example: '33@qq.com', required: true })
  readonly email!: string;

  @PasswordField({ description: '密码', example: '123456', required: true })
  readonly password!: string;

  @PhoneFieldOptional({ description: '手机号', example: '1234567890' })
  phone?: string;
}
