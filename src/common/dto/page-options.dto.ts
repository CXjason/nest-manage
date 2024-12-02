/*
 * @Author: jason
 * @Date: 2024-12-02 09:42:45
 * @LastEditTime: 2024-12-02 10:06:53
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\common\dto\page-options.dto.ts
 *
 */
import { Order } from 'src/constrants/order';
import {
  EnumFieldOptional,
  NumberFieldOptional,
  StringFieldOptional,
} from 'src/decorators';

export class PageOptionsDto {
  @EnumFieldOptional(() => Order, {
    default: Order.ASC,
  })
  readonly order: Order = Order.ASC;

  @NumberFieldOptional({
    minimum: 1,
    default: 1,
    int: true,
  })
  readonly page: number = 1;

  @NumberFieldOptional({
    minimum: 1,
    default: 10,
    int: true,
  })
  readonly take: number = 10;

  get skip(): number {
    return (this.page - 1) * this.take;
  }

  @StringFieldOptional()
  readonly q?: string;
}
