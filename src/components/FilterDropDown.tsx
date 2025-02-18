import { memo, useState } from "react"
import { ReactSVG } from "react-svg"

const FilterDropDown = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="dropdown">
            <button id="dropdownCheckboxButton" data-dropdown-toggle="dropdownDefaultCheckbox" className="filter-dd-styles" type="button" onClick={() => setOpen(prev => !prev)} onBlur={(e) => setOpen(e.target.parentElement!.classList.contains('dropdown'))}>
                Filter
                <ReactSVG className="ml-2 w-4 h-4 text-new-light dark:text-new-dark" src="/filter-icon.svg" />
            </button>

            <div id="dropdownDefaultCheckbox" className={`${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} dd-box-styles`}>
                <ul className="p-1 space-y-3 text-sm text-new-dark dark:text-new-light" aria-labelledby="dropdownCheckboxButton">
                    <li className="p-2 hover:bg-gray-200 dark:hover:bg-new-dark rounded-md">
                        <div className="flex items-center">
                            <input id="include-adult" type="checkbox" className="w-4 h-4" />
                            <label htmlFor="include-adult" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Include Adult Anime</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default memo(FilterDropDown)