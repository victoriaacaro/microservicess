// Importa la librería mongoose, que se utiliza para interactuar con MongoDB
const mongoose = require('mongoose');

// Define el esquema del pago
const paymentSchema = new mongoose.Schema({
    // Campo "userId" de tipo String, que representa el ID del usuario que realizó el pago
    userId: String,

    // Campo "productId" de tipo String, que representa el ID del producto asociado al pago
    productId: String,

    // Campo "amount" de tipo Number, que representa el monto del pago
    amount: Number,

    // Campo "date" de tipo Date, que representa la fecha del pago
    // Por defecto, se establece la fecha y hora actuales (Date.now)
    date: { type: Date, default: Date.now }
});

// Exporta el modelo "Payment", que permite interactuar con la colección de pagos en la base de datos
module.exports = mongoose.model('Payment', paymentSchema);


// mongoose.Schema: Define la estructura de los documentos (registros) que se almacenarán en la colección de pagos en MongoDB.
// Campos del esquema:
// userId: ID del usuario que realizó el pago.
//  productId: ID del producto asociado al pago.
// amount: Monto del pago.
//  date: Fecha del pago (se establece automáticamente como la fecha y hora actuales).
// mongoose.model: Crea un modelo que permite interactuar con la colección de pagos en la base de datos.
// module.exports: Exporta el modelo para que pueda ser utilizado en otras partes de la aplicación.

// Este archivo define la estructura de los pagos en la base de datos y proporciona una interfaz para interactuar con ellos