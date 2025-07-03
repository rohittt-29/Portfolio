import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Body from './components/Body'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'




const App = () => {
  return (
    
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Body/>}>
    {/* <Route path='/navbar' element ={<Navbar/>} /> */}
     <Route index element={<Home />} />  {/* This makes / render Home */}
    <Route path='/home' element= {<Home/>}/>
       <Route path='/about' element= {<About/>}/>
          <Route path='/contact' element= {<Contact/>}/>
 {/* <Navbar/> */}
 </Route>
 </Routes>
 </BrowserRouter>
 </>
  )
}

export default App
