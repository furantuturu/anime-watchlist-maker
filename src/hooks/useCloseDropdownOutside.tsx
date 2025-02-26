import { RefObject, useCallback, useEffect } from "react"

export default function useCloseDropdownOutside(dropdownRef: RefObject<HTMLDivElement>, setOpenMainDD: React.Dispatch<React.SetStateAction<boolean>>, setOpenTypeDD: React.Dispatch<React.SetStateAction<boolean>>, openMainDD: boolean) {
    const closeDropdownOutside = useCallback((e: MouseEvent) => {
        if (dropdownRef.current && openMainDD && !dropdownRef.current?.contains((e.target as Node))) {
            setOpenMainDD(false)
            setOpenTypeDD(false)
        }
    }, [openMainDD])

    useEffect(() => {
        document.addEventListener('mousedown', closeDropdownOutside)
        return () => document.removeEventListener('mousedown', closeDropdownOutside)
    }, [closeDropdownOutside])
}