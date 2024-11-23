/*
 * @Author: jason
 * @Date: 2024-11-18 14:03:30
 * @LastEditTime: 2024-11-18 14:10:29
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\providers\context.provider.ts
 *
 */

import { LanguageCode } from '../constrants/language-code';
import { ClsServiceManager } from 'nestjs-cls';
export class ContextProvider {
  private static readonly languageKey = 'language_key';

  private static readonly nameSpace = 'request';

  private static get<T>(key: string) {
    const store = ClsServiceManager.getClsService();
    return store.get<T>(ContextProvider.getKeyWithNamespace(key));
  }

  private static getKeyWithNamespace(key: string): string {
    return `${ContextProvider.nameSpace}.${key}`;
  }

  static getLanguage(): LanguageCode | undefined {
    return ContextProvider.get<LanguageCode>(ContextProvider.languageKey);
  }
}
