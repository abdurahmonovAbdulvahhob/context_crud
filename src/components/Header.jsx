import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-slate-200 text-3xl p-10">
      <nav className="flex justify-evenly">
        <Link to="/users">
          Users
        </Link>
        <Link to="/create">
          Create User
        </Link>
      </nav>
    </header>
  );
};

export default Header;
