var express = require('express');
var router = express.Router();
var blogModel = require('./../models/blogModel');
var cloudinary = require('cloudinary').v2;

router.get('/blog', async function(req, res, next) {

  var blog = await blogModel.getBlog();

  blog = blog.map(entrada => {
    if (entrada.img_id) {
      const imagen = cloudinary.image(entrada.img_id, {
        width: 960,
        height: 200,
        crop: 'fill'
      });
      return {
        ...entrada,
        imagen
      }
    } else {
      return {
        ...entrada,
        imagen: ''
      }
    }
  });
  res.json(blog);
});

module.exports = router;