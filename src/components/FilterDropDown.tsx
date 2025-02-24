import { memo, RefObject, useCallback, useEffect, useRef, useState } from "react"
import { ReactSVG } from "react-svg"

const FilterDropDown = () => {
    const [open, setOpen] = useState(false)
    const dropdownRef: RefObject<HTMLDivElement> = useRef(null)

    const closeDropdownOutside = useCallback((e: MouseEvent) => {
        if (dropdownRef.current && open && !dropdownRef.current?.contains((e.target as Node))) {
            setOpen(false)
        }
    }, [open])

    useEffect(() => {
        document.addEventListener('mousedown', closeDropdownOutside)
    }, [closeDropdownOutside])

    return (
        <div className="dropdown">
            <button id="dropdownCheckboxButton" data-dropdown-toggle="dropdownDefaultCheckbox" className="filter-dd-styles" type="button" onClick={() => setOpen(prev => !prev)}>
                Filter
                <ReactSVG className="ml-2 w-4 h-4 text-new-light dark:text-new-dark" src="/filter-icon.svg" />
            </button>

            <div ref={dropdownRef} id="dropdownDefaultCheckbox" className={`${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} dd-box-styles`}>
                <ul className="p-1 text-sm text-new-dark dark:text-new-light" aria-labelledby="dropdownCheckboxButton">
                    <li className="p-2 hover:bg-gray-200 dark:hover:bg-new-dark rounded-md">
                        <div className="flex items-center">
                            <input id="include-adult" type="checkbox" className="w-4 h-4" />
                            <label htmlFor="include-adult" className="p-1 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Include Adult Anime</label>
                        </div>
                    </li>
                    <hr className="my-1" />
                    <li>
                        <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg className="w-2.5 h-2.5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg></button>
                        <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Overview</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My downloads</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Billing</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rewards</a>
                            </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default memo(FilterDropDown)