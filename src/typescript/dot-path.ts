interface Change {
  name: string;
  upp: number;
  fee: number;
  aum: number;
  capacity: number;
  cooldown: number;
  expiredAt: string;
  createdAt: string;
}

interface Item {
  id: number;
  changes: Change;
}

interface PaginatedData {
  items: Item[];
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

type DotPaths<T, Prefix extends string = ""> =
  T extends Array<infer U>
  ? DotPaths<U, Prefix>
  : T extends object
  ? {
    [K in keyof T & string]:
    | `${Prefix}${K}`
    | DotPaths<T[K], `${Prefix}${K}.`>;
  }[keyof T & string]
  : never;

type PaginatedDataPaths = DotPaths<PaginatedData>;
