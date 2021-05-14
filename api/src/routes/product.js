var express = require('express');
var router = express.Router();
const { Product } = require('../db');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

//OBTENER PRODUCTOS
router.get('/search/:name', function (req, res, next) {
  const { name } = req.params;
  Product.findAll({
    where: {
      [Op.or]: {
        name: { [Op.iLike]: `%${name}%` },
        description: { [Op.iLike]: `%${name}%` }
      }
    }
  })
    .then(products => { return res.status(200).json(products) })
    .catch(error => { return res.status(404).json({ error }) })
});

router.get('/', function (req, res, next) {
  Product.findAll()
    .then(products => {
      return res.status(200).json(products)
    })
    .catch((error) => {
      return res.status(404).json({ error })
    })
});


router.get('/:id', function (req, res, next) {
  Product.findByPk(req.params.id)
    .then(product => { return res.status(200).json(product) })
    .catch(error => { return res.status(404).json({ error }) })
});

//CREAR PRODUCTO
router.post('/create', (req, res) => {
  const { name, description, image, price } = req.body;
  Product.create({
    name, description, image, price
  })
    .then((product) => {
      return res.status(200).json(product);
    })
    .catch(() => {
      return res.status(404).json({ error: "El producto no pudo ser creado" })
    })
});

//MODIFICAR PRODUCTO
router.put('/:id', (req, res) => {
  const { name, description, image, price } = req.body;
  Product.findByPk(req.params.id)
    .then(producto => {
      producto.update({ name, description, image, price });
      return res.status(200).json(producto);
    })
    .catch(() => { return res.status(404).json({ error: "El producto no pudo ser modificado" }) })
});

//ELIMINAR PRODUCTO
router.delete('/:id', (req, res) => {
  Product.destroy({where: {id: req.params.id}})
    .then(() => {
      return res.status(200).json({ success: "El producto fue eliminado exitosamente" })
    })
    .catch(() => {
      return res.status(404).json({ error: "El producto no pudo ser eliminado" })
    })
});


module.exports = router;
