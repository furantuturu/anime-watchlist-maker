import { useQuery } from "@tanstack/react-query";
import { animeQueryOptions } from "../searchAnimeQueryOptions";
import { PropagateLoader } from "react-spinners";
import { AnimeData, isLocalDark, isPreferColorSchemeDark } from "../constants";
import { memo, useEffect, useState} from "react";
import AnimeCard from "./AnimeCard";
import ExpandedAnimeCard from "./ExpandedAnimeCard";

type DBSearchString = { searchString: string }

const SearchResult = ({ searchString }: DBSearchString) => {
    const { data, isFetching } = useQuery(animeQueryOptions(searchString))
    const [expand, setExpand] = useState(false)

    useEffect(() => {
        setExpand(false)
    }, [data])

    if (isFetching) return <PropagateLoader size={15} color={isLocalDark || isPreferColorSchemeDark ? '#ffdf20' : '#8ec5ff'} className="text-center" />
    if (data!.length < 1) return <p className="text-center font-bold p-2 text-blue-400 dark:text-yellow-300">Anime not found...</p>

    return (
        <ul>
            {data?.slice(0, 5).map((anime: AnimeData) => {
                return <AnimeCard key={anime.title} anime={anime} />
            })}
            {expand && <hr className="my-10 text-blue-300 dark:text-yellow-300" />}
            {expand && <ExpandedAnimeCard data={data} />}
            <div className={`text-center mb-10 ${!data ? "hidden" : ''}`}>
                <small onClick={() => setExpand(prev => !prev)} className="font-bold p-2 text-blue-400 dark:text-yellow-300 cursor-pointer hover:underline">
                    {!expand ? "Show More..." : "Show Less..."}
                </small>
            </div>
        </ul>
    )
}

export default memo(SearchResult)