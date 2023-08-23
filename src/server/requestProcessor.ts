import {
  useQuery,
  useMutation,
  // useQueryClient
} from "react-query";

export function useRequestProcessor() {
  // const queryClient = useQueryClient();

  function query(key: any[], queryFunction: () => object, options = {}) {
    return useQuery({
      queryKey: key,
      queryFn: queryFunction,
      ...options,
    });
  }

  // function mutate(key, mutationFunction, options = {}) {
  //   return useMutation({
  //     mutationKey: key,
  //     mutationFn: mutationFunction,
  //     onSettled: () => queryClient.invalidateQueries(key),
  //     ...options,
  //   });
  // }

  return {
    query,
    // mutate
  };
}
