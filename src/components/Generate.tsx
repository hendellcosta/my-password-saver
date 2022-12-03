import React, { useState } from 'react'
import FiCopy from 'react-icons/fi'

function Generate() {

  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var passwordLength = 15;
   var password = "";

   for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }

  const [genPassword, setGenPassword] = useState('')

  return (
    <div className='flex flex-col gap-4 sm:justify-center'>
        
        <label className='border px-8 py-1 w-full h-12 flex items-center'>
        {/*<input placeholder='Your password is...' type="text" readOnly className='w-full h-12 flex text-center' />*/}
        <p aria-readonly data-placeholder='Your password is...'>{genPassword}</p>
        </label>
        <button className='bg-red-500 w-full text-white font-medium py-2' onClick={() => setGenPassword(password)}>
          Generate your password
        </button>
        <button className='border border-3 bg-white w-full text-red-500 font-medium py-2'>
          Save this password
        </button>
    </div>
  )
}

export default Generate
