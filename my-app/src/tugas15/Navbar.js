import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from './ThemeContext.js'

const Nav = () => {
    const { mode } = useContext(ThemeContext)
    const [bgStyle, setBgStyle] = useState({})
    const [textStyle, setTextStyle] = useState({})

    useEffect(() => {
        if (mode.mode == "light") {
            setBgStyle({
                backgroundColor: "yellow"
            })
            setTextStyle({
                color: "orchid"
            })
        } else if (mode.mode == "dark") {
            setBgStyle({
                backgroundColor: "black"
            })
            setTextStyle({
                color: "white"
            })
        }
    },  [mode] )

    return (
        <nav style={bgStyle}>
            <ul>
                <li> <Link to="/tugas11"> Tugas 11 </Link></li>
                <li><Link to="/tugas12"> Tugas 12 </Link></li>
                <li><Link to="/tugas13"> Tugas 13 </Link></li>
                <li><Link to="/tugas14"> Tugas 14 </Link></li>
                <li><Link to="/"> Tugas 15 </Link></li>

            </ul>
        </nav>
    )
}

export default Nav
