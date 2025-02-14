// Importa el modelo Purchase desde la carpeta models
const Purchase = require('../models/Purchase');

// Función para obtener todas las compras
const getPurchases = async (req, res) => {
    // Busca todas las compras en la base de datos usando el modelo Purchase
    const purchases = await Purchase.find();
    
    // Devuelve la lista de compras en formato JSON como respuesta
    res.json(purchases);
};

// Función para crear una nueva compra
const createPurchase = async (req, res) => {
    // Extrae userId, productId y quantity del cuerpo de la solicitud
    const { userId, productId, quantity } = req.body;
    
    // Crea una nueva instancia del modelo Purchase con los datos proporcionados
    const purchase = new Purchase({ userId, productId, quantity });
    
    // Guarda la nueva compra en la base de datos
    await purchase.save();
    
    // Devuelve la compra creada en formato JSON con un código de estado 201 (Created)
    res.status(201).json(purchase);
};

// Función para compensar (eliminar) una compra
const compensatePurchase = async (req, res) => {
    // Extrae userId y productId del cuerpo de la solicitud
    const { userId, productId } = req.body;
    
    // Elimina la compra que coincida con el userId y productId proporcionados
    await Purchase.deleteOne({ userId, productId });
    
    // Devuelve un mensaje de éxito en formato JSON con un código de estado 200 (OK)
    res.status(200).json({ message: 'Purchase compensation completed' });
};

// Exporta las funciones para que puedan ser utilizadas en otras partes de la aplicación (por ejemplo, en las rutas)
module.exports = {
    getPurchases,
    createPurchase,
    compensatePurchase
};


// getPurchases: Obtiene todas las compras de la base de datos y las devuelve en formato JSON.
// createPurchase: Crea una nueva compra en la base de datos con los datos proporcionados
//  en el cuerpo de la solicitud y devuelve la compra creada.
// compensatePurchase: Elimina una compra específica de la base de datos (compensación) y devuelve un mensaje de éxito.
// module.exports: Exporta las funciones para que puedan ser utilizadas en las rutas.
// Este controlador maneja las operaciones relacionadas con las compras en el microservicio de compras.