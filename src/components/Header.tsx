import React from 'react'

function Header() {
  return (
    <header className='flex flex-row justify-between px-6 py-6 sm:px-40 sm:py-6 items-center border border-b-2 text-lg w-full'>
        <span className='flex flex-row font-bold'><a href='' className='text-red-500 font-black'>My</a> <p>Pass**** Saver</p></span>
        <span><p className='cursor-pointer'>Log In</p></span>
    </header>
  )
}

export default Header