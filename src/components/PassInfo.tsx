import React from 'react'

function PassInfo() {
  return (
    <div className='shadow-xl flex flex-col gap-4 justify-center px-8 py-8'>
        <h1 className='font-bold sm:text-2xl'>Passwords Details:</h1>
        <ul className='flex flex-col gap-3 sm:text-xl'>
            <li>- Contains uppercase and lowercase letters.</li>
            <li>- Contains numbers.</li>
            <li>- Contains symbols like: /_*</li>
            <li>- No usual words or sentences.</li>
            </ul>    
    </div>
  )
}

export default PassInfo