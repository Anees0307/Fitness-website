import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>SCULPT</span>
      <ul className='nav-items'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/membership'>Membership</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li ><Link to='/logout'>Logout</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
