import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../components/NavBar'

function About()
{
    return (
        <main>
            <NavBar />
            <h1>This is the about us page</h1>
            <Link to={"/"} >Home</Link>
        </main>
    )
}

export default About
