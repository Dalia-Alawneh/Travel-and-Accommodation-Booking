import cookies from "react-cookies";
type CookieOptions = {
  path?: string;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: "strict" | "lax" | "none";
};

export const saveToCookies = <T extends string | number | object>(
  key: string,
  value: T,
  options?: CookieOptions,
) => {
  const preparedValue =
    typeof value === "object" ? JSON.stringify(value) : value;

  cookies.save(key, preparedValue, {
    path: "/",
    maxAge: 60 * 60,
    secure: true,
    sameSite: "strict",
    ...options,
  });
};

export const getFromCookies = <T = string>(key: string): T | undefined => {
  return cookies.load(key);
};

export const removeFromCookies = (key: string) => {
  cookies.remove(key, { path: "/" });
};
