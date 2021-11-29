var express = require('express');
var router = express.Router();
var blogModel = require('../models/blogModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/blog', async function(req, res, next) {

  let blog = await blogModel.getBlog();

  blog = blog.map(blog => {
    if (blog.img_id) {
      const imagen = cloudinary.url(blog.img_id, {
        width: 960,
        height: 200,
        crop: 'fill'
      });
      return {
        ...blog,
        imagen
      }
    } else {
      return {
        ...blog,
        imagen: ''
      }
    }
  });
  res.json(blog);
});

router.post('/contact', async (req, res) => {
  const mail = {
    to: 'bocailautaro@gmail.com',
    subject: 'Contacto desde Lb Web',
    html: `${req.body.nombre} se contactó a través de tu sitio web y quiere más info al siguiente correo: ${req.body.email}<br>
    Su mensaje: ${req.body.mensaje}`
  }

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transport.sendMail(mail)

  res.status(201).json({
    error: false,
    message: 'Mensaje enviado'
  });
});

module.exports = router;