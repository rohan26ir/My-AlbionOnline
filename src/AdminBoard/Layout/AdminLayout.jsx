import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  const AdminNav = [
    { id: 1, title: "Dashboard", link: "/AdminBoard/dashboard" },
    { id: 2, title: "All Users", link: "/AdminBoard/all-Users" },
    { id: 3, title: "Liked", link: "/AdminBoard/liked" },
    { id: 4, title: "Add Item", link: "/AdminBoard/add-Item" },
    { id: 5, title: "Guild", link: "/AdminBoard/guild" },
    { id: 6, title: "House", link: "/AdminBoard/house" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-5">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        <ul>
          {AdminNav.map(item => (
            <li key={item.id} className="mb-2">
              <Link to={item.link} className="block py-2 px-4 rounded hover:bg-gray-700">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold">Welcome to Admin Dashboard</h1>
        {/* Content will go here */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminLayout;
