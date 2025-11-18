import { HOW_TO_PLAY } from '@/static'
import React from 'react'
import { ContentLeft, ContentRight } from '.'

const ProcessList = () => {
    return (
        <>
            {HOW_TO_PLAY.processList.map(
                ({ id, title, content, icon }) => 
                    <div data-testid="how-to-play-process-list" key={id}>
                        {
                            id % 2 === 0 ? <ContentRight icon={icon} 
                                title={title} content={content} /> 
                                : <ContentLeft icon={icon} title={title} content={content}/>
                        }
                    </div>
    
            )}
        </>
    )
}

export default ProcessList