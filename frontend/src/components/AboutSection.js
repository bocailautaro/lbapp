import React from 'react';
import '../App.css';
import './AboutSection.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

function AboutSection() {

  const {ref, inView} = useInView({
  });

  const animationOne = useAnimation();

  const animationTwo = useAnimation();

  const animationThree = useAnimation();

  useEffect(() => {
    console.log("Usando Effect Hook, inView = ", inView);
    if(inView){
      animationOne.start({
        opacity: 1,
        transition: {
          delay: 0.50, duration: 0.50
        }
      });
    }
    if(!inView){
      animationOne.start({
        opacity: 0})
    }
  }, [inView]);

  useEffect(() => {
    console.log("Usando Effect Hook, inView = ", inView);
    if(inView){
      animationTwo.start({
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.20,
          duration: 0.20}
      });
    }
    if(!inView){
      animationTwo.start({
        opacity: 0,
        x: 50
      })
    }
  }, [inView]);

  useEffect(() => {
    console.log("Usando Effect Hook, inView = ", inView);
    if(inView){
      animationThree.start({
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.20,
          duration: 0.30}
      });
    }
    if(!inView){
      animationThree.start({
        opacity: 0,
        x: -50
      })
    }
  }, [inView]);
  
  return (
    <div className='about-container'>
      <div className='about__title-container'>
        <motion.h1 animate={animationTwo} ref={ref}>
          ¡Hola! Soy Lautaro Bocai
        </motion.h1>
        <motion.h2 animate={animationThree} ref={ref}>Desarrollador Web Full Stack</motion.h2>
        <motion.div animate={animationOne}>
          <img ref={ref} className='lb' src='./images/1.jpg' alt='Lb'/>
          <p id="intro">Me interesa la implementación de tecnologías y metodologías novedosas. Busco el cuidado en el diseño y el rendimiento del producto. Mi trabajo contempla tanto el despliegue de lo que podrá ver el cliente en la pantalla de su dispositivo (Frontend), como también el despliegue por el lado del servidor, que es dónde se procesan los datos que los usuarios no ven (Backend). Mis proyectos pueden abarcar portfolios personales, blogs, hasta plataformas web para marcas que estén interesadas en vender sus productos vía E-commerce.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutSection;