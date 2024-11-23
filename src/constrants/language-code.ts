/*
 * @Author: jason
 * @Date: 2024-11-18 11:53:31
 * @LastEditTime: 2024-11-18 11:53:39
 * @LastEditors: jason
 * @Description: 
 * @FilePath: \nest-test\src\constrants\language-code.ts
 * 
 */
/* eslint-disable @typescript-eslint/naming-convention */
export enum LanguageCode {
  en_US = 'en_US',
  ru_RU = 'ru_RU',
}

export const supportedLanguageCount = Object.values(LanguageCode).length;
