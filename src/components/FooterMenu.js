import React from 'react'
import {Link} from 'react-router-dom'

function FooterLink(props)
{
    return (
        <>
            <Link to={props.link}>
                <li>
                    {props.text}
                </li>
            </Link>
        </>
    )
}


function FooterMenu(props)
{
    return (
        <>
            <menu>
                <h5>{props.heading}</h5>
                <p>{props.description}</p>
                <ul>
                    {Object.entries(props.links).map((entry,key) =>
                    (
                        <FooterLink link={entry[1]} text={entry[0]} key={key} />

                    ))}
                </ul>
            </menu>
        </>
    )
}

export default FooterMenu
