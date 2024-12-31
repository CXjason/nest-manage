/*
 * @Author: jason
 * @Date: 2024-12-23 16:04:26
 * @LastEditTime: 2024-12-23 16:12:06
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\common\dto\OrderDate.dto.ts
 *
 */
import { DateFieldOptional, EnumFieldOptional } from 'src/decorators';
import { OrderEnum } from 'src/enum/order.enum';

export class OrderDateDto {
  @EnumFieldOptional(() => OrderEnum, {
    description: '创建时间排序',
    example: OrderEnum.ASC,
  })
  createAt?: string;

  @EnumFieldOptional(() => OrderEnum, {
    description: '创建时间排序',
    example: OrderEnum.ASC,
  })
  updateAt?: string;

  toObject(obj) {
    console.log(obj);

    const { createAt, updateAt } = obj;
    return {
      createAt,
      updateAt,
    };
  }
}
