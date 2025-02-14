// Importa la librería express para crear el enrutador
const express = require('express');

// Crea un enrutador (router) de express
const router = express.Router();

// Importa el controlador de compras, que contiene las funciones para manejar las solicitudes
const purchaseController = require('../controllers/purchaseController');

// Define una ruta GET para obtener todas las compras
router.get('/', purchaseController.getPurchases);

// Define una ruta POST para crear una nueva compra
router.post('/', purchaseController.createPurchase);

// Define una ruta POST para compensar (eliminar) una compra
router.post('/compensate', purchaseController.compensatePurchase);

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación
module.exports = router;



// express.Router(): Crea un enrutador para definir rutas específicas.
// Rutas:
// GET /: Obtiene todas las compras.
// POST /: Crea una nueva compra.
// POST /compensate: Compensa (elimina) una compra.
// module.exports: Exporta el enrutador para que pueda ser utilizado en la aplicación principal.
// Este archivo define las rutas que manejan las solicitudes relacionadas con las compras en el microservicio de compras.