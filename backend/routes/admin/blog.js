var express = require('express');
var router = express.Router();
var blogModel = require('../../models/blogModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET blog page. */
router.get('/', async function (req, res, next) {

  var blog = await blogModel.getBlog();

  blog = blog.map(entrada => {
    if (entrada.img_id) {
      const imagen = cloudinary.image(entrada.img_id, {
        width: 100,
        height: 100,
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

  res.render('admin/blog', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    blog
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
});

router.post('/agregar', async (req, res, next) => {
  try {
      
      var img_id = '';
      if(req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
      }
      
      if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
          await blogModel.insertBlog({
            ...req.body,
            img_id
          });

          res.redirect('/admin/blog')
      } else {
          res.render('admin/agregar', {
              layout: 'admin/layout',
              error: true,
              message: 'Se requiere completar todos los campos para terminar la acción'
          })
      }
  } catch (error) {
      console.log(error)
      res.render('admin/agregar', {
          layout: 'admin/layout',
          error: true,
          message: 'No se cargó la entrada al Blog'
      })
  }
})

router.get('/eliminar/:id', async (req, res) => {
  var id = req.params.id;

  let entrada = await blogModel.getBlogById(id);
  if (entrada.img_id) {
    await (destroy(entrada.img_id));
  }

  await blogModel.deleteBlogById(id);
  res.redirect('/admin/blog');
});

router.get('/modificar/:id', async (req, res) => {
  var id = req.params.id;
  console.log(req.params.id);
  var entrada = await blogModel.getBlogById(id);

  res.render('admin/modificar', {
    layout: 'admin/layout',
    entrada
  });
});

router.post('/modificar', async (req, res) => {
  try {

    let img_id = req.body.img_original;
    let borrar_img_vieja = false;

    if (req.body.img_delete === "1") {
        img_id = null;
        borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
          imagen = req.files.imagen;
          img_id = (await uploader(imagen.tempFilePath)).public_id;
          borrar_img_vieja= true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
        await (destroy(req.body.img_original));
    }

    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
      img_id
    }
  console.log(obj)

  await blogModel.modificarBlogById(obj, req.body.id);
  res.redirect('/admin/blog');

  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modificó la entrada'
    })
  }
})

module.exports = router;