// 响应返回数据格式
export type ResponseData<T = any> = {
  data?: T;
  code: number;
  message?: any;
  [key: string]: any;
};
