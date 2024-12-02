/*
 * @Author: jason
 * @Date: 2024-11-18 15:15:11
 * @LastEditTime: 2024-11-28 14:47:11
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\decorators\transform.decorators.ts
 *
 */

import { Transform } from 'class-transformer';
import { castArray } from 'lodash';
import parsePhoneNumber from 'libphonenumber-js';

export function ToArray(): PropertyDecorator {
  return Transform(
    (params): unknown[] => {
      const value = params.value;

      if (!value) {
        return value;
      }

      return castArray(value);
    },
    { toClassOnly: true },
  );
}

export function ToLowerCase(): PropertyDecorator {
  return Transform(
    (params) => {
      const value = params.value;

      if (!value) {
        return;
      }

      if (!Array.isArray(value)) {
        return value.toLowerCase();
      }

      return value.map((v) => v.toLowerCase());
    },
    {
      toClassOnly: true,
    },
  );
}

export function ToUpperCase(): PropertyDecorator {
  return Transform(
    (params) => {
      const value = params.value;

      if (!value) {
        return;
      }

      if (!Array.isArray(value)) {
        return value.toUpperCase();
      }

      return value.map((v) => v.toUpperCase());
    },
    {
      toClassOnly: true,
    },
  );
}
export function PhoneNumberSerializer(): PropertyDecorator {
  return Transform(
    (params) => parsePhoneNumber((params.value ?? '') as string)?.number,
  );
}

export function ToBoolean(): PropertyDecorator {
  return Transform(
    (params) => {
      switch (params.value) {
        case 'true': {
          return true;
        }

        case 'false': {
          return false;
        }

        default: {
          return params.value;
        }
      }
    },
    { toClassOnly: true },
  );
}
