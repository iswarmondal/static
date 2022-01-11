import React from 'react'
import GetStartedPillers from './GetStartedPillers'

function GetStarted()
{
    return (
        <section className='get-started'>
            <h2>Get Started</h2>
            <div className="get-started-bg">
                <GetStartedPillers heading={"THis is a heading"} content={"this is the content"} btnTxt={"Click"} />
            </div>
        </section>
    )
}

export default GetStarted
