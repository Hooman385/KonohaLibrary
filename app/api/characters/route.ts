import { NextRequest, NextResponse } from "next/server";
import { axiosInstance } from "@/services/api";
import queryString from "query-string";
import { FilterCharacters } from "@/utils/filterCharacters";
export type Filters = {
  [key: string] : string[]
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page");
  const filters = queryString.parse(searchParams.toString());
 
  // we make sure even if only one filter of a filter-type is selected, it's still an array and not just one single string
  // this makes working with the filters easier
  for (const key in filters) {
    if (typeof filters[key] === "string") {
      const str = filters[key];
      filters[key] = [str];
    }
  }

  const result = await axiosInstance.get(`character?page=1&limit=1500`);
  const allCharacters = result.data.characters;
  const limit = 20;
  const n = Number(page);

  let finalResult = {
    ...result.data,
    hasNextPage: allCharacters.length > n * limit,
    characters: allCharacters.slice(0 + (n - 1) * limit, n * limit),
  };
  // here we check if our filters have any filter that is not "page"
  // since page exists by default because of tanStack react-query
  const hasActualFilters = Object.keys(filters).some((key) => key !== "page");
  if (!hasActualFilters) {
    // if there are no filters then we return all characters
    return NextResponse.json(finalResult);
  } else {
    // const { gender: sex, rank: ranks, status, village } = filters;
    const characters = result.data.characters;
    const filteredCharacters = FilterCharacters(characters, filters as Filters);
    const finalCharacters = filteredCharacters.slice(
      0 + (n - 1) * limit,
      n * limit
    );

    finalResult = {
      ...result.data,
      hasNextPage: filteredCharacters.length > n * limit,
      characters: finalCharacters,
    };

    return NextResponse.json(finalResult);
  }
}
