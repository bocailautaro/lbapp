import React, {useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
    const [formEnviado, cambiarFormEnviado] = useState(false);
    const [cargando, guardarCargando] = useState(false);

    return (
        <div className='form-container'>
            <h1>Contacto</h1>
            <Formik
                initialValues={{
                    nombre: '',
                    correo: '',
                    mensaje: '',
                }}
                validate={(values) => {
                    let errors = {};

                    if (!values.nombre) {
                        errors.nombre = 'Ingresá tu nombre';
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
                        errors.nombre = 'El nombre sólo puede contener letras';
                    }

                    if (!values.correo) {
                        errors.correo = 'Ingresá tu mail';
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                        values.correo
                    )) {errors.correo =
                    'El mail sólo puede contener letras, números, puntos, guiones bajo y alto';
                    }

                    if (!values.mensaje) {
                        errors.mensaje = 'Dajá tu mensaje';
                    }
                    return errors;
                }}
                onSubmit={async (values, { resetForm }) => {
                    resetForm();
                    console.log('Formulario Enviado');
                    guardarCargando(true);
                    await axios.post('http://localhost:3000/api/contact', values);
                    setTimeout(() => guardarCargando(false), 3000);
                    setTimeout(() => cambiarFormEnviado(true), 3000);
                    setTimeout(() => cambiarFormEnviado(false), 8000);
                }}>
                {({ errors }) => (
                    <Form className='formulario'>
                        <div>
                            <label htmlFor='nombre'>Nombre</label>
                            <Field
                                type='text'
                                id='nombre'
                                name='nombre'
                                placeholder='Tu nombre'
                            />
                            <ErrorMessage
                                name='nombre'
                                component={() => (
                                    <div className='error'>{errors.nombre}</div>
                                )}
                            />
                        </div>
                        <div>
                            <label htmlFor='correo'>Correo</label>
                            <Field
                                type='email'
                                id='correo'
                                name='correo'
                                placeholder='Ingresá tu mail'
                            />
                            <ErrorMessage
                                name='correo'
                                component={() => (
                                    <div className='error'>{errors.correo}</div>
                                )}
                            />
                        </div>
                        <div>
                            <label htmlFor='Mensaje'>Mensaje</label>
                            <Field
                                type='textarea'
                                id='mensaje'
                                name='mensaje'
                                placeholder='Dejá tu mensaje'
                            />
                            <ErrorMessage
                                name='mensaje'
                                component={() => (
                                    <div className='error'>{errors.mensaje}</div>
                                )}
                            />
                        </div>
                        <button className='btn__form' type='submit'>ENVIAR</button>
                        {formEnviado && (
                            <p className='exito'>
                                Tu mensaje se envío correctamente! Te responderé a la brevedad.
                            </p>
                        )}         
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Contact;