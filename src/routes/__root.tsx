import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import type { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ColorThemeButton from '../components/ColorThemeButton'

interface QueryClientContext {
    queryClient: QueryClient
}

export const Route = createRootRouteWithContext<QueryClientContext>()({
    component: RootComponent,
})

function RootComponent() {
    return (
        <>
            <nav className="bg-blue-400 dark:bg-yellow-400" id="nav">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-center md:justify-end mx-auto p-4">
                    <ul className="flex font-medium text-xl mr-7 md:space-x-8 rtl:space-x-reverse">
                        <li className="link-styles">
                            <Link to="/" className="link-text-styles">
                                Home
                            </Link>
                        </li>
                        <li className="link-styles">
                            <Link to="/search" className="link-text-styles">
                                Search Anime
                            </Link>
                        </li>
                    </ul>
                    <ColorThemeButton />
                </div>
            </nav>
            <Outlet />
            <ReactQueryDevtools buttonPosition='top-left' />
            {/* <TanStackRouterDevtools position='bottom-right' /> */}
            <a className="back-to-top-styles" href="#nav">Back To Top</a>
        </>
    )
}