import React, { createContext, useState, useContext } from 'react'

export const ThemeContext = createContext({
    mode: "light",
    setMode: () => {}
});

const Toggle = () => {
    const { mode, setMode } = useContext(ThemeContext)

    let output;
    if (mode.mode == "light") {
        output = { mode: "dark" }
    } else if (mode.mode == "dark") {
        output = { mode: "light" }
    }

    return (
        <button  onClick={() => setMode(output)}> Nav Color Theme </button>
    )
}

export const ThemeProvider = props => {
    const [mode, setMode] = useState({ mode: "light" })
    const value = { mode, setMode }
   
    return (
        <ThemeContext.Provider value={value}>
            <Toggle />
            {props.children}
        </ThemeContext.Provider>
    )
}
