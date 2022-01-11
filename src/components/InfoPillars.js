import React from 'react'

function InfoPillars(props)
{
    return (
        <div className='info-pillars'>
            <img src={props.img} alt="" />
            <h3>{props.heading}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default InfoPillars
