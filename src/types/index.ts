import { ReactNode } from "react";

type MenuItem = {
  title: string;
  icon?: ReactNode;
  path: string;
};

export type Menu = MenuItem[];

export type SelectItem = {
  text: string;
  value: string | number;
};

export type LoginFormValues = {
  username: string;
  password: string;
};

export enum UserType {
  User = "User",
  Admin = "Admin",
}
