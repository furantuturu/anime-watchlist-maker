import { useQuery } from "@tanstack/react-query";
import { animeQueryOptions } from "../searchAnimeQueryOptions";
import { PropagateLoader } from "react-spinners";
import { AnimeData, isLocalDark, isPreferColorSchemeDark } from "../constants";
import { useEffect, useState} from "react";
import AnimeCard from "./AnimeCard";
import ExpandedAnimeCard from "./ExpandedAnimeCard";

type DBSearchString = { searchString: string }

const SearchResult = ({ searchString }: DBSearchString) => {
    const { data, isFetching, isPending } = useQuery(animeQueryOptions(searchString))
    const [expand, setExpand] = useState(false)

    useEffect(() => {
        setExpand(false)
    }, [data])

    if (isFetching || isPending) return <PropagateLoader size={15} color={isLocalDark || isPreferColorSchemeDark ? '#ffdf20' : '#8ec5ff'} className="text-center" />
    if (data!.length < 1) return <p className="text-center font-bold p-2 text-blue-400 dark:text-yellow-300">Anime not found...</p>

    return (
        <>
            {data!.slice(0, 5).map((anime: AnimeData) => {
                return <AnimeCard key={anime.title} anime={anime} />
            })}
            {expand && data!.length >= 5 && <hr className="my-10 text-blue-300 dark:text-yellow-300" />}
                {expand && <ExpandedAnimeCard data={data} />}
            {data!.length >= 5 && <div className={`text-center mb-10 ${!data ? "hidden" : ''}`}>
                <small onClick={() => setExpand(prev => !prev)} className="font-bold p-2 text-blue-400 dark:text-yellow-300 cursor-pointer hover:underline">
                    {!expand ? "Show More..." : "Show Less..."}
                </small>
            </div>}
        </>
    )
}

export default SearchResult