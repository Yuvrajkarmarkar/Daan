import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Signin from './pages/signin'
import Signup from './pages/signup'
import LandingPage from './pages/landingpage'
import Home from './pages/home'
import Footer from './components/Footer'

function App() {
   return (
     <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path='/' element={<LandingPage />} />
         <Route path='/home' element={<Home />} />
         <Route path='/signin' element={<Signin />} />
         <Route path='/signup' element={<Signup/>}/>
         
       </Routes>
       <Footer/>
       </BrowserRouter >
       
  )
}

export default App
