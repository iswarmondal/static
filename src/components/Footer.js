import React from 'react'
import FooterMenu from './FooterMenu'

function Footer()
{
    return (
        <footer className='footer'>
            <FooterMenu
                heading={"This is an example heading"}
                description={"This is an example description"}
                links={{
                    Home: "/",
                    About: "/about"
                }}
            />
            <FooterMenu
                heading={"This is an example heading"}
                description={"This is an example description"}
                links={{
                    Home: "/",
                    About: "/about"
                }}
            />
            <FooterMenu
                heading={"This is an example heading"}
                description={"This is an example description"}
                links={{
                    Home: "/",
                    About: "/about"
                }}
            />
        </footer>
    )
}

export default Footer
