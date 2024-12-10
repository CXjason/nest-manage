import { StringField } from '../../decorators';

export class BatchDeleteDto {
  @StringField({ each: true })
  ids: string[];
}
