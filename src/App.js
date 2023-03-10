import React, { useState } from 'react';
import './global.css';
import { Navbar } from "./components/Navbar"
import { Routes } from "./components/Routes"
import { Footer } from "./components/Footer"

function App() {
  const [ darkTheme, setDarkTheme ] = useState(false)
  return (
    <div className={darkTheme ? 'dark' : ''}>
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
          <Routes />
          {/* <Footer /> */}
        </div>
    </div>
  );
}

export default App;
