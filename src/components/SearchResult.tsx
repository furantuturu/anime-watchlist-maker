import { useQuery } from "@tanstack/react-query";
import { animeQueryOptions } from "../searchAnimeQueryOptions";
import { PropagateLoader } from "react-spinners";
import { AnimeData } from "../animeConstants";
import { memo } from "react";

type DBSearchString = { debouncedSearchString: string }

const SearchResult = ({ debouncedSearchString }: DBSearchString) => {
    const { data, isFetching } = useQuery(animeQueryOptions(debouncedSearchString))

    const isLocalDark = localStorage.getItem('color-theme') === 'dark'
    const isPreferColorSchemeDark = (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)

    return (
        <>
            {isFetching && <PropagateLoader size={15} color={isLocalDark || isPreferColorSchemeDark ? '#ffdf20' : '#8ec5ff'} className="text-center" />}

            <ul>
                {data?.map((anime: AnimeData) => {
                    return (
                        <li key={anime.title} className="card-li-styles">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-50 md:rounded-none md:rounded-s-lg" src={anime.picture} alt={anime.title} />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{anime.title}</h5>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

const arePropsEqual = (prevProp: DBSearchString, nextProp: DBSearchString) => {
    return prevProp.debouncedSearchString === nextProp.debouncedSearchString
}

const memoizedSearchResult = memo(SearchResult, arePropsEqual) 

export default memoizedSearchResult