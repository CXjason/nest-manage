/*
 * @Author: jason
 * @Date: 2024-11-15 16:17:39
 * @LastEditTime: 2024-12-02 10:05:25
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\types.ts
 *
 */
export type Constructor<T = any, Arguments extends unknown[] = any[]> = new (
  ...arguments_: Arguments
) => T;

export type KeyOfType<Entity, U> = {
  [P in keyof Required<Entity>]: Required<Entity>[P] extends U
    ? P
    : Required<Entity>[P] extends U[]
      ? P
      : never;
}[keyof Entity];
