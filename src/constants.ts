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

export const providers = new Map([
    ['anilist.co', 'AniList'],
    ['anidb.net', 'AniDB'],
    ['anime-planet.com', 'AnimePlanet'],
    ['anisearch.com', 'AniSearch'],
    ['livechart.me', 'LiveChart'],
    ['kitsu.app', 'Kitsu'],
    ['myanimelist.net', "MyAnimeList"],
    ['notify.moe', 'NotifyMoe'],
    ['simkl.com', 'Simkl'],
    ['animecountdown.com', 'Animecountdown'],
])

export const isLocalDark = localStorage.getItem('color-theme') === 'dark'
export const isPreferColorSchemeDark = (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)