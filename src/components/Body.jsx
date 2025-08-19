import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Home from './Home';
import Footer from './Footer';

const Body = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Root path check
  const isRootPath = currentPath === '/';

  // Home logic: show Home component only on root + desktop
  const shouldShowHome = isRootPath;

  return (
    <div>
      <Navbar />

      <div className="md:flex md:justify-between">
        {/* ✅ Mobile Sidebar */}
        <div className={`p-4 w-full block md:hidden`}>
          {isRootPath && <SideBar />}
        </div>

        {/* ✅ Desktop Sidebar */}
        <div className={`p-4 md:w-1/4 hidden md:block`}>
          {(isRootPath || true) && <SideBar />}
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
