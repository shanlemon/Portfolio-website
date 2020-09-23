import React, { useState } from 'react';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const scrollTo = (position) =>
    console.log('scrolling to position: ' + position);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='/' className='navbar-logo'>
            <h2>ShanMemon.com</h2>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <Link to='/resume' className="nav-links" onClick={closeMobileMenu}>
              <li className='nav-item'>Resume</li>
            </Link>
            <Link className="nav-links" onClick={(closeMobileMenu, scrollTo(10))}>
              <li className='nav-item'>Contact Me</li>
            </Link>
            <Link className="nav-links" onClick={(closeMobileMenu, scrollTo(20))}>
              <li className='nav-item'>Timeline</li>
            </Link>
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
