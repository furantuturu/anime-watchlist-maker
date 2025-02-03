import ColorThemeButton from "./ColorThemeButton"

const Nav = () => {
    return (
        

        <nav className="bg-blue-400 dark:bg-yellow-400">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
                <ul className="font-medium text-xl mr-7 md:space-x-8 rtl:space-x-reverse">
                    <li className="hover:bg-blue-300 dark:hover:bg-amber-200 border-blue-300 dark:border-amber-200 rounded-lg ease-in-out duration-150">
                        <a href="#" className="block py-2 px-3 text-new-light dark:text-new-dark" aria-current="page">Search Anime</a>
                    </li>
                </ul>
                <ColorThemeButton />
            </div>
        </nav>
    )
}

export default Nav