import { memo, RefObject, useRef, useState } from "react"
import { ReactSVG } from "react-svg"
import useCloseDropdownOutside from "../hooks/useCloseDropdownOutside"
import AnimeTypeCBox from "./AnimeTypeCBox"

const FilterDropDown = () => {
    const [openMainDD, setOpenMainDD] = useState(false)
    const [openTypeDD, setOpenTypeDD] = useState(false)
    const mainDropdownRef: RefObject<HTMLDivElement> = useRef(null)

    useCloseDropdownOutside(mainDropdownRef, setOpenMainDD, setOpenTypeDD, openMainDD)

    return (
        <div className="dropdown">
            <button id="dropdownCheckboxButton" className="filter-dd-btn-styles" type="button" onClick={() => setOpenMainDD(prev => !prev)}>
                Filter
                <ReactSVG className="ml-2 w-4 h-4 text-new-light dark:text-new-dark" src="/filter-icon.svg" />
            </button>
            <div ref={mainDropdownRef} id="dropdownDefaultCheckbox" className={`${openMainDD ? 'visible scale-100' : 'invisible scale-95'} dd-cbox-styles`}>
                <ul className="p-1 text-sm text-new-dark dark:text-new-light" aria-labelledby="dropdownCheckboxButton">
                    <li className="p-2 hover:bg-gray-200 dark:hover:bg-new-dark rounded-md">
                        <div className="flex items-center">
                            <input id="include-adult" type="checkbox" className="w-4 h-4 cursor-pointer" />
                            <label htmlFor="include-adult" className="dd-cbox-label-styles">Include Adult Anime</label>
                        </div>
                    </li>
                    <hr className="my-1" />
                    <li className="p-2 hover:bg-gray-200 dark:hover:bg-new-dark rounded-md">
                        <button id="typeDropdownButton" className="type-dd-btn-styles" type="button" onClick={() => setOpenTypeDD(prev => !prev)}>
                            Type<ReactSVG className="w-2.5 md:rtl:rotate-180 text-blue-400 dark:text-yellow-300" src="/greaterthan-icon.svg" />
                        </button>
                        <div id="typeDropdown" className={`${openTypeDD ? 'visible scale-100' : 'invisible scale-95'} type-dd-styles`}>
                            <ul className="py-2 text-sm text-new-dark dark:text-new-light" aria-labelledby="typeDropdownButton">
                                <AnimeTypeCBox animeType="TV" />
                                <AnimeTypeCBox animeType="Movie" />
                                <AnimeTypeCBox animeType="OVA" />
                                <AnimeTypeCBox animeType="ONA" />
                                <AnimeTypeCBox animeType="Special" />
                                <AnimeTypeCBox animeType="Unknown" />
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default memo(FilterDropDown)