// Layout.js

// import React, { Children } from 'react';
import { TopHeader } from './TopHeader';
import { SideHeader } from './SideHeader';

export const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Left side - Header */}
      <div className="w-1/6">
        <SideHeader />
      </div>

      {/* Right side - Main content with TopHeader */}
      <div className="w-5/6 p-5">
        {/* <TopHeader /> */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
