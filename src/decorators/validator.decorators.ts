/*
 * @Author: jason
 * @Date: 2024-11-18 11:12:14
 * @LastEditTime: 2024-11-22 15:24:15
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\decorators\validator.decorators.ts
 *
 */

import type { ValidationOptions } from 'class-validator';
import { registerDecorator, ValidateIf } from 'class-validator';
export function IsNullable(options?: ValidationOptions): PropertyDecorator {
  return ValidateIf((_obj, value) => value !== null, options);
}

export function IsUndefinable(options?: ValidationOptions): PropertyDecorator {
  return ValidateIf((_obj, value) => value !== undefined, options);
}

export function IsPassword(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return (object, propertyName) => {
    registerDecorator({
      propertyName: propertyName as string,
      name: 'isPassword',
      target: object.constructor,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: string) {
          return /^[\d!#$%&*@A-Z^a-z]*$/.test(value);
        },
      },
    });
  };
}
