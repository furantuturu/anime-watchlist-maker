
import { AnimeData } from "./constants";

let controller: AbortController | undefined

export const fetchAnime = async (searchString: string) => {
    
    if (controller) {
        controller.abort()
    }

    controller = new AbortController()

    try {
        const res = await fetch('https://corsproxy.io/?url=https://github.com/manami-project/anime-offline-database/raw/master/anime-offline-database-minified.json', {
            signal: controller.signal
        })

        const data = await res.json()
    
        const animeDatas: AnimeData[] = data.data
        const filterData: AnimeData[] = animeDatas.filter((anime: AnimeData) => {
            if (!searchString || !anime) return false
    
            const keywords = searchString.trim().toLowerCase().split(' ')
            return keywords.every((kw: string) => anime.synonyms.find(title => {
                const reg = new RegExp(kw, 'gi')
                return title.match(reg)
            })) && !anime.tags.includes("adult")
        })

        return filterData.slice(0, 20)
    } catch (error) {
        console.log("Fetch error: ", error)
    }
}