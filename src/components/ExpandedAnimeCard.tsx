import AnimeCard from "./AnimeCard"
import { AnimeData } from "../constants";

type Data = { data: AnimeData[] | undefined }

const ExpandedAnimeCard = ({ data }: Data) => {
    return (
        <>
            {data!.slice(5, 20).map((anime: AnimeData) => {
                return <AnimeCard key={anime.title} anime={anime} />
            })}
        </>
    )
}

export default ExpandedAnimeCard