import { useSuspenseQuery } from "@tanstack/react-query";
import { animeQueryOptions } from "../searchAnimeQueryOptions";
import { PropagateLoader } from "react-spinners";

type DBSearchString = { debouncedSearchString: string }

const SearchResult = ({ debouncedSearchString }: DBSearchString) => {
    const { data, isPending, isFetching } = useSuspenseQuery(animeQueryOptions(debouncedSearchString))

    console.log(data)
    return (
        <>
            {
                isPending || isFetching 
                    ? <PropagateLoader size={15} color={localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) ? '#ffdf20' : '#8ec5ff'} className="text-center" />
                    :
                    <ul>
                        {data.map((user: any) => {
                            return <li key={user.name}>{user.name}</li>
                        })}
                    </ul>
            }
        </>
    )
}

export default SearchResult