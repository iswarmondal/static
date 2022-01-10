import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'

function Home()
{
    return (
        <main>
            <NavBar />
            <Hero />
            <Link to={"/about"}>about</Link>
        </main>
    )
}

export default Home
