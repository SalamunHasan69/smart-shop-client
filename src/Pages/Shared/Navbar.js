import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="navbar px-10">
      <div className="lg:container flex justify-around h-16 mx-auto">
        <ul className='items-stretch hidden space-x-3 md:flex'>
          <li className='flex'>
            <NavLink
              to='/home'
              className={({ isActive }) =>
                isActive
                  ? 'text-primary flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                  : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/blog'
              className={({ isActive }) =>
                isActive
                  ? 'text-primary flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                  : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="md:hidden navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NavLink
                to='/home'
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                    : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/blog'
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                    : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <Link
          to='/'
          aria-label="Back to homepage"
          className="flex items-center p-2">
          <h3 className="text-primary text-2xl font-bold leading-none lg:text-4xl italic">Smart Shop</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;