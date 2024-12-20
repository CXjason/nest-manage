import {
  EmailField,
  PasswordField,
  PhoneFieldOptional,
  StringField,
} from 'src/decorators';

export class UserRegisterDto {
  @StringField()
  readonly firstName!: string;

  @StringField()
  readonly lastName!: string;

  @EmailField()
  readonly email!: string;

  @PasswordField()
  readonly password!: string;

  @PhoneFieldOptional()
  phone?: string;
}
