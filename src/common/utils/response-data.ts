/*
 * @Author: jason
 * @Date: 2024-11-28 17:15:26
 * @LastEditTime: 2024-11-28 17:24:11
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\common\utils\response-data.ts
 *
 */
import { assign } from 'lodash';
import { ResponseData } from 'src/tyings/response-data';

const defaultOptions: ResponseData = {
  data: null,
  code: 0,
  msg: '',
};

// 获取返回体
export const responseMsg = <T = any>(option?: ResponseData<T>) => {
  return assign(defaultOptions, option);
};
