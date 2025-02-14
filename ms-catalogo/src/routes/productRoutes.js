// Importa la librería express, que se utiliza para crear el enrutador
const express = require('express');

// Crea un enrutador (router) de express
const router = express.Router();

// Importa el controlador de productos, que contiene las funciones para manejar las solicitudes
const productController = require('../controllers/productController');

// Define una ruta GET para obtener todos los productos
router.get('/', productController.getProducts);

// Define una ruta GET para obtener un producto por su ID
router.get('/:id', productController.getProductById);

// Define una ruta POST para crear un nuevo producto
router.post('/', productController.createProduct);

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación
module.exports = router;

// Este archivo define las rutas relacionadas con los productos y las asocia con las funciones correspondientes

// Rutas:
// GET /: Obtiene todos los productos.
// GET /:id: Obtiene un producto por su ID.
// POST /: Crea un nuevo producto.
// module.exports: Exporta el enrutador para que pueda ser utilizado en la aplicación principal.