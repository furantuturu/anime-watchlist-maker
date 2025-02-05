import { queryOptions } from "@tanstack/react-query";
import { fetchAnime } from "./searchAnime";

export const animeQueryOptions = (searchString: string) => queryOptions({
    queryKey: ['anime', searchString],
    queryFn: () => fetchAnime(searchString)
})