import { RefObject, useCallback, useEffect } from "react"

export default function useCloseDropdownOutside(dropdownRef: RefObject<HTMLDivElement>, setOpen: React.Dispatch<React.SetStateAction<boolean>>, open: boolean) {
    const closeDropdownOutside = useCallback((e: MouseEvent) => {
        if (dropdownRef.current && open && !dropdownRef.current?.contains((e.target as Node))) {
            setOpen(false)
        }
    }, [open])

    useEffect(() => {
        document.addEventListener('mousedown', closeDropdownOutside)
        return () => document.removeEventListener('mousedown', closeDropdownOutside)
    }, [closeDropdownOutside])
}