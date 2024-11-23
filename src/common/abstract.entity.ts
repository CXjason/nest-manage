/*
 * @Author: jason
 * @Date: 2024-11-18 11:47:49
 * @LastEditTime: 2024-11-18 16:36:40
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\common\abstract.entity.ts
 *
 */
import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AbstractDto, AbstractTranslationDto } from './dto/absrract.dto';
import { LanguageCode } from '../constrants/language-code';

export abstract class AbstractEntity<
  DTO extends AbstractDto = AbstractDto,
  O = never,
> {
  @PrimaryGeneratedColumn('uuid')
  id!: Uuid;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createAt!: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updateAt!: Date;

  translations?: AbstractTranslationEntity[];

  toDto(options?: O): DTO {
    const dtoClass = this.constructor.prototype.dtoClass;

    if (!dtoClass) {
      throw new Error(
        `You need to use @UseDto on class (${this.constructor.name}) be able to call toDto function`,
      );
    }

    return new dtoClass(this, options);
  }
}

export class AbstractTranslationEntity<
  DTO extends AbstractTranslationDto = AbstractTranslationDto,
  O = never,
> extends AbstractEntity<DTO, O> {
  @Column({ type: 'enum', enum: LanguageCode })
  languageCode!: LanguageCode;
}
