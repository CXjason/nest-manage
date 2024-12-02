/*
 * @Author: jason
 * @Date: 2024-11-18 14:03:30
 * @LastEditTime: 2024-11-26 11:05:48
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\providers\context.provider.ts
 *
 */

import { UserEntity } from 'src/modules/user/user.entity';
import { LanguageCode } from '../constrants/language-code';
import { ClsServiceManager } from 'nestjs-cls';
export class ContextProvider {
  private static readonly languageKey = 'language_key';

  private static readonly nameSpace = 'request';

  private static readonly authUserKey = 'user_key';

  private static get<T>(key: string) {
    const store = ClsServiceManager.getClsService();
    return store.get<T>(ContextProvider.getKeyWithNamespace(key));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static set(key: string, value: any): void {
    const store = ClsServiceManager.getClsService();

    store.set(ContextProvider.getKeyWithNamespace(key), value);
  }

  private static getKeyWithNamespace(key: string): string {
    return `${ContextProvider.nameSpace}.${key}`;
  }

  static getLanguage(): LanguageCode | undefined {
    return ContextProvider.get<LanguageCode>(ContextProvider.languageKey);
  }

  static setAuthUser(user: UserEntity): void {
    ContextProvider.set(ContextProvider.authUserKey, user);
  }
}
