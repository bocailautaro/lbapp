import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Tecnologías Aplicadas</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Html.png'
              text='El Lenguaje de Marcado de Hipertexto (HTML) es un estándar que define las estructuras básicas para el ordenamiento y la definición del contenido de una página web'
            />
            <CardItem
              src='images/CSS.png'
              text='CSS es una tecnología que permite crear diseños visualmente más atractivos, tanto en interfaces de usuario para aplicaciones web como para muchas aplicaciones móviles'
            />
            <CardItem
              src='images/JS.png'
              text='JavaScript es uno de los lenguajes de programación más utilizados mundialmente, que proporciona múltiples herramientas para la mejor interacción del usuario con la aplicación'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/Bootstrap.png'
              text='Bootstrap es un popular framework (marco de trabajo) diseñado para la creación de interfaces limpias y con diseño responsive (adaptables para ver en cualquier dispositivo)'
            />
          <CardItem
              src='images/React.png'
              text='ReactJS es la biblioteca JavaScript más popular que se utiliza principalmente para la creación de interfaces de usuario, aunque también resulta excelente para hacer todo tipo de aplicaciones web y móviles'
          />
          <CardItem
              src='images/Node.png'
              text='NodeJS es una máquina virtual rápida y de gran calidad, realmente ligera y potente, que da al desarrollador la posibilidad de utilizar a tope la I/O (entrada y salida de datos) del sistema'
          />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
