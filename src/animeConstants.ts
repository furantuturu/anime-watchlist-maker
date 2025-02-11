export type AnimeType = "MOVIE" | "ONA" | "OVA" | "SPECIAL" | "TV" | "UNKNOWN"
export type Status = "FINISHED" | "ONGOING" | "UPCOMING"
export type Season = "SPRING" | "SUMMER" | "FALL" | "WINTER" | "UNDEFINED"

export interface AnimeSeason {
    season: Season,
    year: number | null
}

export interface Duration {
    value: number,
    unit: "SECONDS"
}

export interface AnimeData {
    sources: string[],
    title: string,
    type: AnimeType,
    episodes: number,
    status: Status,
    animeSeason: AnimeSeason,
    picture: string,
    thumbnail: string,
    duration: Duration | null
    synonyms: string[],
    relatedAnime: string[],
    tags: string[]
}

export type AnimeDataArray = AnimeData[]

export const provider = {
    Anilist: 'https://anilist.co',
    AniDB: 'https://anidb.net',
    AnimePlanet: 'https://anime-planet.com',
    AniSearch: 'https://anisearch.com',
    LiveChart: 'https://livechart.me',
    Kitsu: 'https://kitsu.app',
    MyAnimeList: 'https://myanimelist.net',
    NotifyMoe: 'https://notify.moe',
};