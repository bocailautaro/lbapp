import React from 'react';
import '../App.css';
import './AboutSection.css';
import { motion } from 'framer-motion';

function AboutSection() {
  return (
    <motion.div className='about-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.3}}
      >
      <div className='about__title-container'>
        <h1>
          ¡Hola! Soy Lautaro Bocai
        </h1>
        <h2>Desarrollador Web Full Stack</h2>
        <div>
          <img className='lb' src='./images/1.jpg' alt='Lb'/>
          <p className="intro">Me interesa la implementación de tecnologías y metodologías novedosas. Busco el cuidado en el diseño y el rendimiento del producto. Mi trabajo contempla tanto el despliegue de la información escrita o gráfica que podrá ver el cliente en la pantalla de su dispositivo (Frontend), como también el desarrollo por el lado del servidor, que te permitirá administrar efectivamente tu página (Backend). Mis proyectos pueden abarcar portfolios personales, blogs, hasta plataformas web para marcas que estén interesadas en vender sus productos vía E-commerce.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutSection;