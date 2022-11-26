import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {

  const { user, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout()
      .then(() => { })
      .catch(error => console.error(error));
  };

  return (
    <div className="navbar lg:px-10">
      <div className="lg:container flex justify-around h-16 mx-auto">
        <div className='items-stretch hidden md:flex'>
          {
            user?.uid ?
              <>
                <button onClick={handleLogOut} className='btn btn-outline btn-primary'>Log out</button>
              </>
              :
              <>
                <button className="btn btn-primary mr-1"><Link to='/login'>Log in</Link></button>
                <button className="btn btn-outline btn-primary"><Link to='/signup'>Sign up</Link></button>
              </>
          }
        </div>
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
          {
            user?.uid ?
              <>
                <li>
                  <NavLink to='/dashboard'
                    className={({ isActive }) =>
                      isActive
                        ? 'text-primary flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                        : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              </>
              :
              <>
              </>
          }
        </ul>
      </div>
      <div className="md:hidden navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
            {
              user?.uid ?
                <>
                  <li>
                    <NavLink to='/dashboard'
                      className={({ isActive }) =>
                        isActive
                          ? 'text-primary flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                          : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
                      }
                    >
                      Dashboard
                    </NavLink>
                  </li>
                </>
                :
                <>
                </>
            }
          </ul>
          <div>
            <button className="btn btn-primary mr-1"><Link to='/login'>Log in</Link></button>
            <button className="btn btn-outline btn-primary"><Link to='/signup'>Sign up</Link></button>
          </div>
        </div>
      </div>
      <div className="navbar-center lg:navbar-end">
        <Link
          to='/'
          aria-label="Back to homepage"
          className="flex items-center p-2">
          <h3 className="text-primary text-2xl font-bold leading-none lg:text-4xl italic">Smart Shop</h3>
        </Link>
      </div>
      <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost btn-circle lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
    </div>
  );
};

export default Navbar;