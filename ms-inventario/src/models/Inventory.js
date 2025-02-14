// Importa la librería mongoose, que se utiliza para interactuar con MongoDB
const mongoose = require('mongoose');

// Define el esquema del inventario
const inventorySchema = new mongoose.Schema({
    // Campo "productId" de tipo String, que representa el ID del producto en el inventario
    productId: String,

    // Campo "stock" de tipo Number, que representa la cantidad disponible en el inventario
    stock: Number
});

// Exporta el modelo "Inventory", que permite interactuar con la colección de inventario en la base de datos
module.exports = mongoose.model('Inventory', inventorySchema);


// mongoose.Schema: Define la estructura de los documentos (registros) que se almacenarán en la colección de inventario en MongoDB.
// Campos del esquema:
// productId: ID del producto en el inventario.
// stock: Cantidad disponible en el inventario.
// mongoose.model: Crea un modelo que permite interactuar con la colección de inventario en la base de datos.
// module.exports: Exporta el modelo para que pueda ser utilizado en otras partes de la aplicación.
// Este archivo define la estructura del inventario en la base de datos y proporciona una interfaz para interactuar con él. 