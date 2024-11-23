/*
 * @Author: jason
 * @Date: 2024-11-19 09:36:53
 * @LastEditTime: 2024-11-19 09:43:09
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\modules\auth\dto\login-payload.dto.ts
 *
 */
import { ClassField } from 'src/decorators';
import { UserDto } from 'src/modules/user/dtos/user.dto';
import { TokenPayloadDto } from './token-paytoken.dto';

export class LoginPayloadDto {
  @ClassField(() => UserDto)
  user: UserDto;

  @ClassField(() => TokenPayloadDto)
  token: TokenPayloadDto;

  constructor(user: UserDto, token: TokenPayloadDto) {
    this.user = user;
    this.token = token;
  }
}
