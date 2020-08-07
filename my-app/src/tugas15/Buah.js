import React from 'react'
import { BuahProvider } from './BuahContext.js'
import BuahTabel from './BuahTabel.js' 
import BuahForm from './BuahForm.js'

const Buah = () => {
    return (
        <BuahProvider>
            <BuahTabel/>
            <BuahForm/>
       </BuahProvider>

    )
}

export default Buah
