import { AnimeData } from '../constants'
import Sources from './Sources'
import Tags from './Tags'

type Anime = { anime: AnimeData }

const AnimeCard = ({ anime }: Anime) => {
    return (
        <li className="card-li-styles">
            <img className="card-li-img-styles" src={anime.picture} alt={anime.title} />
            <div className="flex grow-1 flex-col justify-center text-center md:text-left p-5 leading-normal">
                <div className="mb-7 flex flex-col md:flex-row md:justify-between">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-5 md:m-0">{anime.title}</h3>
                    <button className="ml-5 add-watchlist-btn-styles">Add To Watchlist</button>
                </div>
                <div className="mb-5 flex flex-col items-center md:flex-row">
                    <span className="minor-info-styles">
                        <h5 className="font-bold">Type</h5>
                        <p>{anime.type}</p>
                    </span>
                    <span className="minor-info-styles">
                        <h5 className="font-bold">Episodes</h5>
                        <p>{anime.episodes}</p>
                    </span>
                    <span className="minor-info-styles">
                        <h5 className="font-bold">Status</h5>
                        <p>{anime.status}</p>
                    </span>
                    <span className="minor-info-styles">
                        <h5 className="font-bold">Season</h5>
                        <p>{anime.animeSeason.season} {anime.animeSeason.year}</p>
                    </span>
                </div>
                <Tags tags={anime.tags} />
                <Sources sources={anime.sources} />
            </div>
        </li>
    )
}

export default AnimeCard