import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  isUUID,
} from 'class-validator';

// 验证 uuid数组
export function IsArrayUuidField(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    // Use lowercase 'object'
    registerDecorator({
      name: 'arrayField',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, _args: ValidationArguments) {
          if (!Array.isArray(value)) {
            return false;
          }

          return value.every((item) => isUUID(item, '4'));
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be an array of ${args.constraints[0].name}`;
        },
      },
      constraints: [],
    });
  };
}
