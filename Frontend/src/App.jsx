import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Signin from './pages/signin'
import Signup from './pages/signup'

function App() {
   return (
     <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path='/signin' element={<Signin />} />
         <Route path='/signup' element={<Signup/>}/>
         
        </Routes>
       </BrowserRouter >
       
  )
}

export default App
