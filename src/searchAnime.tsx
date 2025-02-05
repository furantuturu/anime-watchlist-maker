
import { AnimeDataArray } from "./animeConstants";

export const fetchAnime = async (searchString: string) => {
    const res = await fetch('https://github.com/manami-project/anime-offline-database/raw/master/anime-offline-database-minified.json')
    const data = await res.json()

    const animeDatas: AnimeDataArray = data.data
    const filterData: AnimeDataArray = animeDatas.filter((user: any) => {
        return searchString && user && user.name && user.name.toLowerCase().includes(searchString.toLowerCase())
    })

    return filterData
}