import React from 'react';
import './Cards.css';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a
          href={props.path}
          className='cards__item__link'
          target='blank'
          rel='noopener noreferrer'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt=''
              src={props.src}
              path={props.path}
            />
          </figure>
          <div className='cards__item__info'>
            <p className='cards__item__text'>{props.text}</p>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
