import { memo, RefObject, useRef, useState } from "react"
import { ReactSVG } from "react-svg"
import useCloseDropdownOutside from "../hooks/useCloseDropdownOutside"
import AnimeTypeCBox from "./AnimeTypeCBox"

const FilterDropDown = () => {
    const [open, setOpen] = useState(false)
    const dropdownRef: RefObject<HTMLDivElement> = useRef(null)

    useCloseDropdownOutside(dropdownRef, setOpen, open)

    return (
        <div className="dropdown">
            <button id="dropdownCheckboxButton" className="filter-dd-styles" type="button" onClick={() => setOpen(prev => !prev)}>
                Filter
                <ReactSVG className="ml-2 w-4 h-4 text-new-light dark:text-new-dark" src="/filter-icon.svg" />
            </button>

            <div ref={dropdownRef} id="dropdownDefaultCheckbox" className={`${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} dd-cbox-styles`}>
                <ul className="p-1 text-sm text-new-dark dark:text-new-light" aria-labelledby="dropdownCheckboxButton">
                    <li className="p-2 hover:bg-gray-200 dark:hover:bg-new-dark rounded-md">
                        <div className="flex items-center">
                            <input id="include-adult" type="checkbox" className="w-4 h-4 cursor-pointer" />
                            <label htmlFor="include-adult" className="dd-cbox-label-styles">Include Adult Anime</label>
                        </div>
                    </li>
                    <hr className="my-1" />
                    <li className="p-2 hover:bg-gray-200 dark:hover:bg-new-dark rounded-md group">
                        <div id="hoverDropdownBox" className="hvr-dd-box-styles">
                            Type<ReactSVG className="w-2.5 rtl:rotate-180 text-blue-400 dark:text-yellow-300" src="/greaterthan-icon.svg" />
                        </div>
                        <div id="hoverDropdown" className="hvr-dd-styles">
                            <ul className="py-2 text-sm text-new-dark dark:text-new-light" aria-labelledby="hoverDropdownBox">
                                <AnimeTypeCBox animeType="Spring" />
                                <AnimeTypeCBox animeType="Summer" />
                                <AnimeTypeCBox animeType="Fall" />
                                <AnimeTypeCBox animeType="Winter" />
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default memo(FilterDropDown)