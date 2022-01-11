import React from 'react'
import Rocket from "../assets/rocket.svg"

function GetStartedPillers(props)
{
    return (
        <div className="get-started-pillar">
            <div>
                <img src={props.img} alt={props.alt} />
                <h3>{props.heading}</h3>
                <p>{props.content}</p>
                <button className="btn btn-dark">{props.btnTxt}</button>
            </div>
            <img src={Rocket} alt="" />
        </div>
    )
}

export default GetStartedPillers
