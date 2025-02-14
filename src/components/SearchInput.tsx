import { useEffect, useState } from "react"
import { useDebounce } from 'use-debounce'

type SetSearchStr = { setSearchString: React.Dispatch<React.SetStateAction<string>> }

const SearchInput = ({ setSearchString }: SetSearchStr) => {
    const [searchChar, setSearchChar] = useState(localStorage.getItem("searchString") ?? '')
    
    const [debouncedString] = useDebounce(searchChar, 500)

    useEffect(() => {
        setSearchString(searchChar)
        localStorage.setItem("searchString", searchChar)
    }, [debouncedString])

    return (
        <input
            type="search"
            id="default-search"
            className="search-inp-styles"
            placeholder="Search Anime..."
            required
            value={searchChar}
            onChange={(e) => setSearchChar(e.target.value)}
            autoComplete="on"
        />
    )
}

export default SearchInput