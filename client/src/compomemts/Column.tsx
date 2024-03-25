export interface Column<T> {
    label: string;
    value: keyof T;
  
  }
  interface Props<T> {
    columns: Column<T>[];
    data: T[];
  }