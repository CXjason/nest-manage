import { EnumFieldOptional, StringField } from 'src/decorators';
import { RolesStatus } from 'src/enum/roles-status.enum';

export class RolesCreateDto {
  @StringField()
  name!: string;

  @StringField()
  key!: string;

  @EnumFieldOptional(() => RolesStatus)
  status?: RolesStatus;

  @StringField()
  description?: string;
}
