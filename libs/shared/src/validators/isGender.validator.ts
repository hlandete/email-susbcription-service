import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsGender(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsGender',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          return typeof value === 'string' && (value === 'M' ||  value === 'F' || value === 'O');
        },
      },
    });
  };
}