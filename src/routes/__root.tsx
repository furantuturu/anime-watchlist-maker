import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import type { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ColorThemeButton from '../components/ColorThemeButton'
import { RefObject, useCallback, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

interface QueryClientContext {
    queryClient: QueryClient
}

export const Route = createRootRouteWithContext<QueryClientContext>()({
    component: RootComponent,
})

function RootComponent() {
    const navRef: RefObject<HTMLElement> = useRef(null)
    const { ref, inView } = useInView()

    const backToTop = useCallback(() => {
        const navRect = navRef.current!.getBoundingClientRect()
        window.scrollTo({
            left: navRect.left + window.scrollX,
            top: navRect.top + window.scrollY,
            behavior: 'smooth'
        })
    }, [])


    return (
        <>
            <div ref={ref}>
                <nav ref={navRef} className="bg-blue-400 dark:bg-yellow-400">
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
            </div>
            <Outlet />
            <ReactQueryDevtools buttonPosition='top-left' />
            {/* <TanStackRouterDevtools position='bottom-right' /> */}
            <button className={`${!inView ? 'visible translate-y-0' : 'invisible translate-y-50'} back-to-top-styles`} onClick={backToTop}>Back To Top</button>
        </>
    )
}