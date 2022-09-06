import React from 'react'

export default function Header() {
  return (
    <header className=' shadow-md'>
      <div className="container flex justify-between items-center mx-auto py-6">
        
        <h1 className='font-bold text-lighterblack text-2xl'>Where in the world?</h1>
        <button className='font-semibold cursor-pointer text-red-500'>Dark Mode</button>
      </div>
    </header>
  )
}
