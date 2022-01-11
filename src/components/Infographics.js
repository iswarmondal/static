import React from 'react'
import InfoPillars from './InfoPillars'

function Infographics(props)
{
    return (
        <section className='infographic'>
            <h2>Why we?</h2>
            <div className='info-pillars-wrapper'>
                <InfoPillars
                    img={"https://cdn.pixabay.com/photo/2019/11/30/16/31/comic-4663592_1280.jpg"}
                    heading={"This is a heading"}
                    content={"this is the example content for the new component I'm just creating with the help of some web resourses and some from my own friendly memorie"} />
                <InfoPillars
                    img={"https://cdn.pixabay.com/photo/2019/11/30/16/31/comic-4663592_1280.jpg"}
                    heading={"This is a heading"}
                    content={"this is the example content for the new component I'm just creating with the help of some web resourses and some from my own friendly memorie"} />
                <InfoPillars
                    img={"https://cdn.pixabay.com/photo/2019/11/30/16/31/comic-4663592_1280.jpg"}
                    heading={"This is a heading"}
                    content={"this is the example content for the new component I'm just creating with the help of some web resourses and some from my own friendly memorie"} />
            </div>
        </section>
    )
}

export default Infographics
