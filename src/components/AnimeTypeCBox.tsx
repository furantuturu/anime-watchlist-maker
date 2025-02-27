type AnimeType = { animeType: string }

const AnimeTypeCBox = ({ animeType }: AnimeType) => {
    return (
        <li className="p-2 hover:bg-gray-200 dark:hover:bg-new-dark rounded-md">
            <div className="flex items-center px-2">
                <input id={`only-${animeType}`} type="checkbox" className="w-4 h-4 cursor-pointer" />
                <label htmlFor={`only-${animeType}`} className="dd-cbox-label-styles">{animeType.slice(0, 1).toUpperCase() + animeType.slice(1)}</label>
            </div>
        </li>
    )
}

export default AnimeTypeCBox