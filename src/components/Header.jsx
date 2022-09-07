import React from 'react'
import ToggleButton from './ToggleButton';
import { useState } from "react"

export default function Header() {
  const [mode, setMode] = useState(true);
    

    const toggleDarkMode = () => {
        if(mode) {
            document.documentElement.classList.add('dark')
            setMode(current => current = !current)
        }
        if(!mode) {
            document.documentElement.classList.remove('dark');
            setMode(current => current = !current)
        }
    }

  return (
    <header className='mb-12 shadow-md'>
      <div className="container flex justify-between items-center mx-auto py-6">
        
        <h1 className='font-bold text-lighterblack text-2xl'>Where in the world?</h1>
        <button className="bg-green-500 dark:text-white" onClick={() => toggleDarkMode()}>dark Mode</button>
      </div>
    </header>
  )
}
