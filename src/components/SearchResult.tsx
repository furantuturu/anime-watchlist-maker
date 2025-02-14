import { useQuery } from "@tanstack/react-query";
import { animeQueryOptions } from "../searchAnimeQueryOptions";
import { PropagateLoader } from "react-spinners";
import { AnimeData, isLocalDark, isPreferColorSchemeDark } from "../constants";
import { memo} from "react";
import Tags from "./Tags";
import Sources from "./Sources";

type DBSearchString = { searchString: string }

const SearchResult = ({ searchString }: DBSearchString) => {
    const { data, isFetching } = useQuery(animeQueryOptions(searchString))

    if (isFetching) return <PropagateLoader size={15} color={isLocalDark || isPreferColorSchemeDark ? '#ffdf20' : '#8ec5ff'} className="text-center" />

    return (
        <ul>
            {data?.map((anime: AnimeData) => {
                return (
                    <li key={anime.title} className="card-li-styles">
                        <img className="card-li-img-styles" src={anime.picture} alt={anime.title} />
                        <div className="flex grow-1 flex-col justify-center text-center md:text-left p-5 leading-normal">
                            <div className="mb-2 flex flex-col md:flex-row md:justify-between">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-1 md:m-0">{anime.title}</h3>
                                <button className="add-watchlist-btn-styles">Add To Watchlist</button>
                            </div>
                            <div className="mb-2">
                                <h5 className="font-bold">Type</h5>
                                <p>{anime.type}</p>
                            </div>
                            <div className="mb-2">
                                <h5 className="font-bold">Episodes</h5>
                                <p>{anime.episodes}</p>
                            </div>
                            <div className="mb-2">
                                <h5 className="font-bold">Status</h5>
                                <p>{anime.status}</p>
                            </div>
                            <div className="mb-2">
                                <h5 className="font-bold">Season</h5>
                                <p>{anime.animeSeason.season} {anime.animeSeason.year}</p>
                            </div>
                            <Tags tags={anime.tags} />
                            <Sources sources={anime.sources} />
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default memo(SearchResult)