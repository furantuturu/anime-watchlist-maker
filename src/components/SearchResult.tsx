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
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg" src={anime.picture} alt={anime.title} />
                            <div className="flex flex-col justify-center text-center md:text-left p-5 leading-normal">
                                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{anime.title}</h3>
                                <div>
                                    <h5 className="font-bold">Type</h5>
                                    <p>{anime.type}</p>
                                </div>
                                <div>
                                    <h5 className="font-bold">Episodes</h5>
                                    <p>{anime.episodes}</p>
                                </div>
                                <div>
                                    <h5 className="font-bold">Status</h5>
                                    <p>{anime.status}</p>
                                </div>
                                <div>
                                    <h5 className="font-bold">Season</h5>
                                    <p>{anime.animeSeason.season} {anime.animeSeason.year}</p>
                                </div>
                                <div>
                                    <h5 className="font-bold">Tags</h5>
                                    <div className="leading-relaxed">
                                        {anime.tags.map(tag => <span className="pr-2 pb-1 hover:underline underline-offset-4" key={tag}>{tag}</span>)}
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-bold">Sources</h5>
                                    <div className="leading-relaxed">
                                        {anime.sources.map(source => <li><a href={source} target="_blank"></a>{source}</li>)}
                                    </div>
                                </div>
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