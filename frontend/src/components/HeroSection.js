import React from 'react';
import '../App.css';
import { ButtonHero } from './ButtonHero';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <motion.div className='hero-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5}}
      >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5}}
        >
        <img className='lblogohero' src='./images/lblogo.png' alt='Lb Logo'/>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0}}
        transition={{ delay: 1, duration: 0.75}}>Desarrollo Web</motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1}}
        >
        Obtené más y mejores recursos. Expandí tu negocio, expandí tu mundo.
      </motion.p>
      <motion.div className='hero-btns'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1}}
      >
        <ButtonHero
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SABER MÁS
        </ButtonHero>
      </motion.div>
    </motion.div>
  );
}

export default HeroSection;