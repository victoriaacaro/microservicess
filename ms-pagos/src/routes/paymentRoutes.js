// Importa la librería express para crear el enrutador
const express = require('express');

// Crea un enrutador (router) de express
const router = express.Router();

// Importa el controlador de pagos, que contiene las funciones para manejar las solicitudes
const paymentController = require('../controllers/paymentController');

// Define una ruta POST para procesar un pago
router.post('/', paymentController.processPayment);

// Define una ruta POST para compensar (eliminar) un pago
router.post('/compensate', paymentController.compensatePayment);

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación
module.exports = router;



// express.Router(): Crea un enrutador para definir rutas específicas.
// Rutas:
// POST /: Procesa un pago.
// POST /compensate: Compensa (elimina) un pago.
// module.exports: Exporta el enrutador para que pueda ser utilizado en la aplicación principal.

// Este archivo define las rutas que manejan las solicitudes relacionadas con los pagos en el microservicio de pagos.


