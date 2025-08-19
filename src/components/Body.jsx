import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Home from './Home';
import Footer from './Footer';
import { isMobile } from 'react-device-detect';

const Body = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Root path check
  const isRootPath = currentPath === '/';

  // Sidebar logic
  const showSidebar = isMobile 
    ? isRootPath   // Agar mobile device hai → mobile layout
    : (isRootPath || window.innerWidth >= 768); // Agar asli desktop hai → normal layout

  // Home logic
  const shouldShowHome = isRootPath && (isMobile ? true : window.innerWidth >= 768);

  return (
    <div>
      <Navbar />
      <div className="md:flex md:justify-between">
        {/* Sidebar */}
        <div className={`p-4 md:w-1/4 ${showSidebar ? 'block' : 'hidden'}`}>
          <SideBar />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {shouldShowHome ? <Home /> : <Outlet />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Body;
