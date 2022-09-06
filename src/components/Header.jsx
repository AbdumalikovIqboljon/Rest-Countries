import React from 'react'
import MoonIcon from '../assets/svgs/MoonIcon';
export default function Header() {
  return (
    <header className='mb-12 shadow-md'>
      <div className="container flex justify-between items-center mx-auto py-6">
        
        <h1 className='font-bold text-lighterblack text-2xl'>Where in the world?</h1>
        <button className='flex items-center p-2 cursor-pointer border rounded-md'>
          <MoonIcon />
          <span className='font-semibold text-red-500 ml-2'>Dark Mode</span>
        </button>
      </div>
    </header>
  )
}
