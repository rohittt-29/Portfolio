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

  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
    setIsMobileDevice(isMobile);
  }, []);

  const isRootPath = currentPath === '/';
  const shouldShowHome = isRootPath;

  return (
    <div>
      <Navbar />

      {isMobileDevice ? (
        // ✅ 1. AGAR ASLI MOBILE DEVICE HAI, TO HAMESHA YEH LAYOUT DIKHAO
        <div className="p-4 w-full">
          {isRootPath && <SideBar />}
          <div className="flex-1">
            {shouldShowHome ? <Home /> : <Outlet />}
          </div>
        </div>
      ) : (
        // ✅ 2. AGAR DESKTOP/LAPTOP HAI, TO RESPONSIVE LAYOUT DIKHAO
        // Yeh layout screen ki width ke hisaab se badlega
        <div className="md:flex md:justify-between">
          {/* Choti screen (desktop) par top par dikhega */}
          <div className={`p-4 w-full block md:hidden`}>
            {isRootPath && <SideBar />}
          </div>

          {/* Badi screen (desktop) par side mein dikhega */}
          <div className={`p-4 md:w-1/4 hidden md:block`}>
            <SideBar />
          </div>

          {/* Main Content */}
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