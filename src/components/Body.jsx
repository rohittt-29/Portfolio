import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Home from './Home';
import Footer from './Footer';

const Body = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // ✅ Safe device check using screen size at load
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      // Agar screen width < 768 pe load hua → mobile मान
      setIsMobileDevice(window.innerWidth < 768 && /Mobi|Android/i.test(navigator.userAgent));
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Check if it's root path
  const isRootPath = currentPath === '/';

  // Sidebar logic
  const showSidebar = isMobileDevice 
    ? isRootPath  // Mobile → sirf root pe sidebar
    : (isRootPath || window.innerWidth >= 768); // Desktop → normal logic

  // Home logic
  const shouldShowHome = isRootPath && (isMobileDevice ? true : window.innerWidth >= 768);

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
