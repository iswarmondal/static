import React from 'react'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'
import Hero from '../components/Hero'
import Infographics from '../components/Infographics'
import NavBar from '../components/NavBar'

function Home()
{
    return (
        <main>
            <NavBar />
            <Hero />
            <Infographics />
            <GetStarted />
            <Footer />
        </main>
    )
}

export default Home
