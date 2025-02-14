// Importa la librería express para crear el enrutador
const express = require('express');

// Crea un enrutador (router) de express
const router = express.Router();

// Importa el controlador de inventario, que contiene las funciones para manejar las solicitudes
const inventoryController = require('../controllers/inventoryController');

// Define una ruta GET para obtener todo el inventario
router.get('/', inventoryController.getInventory);

// Define una ruta POST para actualizar el inventario (reducir el stock)
router.post('/', inventoryController.updateInventory);

// Define una ruta POST para compensar el inventario (aumentar el stock)
router.post('/compensate', inventoryController.compensateInventory);

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación
module.exports = router;


// express.Router(): Crea un enrutador para definir rutas específicas.
// Rutas:
// GET /: Obtiene todo el inventario.
// POST /: Actualiza el inventario (reduce el stock).
// POST /compensate: Compensa el inventario (aumenta el stock).
// module.exports: Exporta el enrutador para que pueda ser utilizado en la aplicación principal.
// Este archivo define las rutas que manejan las solicitudes relacionadas 
// con el inventario en el microservicio de inventario. 