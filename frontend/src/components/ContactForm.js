import React from 'react';
import './ContactForm.css';

const ContactForm = (props) => {
  return (
    <div className='form-container'>
      <h1>Contacto</h1> 
        <form action="" method="POST">
        <p>
          <label>Nombre</label>
          <input type="text" name="nombre" required="" />
        </p>
        <p>
          <label>Email</label>
          <input type="text" name="email" required="" />
        </p>
        <p>
          <label>Mensaje</label>
          <textarea name="mensaje"></textarea>
        </p>
        <p>
          <input type="submit" value="Enviar" id="button"/>
        </p>
        </form>
    </div>
  )
}

export default ContactForm;