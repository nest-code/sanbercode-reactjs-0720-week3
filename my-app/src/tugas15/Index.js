import React from 'react'
import { ThemeProvider } from './ThemeContext.js'
import Nav from './Navbar.js'
import Routes from './Routes.js'

const Index = () => {
    return (
        <>
            <ThemeProvider>
                <Nav />
                <Routes />
            </ThemeProvider>
        </>
    )
}

export default Index