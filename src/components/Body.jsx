import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import Home from './Home'

const Body = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex '>
      <div className=' p-4 w-1/4' >
      <SideBar/>
      </div>
   <Outlet/>
      </div>
     
    </div>
  )
}

export default Body
