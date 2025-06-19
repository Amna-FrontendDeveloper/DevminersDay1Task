import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 bg-gray-100 p-6">
          <Outlet /> {/* 🔁 Render page here based on route */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
