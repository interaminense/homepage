export type Credentials = {
  emailAddress: string;
  password: string;
};

export type GroupedData = {
  data: Data[];
  total: number;
};

type DataOptions = string | number | Data;

export type Data = {
  [key: string]: DataOptions | DataOptions[];
};

export interface IDataBase {
  disableLog?: boolean;
  path: string;
  credentials?: Credentials;
}

export interface IAuth {
  disableLog?: boolean;
  credentials?: Credentials;
}

export type SortBy = { value: string; type: "ASC" | "DESC" };
