import React, { useContext, useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import Tugas11 from '../tugas11/HargaBuah.js'
import Tugas12 from '../tugas12/Timer.js'
import Tugas13 from '../tugas13/TabelBuah.js'
import Tugas14 from '../tugas14/TabelBuah.js'
import Tugas15 from './Buah.js'

import { ThemeContext } from './ThemeContext.js'

const Routes = () => {
    const { mode } = useContext(ThemeContext)
    const [bgStyle, setBgStyle] = useState({})
    const [textStyle, setTextStyle] = useState({})

    useEffect(() => {
        if (mode.mode == "yellow") {
            setBgStyle({
                backgroundColor: "yellow"
            })
            setTextStyle({
                color: "orchid"
            })
        } else if (mode.mode == "blue") {
            setBgStyle({
                backgroundColor: "black"
            })
            setTextStyle({
                color: "white"
            })
        }
    },  [mode] )

    return (
        <div style={{ bgStyle }}>
            <Switch>

                <Route exact path="/">
                    <Tugas15 />
                </Route>

                <Route path="/tugas11">
                    <Tugas11 />
                </Route>

                <Route path="/tugas12">
                    <Tugas12 waktu = {100} />
                </Route> 

                <Route path="/tugas13">
                    <Tugas13 />
                </Route>

                <Route path="/tugas14">
                    <Tugas14 />
                </Route>

                <Route path="/tugas15">
                    <Tugas15 />
                </Route>

            </Switch>
        </div>
    )
}

export default Routes
