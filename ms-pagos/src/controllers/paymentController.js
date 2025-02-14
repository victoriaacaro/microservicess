// Importa el modelo Payment desde la carpeta models
const Payment = require('../models/Payment');

// Función para procesar un pago
const processPayment = async (req, res) => {
    // Extrae userId, productId y amount del cuerpo de la solicitud
    const { userId, productId, amount } = req.body;
    
    // Crea una nueva instancia del modelo Payment con los datos proporcionados
    const payment = new Payment({ userId, productId, amount });
    
    // Guarda el nuevo pago en la base de datos
    await payment.save();
    
    // Devuelve el pago creado en formato JSON con un código de estado 201 (Created)
    res.status(201).json(payment);
};

// Función para compensar (eliminar) un pago
const compensatePayment = async (req, res) => {
    // Extrae userId y productId del cuerpo de la solicitud
    const { userId, productId } = req.body;
    
    // Elimina el pago que coincida con el userId y productId proporcionados
    await Payment.deleteOne({ userId, productId });
    
    // Devuelve un mensaje de éxito en formato JSON con un código de estado 200 (OK)
    res.status(200).json({ message: 'Payment compensation completed' });
};

// Exporta las funciones para que puedan ser utilizadas en otras partes de la aplicación (por ejemplo, en las rutas)
module.exports = {
    processPayment,
    compensatePayment
};


// processPayment: Crea un nuevo pago en la base de datos con los datos proporcionados 
// en el cuerpo de la solicitud y devuelve el pago creado.

// compensatePayment: Elimina un pago específico de la base de datos (compensación) y devuelve un mensaje de éxito.

// module.exports: Exporta las funciones para que puedan ser utilizadas en las rutas.


//Este controlador maneja las operaciones relacionadas con los pagos en el microservicio de pagos. 