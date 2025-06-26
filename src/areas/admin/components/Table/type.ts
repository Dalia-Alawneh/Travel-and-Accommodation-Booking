import { ReactNode } from "react";

export interface Column<T> {
  id: keyof T;
  label: string;
  align?: "right" | "left" | "center";
  render?: (value: unknown, row: T) => ReactNode;
}
