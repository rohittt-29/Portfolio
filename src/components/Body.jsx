import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Home from './Home';
import Footer from './Footer';

const Body = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // This checks if screen width is md or larger (>=768px)
  const isMdUp = window.matchMedia('(min-width: 768px)').matches;

  // Check if it's the root path
  const isRootPath = currentPath === '/';

  const shouldShowHome = isRootPath && isMdUp;

  return (
    <div>
      <Navbar />
      <div className='md:flex md:justify-between'>
        {/* Sidebar: show on all screen sizes when on root, or md+ for all */}
        <div className={`p-4 md:w-1/4 ${isRootPath || isMdUp ? 'block' : 'hidden'} md:block`}>
          <SideBar />
        </div>

        {/* Main Content */}
        <div className='flex-1'>
          {shouldShowHome ? <Home /> : <Outlet />}
        </div>
      </div>
      
      <Footer/>
    </div>
  );
};

export default Body;
