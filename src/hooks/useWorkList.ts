import { workApi } from "@/api-client";
import { QUERY_KEYS } from "@/utils/contants";
import useSWR, { SWRConfiguration } from "swr";

export interface UseWorkListProps {
  params: Partial<API.IListParams>;
  options: SWRConfiguration;
}
export function useWorkList({ params, options }: UseWorkListProps) {
  const swrResponse = useSWR(
    [QUERY_KEYS.WORK_LIST, params], // 1 trong những key trong array thay đổi thì gọi lại API update data
    () => workApi.getAll(params),
    {
      dedupingInterval: 30 * 1000, // thời dan gọi lại API 30s,
      keepPreviousData: true, // giữ lại data trước đó trong quá trình thay đổi key
      fallbackData: {
        // giá trị ban đầu trước khi fetch data
        data: [],
        pagination: {
          _page: 1,
          _limit: 10,
          _totalRow: 10,
        },
      },
      ...options,
    }
  );
  return swrResponse;
}
