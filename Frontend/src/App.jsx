import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Signin from './pages/signin'

function App() {
   return (
     <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path='/signin' element={<Signin/> } />
        </Routes>
       </BrowserRouter >
       
  )
}

export default App
