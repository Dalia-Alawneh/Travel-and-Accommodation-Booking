import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import Axios from "@travelia/api/config";

interface AxiosQueryProps<TData, TParams = undefined> {
  url: string;
  params?: TParams;
  headers?: Record<string, string>;
  options?: Omit<UseQueryOptions<TData>, "queryKey" | "queryFn">;
}

export function useAxiosQuery<TData, TParams = undefined>({
  url,
  params,
  headers,
  options,
}: AxiosQueryProps<TData, TParams>) {
  return useQuery<TData>({
    queryKey: params ? [url, params] : [url],
    queryFn: async ({ signal }) => {
      const res = await Axios.get<TData>(url, { params, headers, signal });
      return res.data;
    },
    ...options,
  });
}
