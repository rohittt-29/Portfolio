import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Home from './Home';
import Footer from './Footer';

const Body = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Device check
  const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

  // This checks if screen width is md or larger (>=768px)
  const isMdUp = window.matchMedia('(min-width: 768px)').matches;

  // Root path check
  const isRootPath = currentPath === '/';

  // Sidebar logic
  const showSidebar = isMobileDevice 
    ? isRootPath // agar mobile device hai, to sirf root path pe sidebar dikhao
    : (isRootPath || isMdUp); // agar desktop hai, to normal logic follow karo

  // Home logic
  const shouldShowHome = isRootPath && (isMobileDevice ? true : isMdUp);

  return (
    <div>
      <Navbar />
      <div className="md:flex md:justify-between">
        {/* Sidebar */}
        <div className={`p-4 md:w-1/4 ${showSidebar ? 'block' : 'hidden'} md:block`}>
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
