import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import SearchResult from '../components/SearchResult'
import SearchInput from '../components/SearchInput'
import { ReactSVG } from 'react-svg'
import FilterDropDown from '../components/FilterDropDown'

export const Route = createLazyFileRoute('/search')({
    component: Search
})

function Search() {
    const [searchString, setSearchString] = useState('')
    const [filterObj, setFilterObj] = useState()

    return (
        <div className="my-5 py-4">
            <div className="max-w-md mx-auto">
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative flex flex-col md:flex-row justify-between items-center gap-3">
                    <div className="grow">
                        <ReactSVG className="absolute mt-5 ml-4 w-4 h-4 text-blue-400 dark:text-yellow-300 pointer-events-none" src="/search-icon.svg" />
                        <SearchInput setSearchString={setSearchString} />
                    </div>
                    <FilterDropDown />
                </div>
            </div>
            <hr className="mt-10 mb-20 text-blue-300 dark:text-yellow-300" />
            {searchString && <SearchResult searchString={searchString} />}
        </div>
    )
}
