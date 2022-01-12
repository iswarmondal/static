import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function About()
{
    return (
        <main className='about-us'>
            <NavBar />
            <div className="about-img">
                <h3>About us</h3>
            </div>
            <section>
                <h2>About us</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum maxime consequuntur inventore consequatur necessitatibus illum ex, dolores vitae tempore odio.
                    <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, officia. Voluptatibus tenetur minus amet non magnam perferendis. Odio recusandae tempora distinctio molestias pariatur debitis minus. Dolore quidem quibusdam dicta sed vitae rerum similique cumque est architecto doloremque perspiciatis, sapiente quisquam at eaque accusamus cupiditate maxime impedit! Incidunt architecto eaque velit?
                </p>
            </section>
            <Footer />
        </main>
    )
}

export default About
