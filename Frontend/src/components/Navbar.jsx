import React from 'react'
import { Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <div>
  <Navbar className='bg-[#F9EFDB]'>
    <div className='flex justify-between items-center w-full'>
      <div className='flex'>
        <Link to="/">
          <div className='flex'>
            <div className='self-center whitespace-nowrap text-lg font-bold font-serif'>
              Daan
            </div>
            <div className='text-green-600 font-bold'>.</div>
          </div>
        </Link>
      </div>
      <div className='flex space-x-4'>
        <div>
                          <Link to='/home'>
                              
                          Home
            </Link>
                      </div>
        <div>
                          <Link to='/about'>
                              
                          About
            </Link>
                      </div>
        <div>
                          <Link to='/cause'>
                              
                          Cause
            </Link>
                      </div>
        <div>
                          <Link to='/contact'>
                              
                          Contact
            </Link>
                      </div>
      </div>
      <div className='flex space-x-4'>
                      <div className='p-2 border-4 border-green-600 rounded-full  hover:bg-green-600 hover:text-black' >
                          <Link to='/signin'>
                          Login
                          </Link>        
                      </div>
                      <div className='bg-green-600 p-2 rounded-full'>
                          <Link to='/signup'>
                          Sign up
                          </Link></div>
        </div>
    </div>
  </Navbar>
</div>
  )
}
