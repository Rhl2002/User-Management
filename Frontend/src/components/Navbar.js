import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">User Management</Link>
        <ul className="flex">
          <li className="mr-4">
            <Link to="/create-user" className="text-white">Create User</Link>
          </li>
          <li>
            <Link to="/view-team" className="text-white">View Team</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
