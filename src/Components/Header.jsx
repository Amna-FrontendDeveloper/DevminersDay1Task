import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white border-b border-gray-700">
      <h1 className="text-xl font-bold">📘 Student Management System</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm">👩‍💻 Admin</span>
        <button className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
