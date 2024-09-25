import { useInfiniteQuery } from "@tanstack/react-query";

import axios from "axios";

const getCharactersFromMyApi = async (
  page: number | null,
  queryString: string
) => {
  const result = await axios.get(
    `http://localhost:3000/api/characters?page=${page}&${queryString}`
  );
  return result.data;
};

export function useInfiniteCharacters(queryString: string) {
  return useInfiniteQuery({
    queryKey: ["infiniteCharacters"],
    queryFn: ({ pageParam }) => getCharactersFromMyApi(pageParam, queryString),
    initialPageParam: 1,

    getNextPageParam: (lastPage, __, lastPageParam) => {
      if (lastPage.hasNextPage === false) {
        return undefined;
      } else {
        return lastPageParam + 1;
      }
    },
  });
}
