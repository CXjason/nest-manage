/*
 * @Author: jason
 * @Date: 2024-11-18 11:05:09
 * @LastEditTime: 2024-11-22 15:35:57
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\common\dto\absrract.dto.ts
 *
 */
import { ContextProvider } from 'src/providers/context.provider';
import { DateField, UUIDField } from '../../decorators';
import { AbstractEntity } from '../abstract.entity';
import { DYNAMIC_TRANSLATION_DECORATOR_KEY } from 'src/decorators/translate.decorator';

export class AbstractDto {
  @UUIDField()
  id!: Uuid;

  @DateField()
  createAt!: Date;

  @DateField()
  updateAt!: Date;

  translations?: AbstractTranslationDto[];

  constructor(entity: AbstractEntity, options?: { excludeFields?: boolean }) {
    if (!options?.excludeFields) {
      this.id = entity.id;
      this.createAt = entity.createAt;
      this.updateAt = entity.updateAt;
    }

    const languageCode = ContextProvider.getLanguage();

    if (languageCode && entity.translations) {
      const translationEntity = entity.translations.find(
        (titleTranslation) => titleTranslation.languageCode === languageCode,
      )!;

      const fields: Record<string, string> = {};
      for (const key of Object.keys(translationEntity)) {
        const metadata = Reflect.getMetadata(
          DYNAMIC_TRANSLATION_DECORATOR_KEY,
          this,
          key,
        );

        if (metadata) {
          fields[key] = (translationEntity as never)[key];
        }
      }

      Object.assign(this, fields);
    } else {
      this.translations = entity.translations?.toDtos();
    }
  }
}

export class AbstractTranslationDto extends AbstractDto {
  constructor(entity: AbstractEntity) {
    super(entity, { excludeFields: true });
  }
}
