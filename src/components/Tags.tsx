import { useState } from "react"

type Tags = { tags: string[] }

const Tags = ({ tags }: Tags) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="mb-2">
            <h5 className="font-bold">
                Tags
                {
                    tags.length < 11
                    ? ''
                    : <button className="expand-tag-btn-styles" onClick={() => setExpanded(prev => !prev)}>
                        Expand Tags
                    </button>
                }
            </h5>
            <div className="leading-relaxed">
                {tags.slice(0, 11).map(tag => <span className="tag-styles" key={tag}>{tag}</span>)}
                
                {expanded && tags.slice(11).map(tag => <span className="tag-styles" key={tag}>{tag}</span>)}
            </div>
        </div>
    )
}

export default Tags