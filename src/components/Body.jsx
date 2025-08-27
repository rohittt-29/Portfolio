import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Home from './Home';
import Footer from './Footer';

const Body = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Check if it's a mobile device
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setIsMobileDevice(isMobile);

    // Handle window resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isRootPath = currentPath === '/';
  const shouldShowHome = isRootPath;

  // Use mobile layout for actual mobile devices OR small screens
  const shouldUseMobileLayout = isMobileDevice || screenWidth < 768;

  return (
    <div className="min-h-screen">
      <Navbar />

      {shouldUseMobileLayout ? (
        // Mobile layout - single column, stacked
        <div className="flex flex-col w-full">
          {isRootPath && (
            <div className="w-full p-4">
              <SideBar />
            </div>
          )}
          <div className="flex-1 w-full p-4">
            {shouldShowHome ? <Home /> : <Outlet />}
          </div>
        </div>
      ) : (
        // Desktop layout - sidebar + main content
        <div className="flex w-full">
          {/* Sidebar - fixed width on desktop */}
          <div className="w-96 p-4 ">
            <SideBar />
          </div>

          {/* Main Content - takes remaining space */}
          <div className="flex-1 p-4">
            {shouldShowHome ? <Home /> : <Outlet />}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Body;