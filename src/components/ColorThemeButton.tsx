import { RefObject, useRef } from "react"
import { isLocalDark, isPreferColorSchemeDark } from "../constants"

const ColorThemeButton = () => {
    const themeToggleDarkIcon: RefObject<HTMLImageElement> = useRef(null)
    const themeToggleLightIcon: RefObject<HTMLImageElement> = useRef(null)

    const themeToggleButton: RefObject<HTMLButtonElement> = useRef(null)

    function handleThemeToggle() {
        themeToggleLightIcon.current?.classList.toggle('hidden')
        themeToggleDarkIcon.current?.classList.toggle('hidden')

        const currentTheme = localStorage.getItem('color-theme')
        const isDarkTheme = document.documentElement.classList.contains('dark')
        let newTheme

        if (currentTheme) {
            newTheme = currentTheme === 'light' ? 'dark' : 'light'
            document.documentElement.classList.toggle('dark', newTheme === 'dark')
            localStorage.setItem('color-theme', newTheme)
            
        } else {
            newTheme = isDarkTheme ? 'light': 'dark'
            document.documentElement.classList.toggle('dark', newTheme === 'dark')
            localStorage.setItem('color-theme', newTheme)
        }
    }

    return (
        <button type="button" ref={themeToggleButton} onClick={handleThemeToggle} className="darkmode-btn-styles">
            <img ref={themeToggleDarkIcon} className={`${isLocalDark || isPreferColorSchemeDark ? 'hidden': ''} w-5 h-5`} src="/moon-icon.svg" alt="moon icon" />
            <img ref={themeToggleLightIcon} className={`${isLocalDark || isPreferColorSchemeDark ? '': 'hidden'} w-5 h-5`} src="/sun-icon.svg" alt="sun-icon" />
        </button>
    )
}

export default ColorThemeButton