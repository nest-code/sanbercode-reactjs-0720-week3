import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Index from './tugas15/Index.js'

// import logo from './logo.svg';
// import './App.css';
// import HargaBuah from './tugas11/HargaBuah'; // Tugas 11
// import Timer         from './tugas12/Timer'; // Tugas 12
// import  TabelBuah    from './tugas13/TabelBuah'; // Tugas 13
// import  TabelBuah    from './tugas14/TabelBuah'; // Tugas 14
// import Routes from './tugas15/Routes'; // Tugas 15
// import Nav from './tugas15/NavColor'; // Tugas 15

function App() {
    return (
        <Router>
            <div className="App">

            { /* Tugas 11 */ }
            {/* <HargaBuah /> */}

            { /* Tugas 12 */ }
            {/* <Timer waktu = {100}/> */}

            { /* Tugas 13 */ }
            {/* <TabelBuah/> */}

            { /* Tugas 14 */ }
            {/* <TabelBuah/> */}

            { /* Tugas 15 */ }
                <Index />
            </div>
        </Router>
    );
}

export default App;
