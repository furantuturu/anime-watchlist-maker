import { providers } from "../constants"

type Sources = { sources: string[] }

const Sources = ({ sources }: Sources) => {
    return (
        <>

            <div>
                <h5 className="font-bold">Sources</h5>
                <div className="leading-relaxed">
                    {sources.map(source => {
                        const provider: string = source.split('/', 3)[2]
                        const sourceProvider: string = providers.get(provider) ?? ''

                        return (
                            <span key={source} className="source-styles">
                                <a href={source} target="_blank">{sourceProvider}</a>
                            </span>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Sources