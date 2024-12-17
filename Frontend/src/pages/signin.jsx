import React from 'react'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import {Link} from 'react-router-dom'

export default function signin() {
  return (
      <div className='min-h-screen mt-20'>
          <div className='flex p-3 max-w-3xl mx-auto flex-row gap-5'>
              {/* left */}
              <div className='flex-1'>
                  <form className='flex flex-col gap-4'>
                      <div>
                      <Label value='Your Email' />
                      <TextInput type='email' placeholder='Email' id='email'/>
                      </div>
                      <div>
                      <Label value='Your Password' />
                      <TextInput type='password' placeholder='*********' id='password'/>
                      </div>
                      <Button className='bg-black'>
                          continue
                    </Button>
                  </form>  
                  <div>
                      <span>Don't have account?</span>
                      <Link to='/signup' className='text-blue-600'>signup</Link>
                  </div>
                </div>

              {/* right */}
              <div className='flex-1'>
                  <img src="" alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum distinctio id nesciunt numquam laborum sapiente at nostrum adipisci rerum beatae ullam quasi cum hic dicta optio labore sed corporis ipsum molestiae ipsa, quos praesentium totam minus. Veniam ipsum ratione, ipsa id saepe exercitationem placeat amet voluptatibus! Ex similique et fuga debitis in?</p>
                  
                </div>
          </div>
      
    </div>
  )
}
