import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.div className='footer-container'
      initial={{ y: 250 }}
      animate={{ y: 0}}
      transition={{ delay: 1.5, type: "tween"}}
    >
      <section class='social-media'>
          <small class='website-rights'>Lb Desarrollo Web © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
      </section>
    </motion.div>
  );
}

export default Footer;
