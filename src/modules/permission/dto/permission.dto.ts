/*
 * @Author: jason
 * @Date: 2024-12-02 14:18:26
 * @LastEditTime: 2024-12-02 14:21:27
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\modules\permission\dto\permission.dto.ts
 *
 */
import { AbstractDto } from 'src/common/dto/absrract.dto';
import { StringFieldOptional } from 'src/decorators';
import { PermissionEntity } from '../permission.entity';

export type PermissionDtoOptions = Partial<{ isActive: boolean }>;

export class PermissionDto extends AbstractDto {
  @StringFieldOptional({ nullable: true })
  name!: string;

  @StringFieldOptional({ nullable: true })
  key!: string;

  @StringFieldOptional()
  description?: string;

  constructor(permission: PermissionEntity, options?: PermissionDtoOptions) {
    super(permission);
    this.name = permission.name;
    this.key = permission.key;
    this.description = permission.description;
  }
}
