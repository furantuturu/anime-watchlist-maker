import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute('/search')({
    component: Search,
})

function Search() {
    return (
        <>
            <div className="my-5 py-4">
                <form className="max-w-md mx-auto">   
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-blue-400 dark:text-yellow-300" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                        </div>
                        <input type="search" id="default-search" className="search-inp-styles" placeholder="Search Anime..." required />
                        <button className="search-btn-styles">Search</button>
                    </div>
                </form>
            </div>
        </>
    )
}