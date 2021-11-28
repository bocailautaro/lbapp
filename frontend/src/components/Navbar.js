import React, { useState, useEffect } from 'react';
import { ButtonNav } from './ButtonNav';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <motion.nav className='navbar'
        initial={{ y: -250 }}
        animate={{ y: 0}}
        transition={{ delay: 0.25, type: "tween"}}
      >
        <div className='navbar-container'>
          <Link to='/' onClick={closeMobileMenu}>
            <img className='lblogo' src='./images/LB-Logo.png' alt='LBLogo'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='./about' className='nav-links' onClick={closeMobileMenu}>
                Sobre Lb
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='./resources'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Recursos
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='./blog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                to='/contact'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contacto
              </Link>
            </li>
          </ul>
          {button && <ButtonNav buttonStyle='btn--outline'>Contacto</ButtonNav>}
        </div>
      </motion.nav>
    </>
  );
}

export default Navbar;
