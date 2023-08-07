//定义请求参数
export interface ListParams {
  id: number;
}

export interface RowItem {
  id: number;
  fileName: string;
}

//定义接口返回数据
export interface ListModel {
  code: number;
  data: RowItem[];
}
