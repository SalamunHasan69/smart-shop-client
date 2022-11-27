import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile  drawer-end">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu  p-4 w-80 bg-base-100 text-base-content">
            <li className='font-bold text-xl'><Link to=''>My Orders</Link></li>
            <li><Link to=''></Link></li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;