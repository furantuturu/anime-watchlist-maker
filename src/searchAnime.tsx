
import { AnimeDataArray, AnimeData } from "./constants";

export const fetchAnime = async (searchString: string) => {
    const res = await fetch('https://corsproxy.io/?url=https://github.com/manami-project/anime-offline-database/raw/master/anime-offline-database-minified.json')
    const data = await res.json()

    const animeDatas: AnimeDataArray = data.data
    const filterData: AnimeDataArray = animeDatas.filter((anime: AnimeData) => {
        if (!searchString || !anime || !anime.synonyms) return false

        const keywords = searchString.trim().toLowerCase().split(' ')
        return keywords.every((kw: string) => anime.synonyms.find(title => {
            const reg = new RegExp(kw, 'gi')
            return title.match(reg)
        }))
    })

    return filterData.slice(0, 20)
}