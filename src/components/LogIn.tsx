import React from 'react'
import {FcGoogle} from 'react-icons/fc'

function LogIn() {
  return (
    <div>
        <label className='border flex flex-row gap-4 items-center justify-center py-2 cursor-pointer hover:bg-slate-100 duration-200'>
            <FcGoogle />
            <p>Sign In with Google</p>
        </label>
    </div>
  )
}

export default LogIn