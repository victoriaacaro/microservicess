// Importa la librería express para crear la aplicación
const express = require('express');

// Importa la librería axios para hacer solicitudes HTTP a otros microservicios
const axios = require('axios');

// Crea una instancia de la aplicación express
const app = express();

// Define el puerto en el que correrá el servidor, usando una variable de entorno o el puerto 3005 por defecto
const PORT = process.env.PORT || 3005;

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Define una ruta POST para manejar transacciones
app.post('/api/transactions', async (req, res) => {
    // Extrae userId, productId y quantity del cuerpo de la solicitud
    const { userId, productId, quantity } = req.body;

    try {
        // Paso 1: Verificar el inventario
        await axios.post('http://ms-inventario:3004/api/inventory', { productId, quantity });

        // Paso 2: Procesar el pago (suponiendo un monto fijo de 100)
        await axios.post('http://ms-pagos:3003/api/payments', { userId, productId, amount: 100 });

        // Paso 3: Registrar la compra
        await axios.post('http://ms-compras:3002/api/purchases', { userId, productId, quantity });

        // Si todo sale bien, devuelve un mensaje de éxito
        res.status(201).json({ message: 'Transaction completed successfully' });
    } catch (error) {
        // Si algo falla, muestra el error en la consola
        console.error('Transaction failed:', error.message);

        // Compensación: Revertir los pasos anteriores en caso de fallo
        try {
            // Revertir el inventario
            await axios.post('http://ms-inventario:3004/api/inventory/compensate', { productId, quantity });
            // Revertir el pago
            await axios.post('http://ms-pagos:3003/api/payments/compensate', { userId, productId });
            // Revertir la compra
            await axios.post('http://ms-compras:3002/api/purchases/compensate', { userId, productId });
        } catch (compError) {
            // Si la compensación falla, muestra el error en la consola
            console.error('Compensation failed:', compError.message);
        }

        // Devuelve un mensaje de error con el código de estado 500 (Internal Server Error)
        res.status(500).json({ message: 'Transaction failed', error: error.message });
    }
});

// Inicia el servidor y lo hace escuchar en el puerto definido
app.listen(PORT, () => {
    console.log(`Saga Service running on port ${PORT}`);
});


// express: Se utiliza para crear la aplicación web y manejar solicitudes HTTP.
// axios: Se utiliza para hacer solicitudes HTTP a otros microservicios.
// app.use(express.json()): Permite que la aplicación parseé el cuerpo de las solicitudes en formato JSON.
// app.post('/api/transactions'): Define una ruta POST para manejar transacciones.
// axios.post: Hace solicitudes POST a otros microservicios para realizar las operaciones necesarias.
// res.status(201).json: Devuelve un mensaje de éxito con el código de estado 201 (Created).
// console.error: Muestra los errores en la consola.
// res.status(500).json: Devuelve un mensaje de error con el código de estado 500 (Internal Server Error).
// app.listen: Inicia el servidor y lo hace escuchar en el puerto definido (3005 por defecto).
//
// Este archivo es el punto de entrada del microservicio de saga y configura la aplicación para manejar transacciones utilizando el patrón Saga.
// El servicio Saga coordina las operaciones entre los microservicios de inventario, pagos y compras para realizar una transacción completa.
// Si alguna de las operaciones falla, el servicio Saga ejecuta una compensación para revertir las operaciones anteriores.
