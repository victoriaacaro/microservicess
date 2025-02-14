// Importa la librería mongoose, que se utiliza para interactuar con MongoDB
const mongoose = require('mongoose');

// Define el esquema de la compra
const purchaseSchema = new mongoose.Schema({
    // Campo "userId" de tipo String, que representa el ID del usuario que realizó la compra
    userId: String,

    // Campo "productId" de tipo String, que representa el ID del producto comprado
    productId: String,

    // Campo "quantity" de tipo Number, que representa la cantidad comprada
    quantity: Number,

    // Campo "date" de tipo Date, que representa la fecha de la compra
    // Por defecto, se establece la fecha y hora actuales (Date.now)
    date: { type: Date, default: Date.now }
});

// Exporta el modelo "Purchase", que permite interactuar con la colección de compras en la base de datos
module.exports = mongoose.model('Purchase', purchaseSchema);


// mongoose.Schema: Define la estructura de los documentos (registros) que se almacenarán en la colección de compras en MongoDB.
// Campos del esquema:
// userId: ID del usuario que realizó la compra.
// productId: ID del producto comprado.
// quantity: Cantidad comprada.
// date: Fecha de la compra (se establece automáticamente como la fecha y hora actuales).
// mongoose.model: Crea un modelo que permite interactuar con la colección de compras en la base de datos.
// module.exports: Exporta el modelo para que pueda ser utilizado en otras partes de la aplicación.

// Este archivo define la estructura de las compras en la base de datos 
// y proporciona una interfaz para interactuar con ellas. 