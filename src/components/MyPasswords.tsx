import React from 'react'
import {BiPlus} from 'react-icons/bi'
import { Routes, Route, Link } from "react-router-dom";

function MyPasswords() {

  const passwordName = 'Google Email'
  const password  = 'I^KA3tfWyUZnAcf9'

  return (
    <div className='flex flex-col gap-10'>
      <Link to='/' className='bg-red-500 text-white flex flex-row justify-center items-center gap-2 py-2 rounded-md'>
        <BiPlus className='text-2xl font-black'/>
        <p>Generate new password</p>
      </Link>

      <div className='flex flex-col gap-2 divide-y divide-solid border px-4'>
        <span className='flex flex-col gap-2 '>
          <p className='font-bold mt-4'>
            {passwordName}
          </p>

          <p className='ml-4 mb-2'>
            {password}
          </p>
        </span>

        <span className='flex flex-col gap-2 '>
          <p className='font-bold mt-4'>
            {passwordName}
          </p>

          <p className='ml-4 mb-2'>
            {password}
          </p>
        </span>

        <span className='flex flex-col gap-2 '>
          <p className='font-bold mt-4'>
            {passwordName}
          </p>

          <p className='ml-4 mb-2'>
            {password}
          </p>
        </span>

        <span className='flex flex-col gap-2 '>
          <p className='font-bold mt-4'>
            {passwordName}
          </p>

          <p className='ml-4 mb-4'>
            {password}
          </p>
        </span>

        <span className='flex flex-col gap-2 '>
          <p className='font-bold mt-4'>
            {passwordName}
          </p>

          <p className='ml-4 mb-2'>
            {password}
          </p>
        </span>
      </div>
    </div>
  )
}

export default MyPasswords