import React from 'react';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }} />
      <div className='navbar'>
        <Link to='/'>
          <h2>ShanMemon.com</h2>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
