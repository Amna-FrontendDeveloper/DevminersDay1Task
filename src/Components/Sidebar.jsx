import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const menuItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Students', path: '/students' },
  { name: 'Teachers', path: '/teachers' },
  { name: 'Courses', path: '/courses' },
  { name: 'Reports', path: '/reports' },
];

const Sidebar = () => {
  const location = useLocation(); // ✅ get current URL

  return (
    <div className="w-72 bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">📘 Student App</h2>
      <nav className="flex flex-col space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={`px-4 py-2 rounded transition-colors duration-200 ${
                isActive ? 'bg-gray-700 font-semibold' : 'hover:bg-gray-700'
              }`}
            >
              {item.name}
            </NavLink>
          );
        })}
        
      </nav>
    </div>
  );
};

export default Sidebar;
