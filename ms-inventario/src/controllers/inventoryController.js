// Importa el modelo Inventory desde la carpeta models
const Inventory = require('../models/Inventory');

// Función para obtener todo el inventario
const getInventory = async (req, res) => {
    // Busca todos los registros de inventario en la base de datos usando el modelo Inventory
    const inventory = await Inventory.find();
    
    // Devuelve la lista de inventario en formato JSON como respuesta
    res.json(inventory);
};

// Función para actualizar el inventario (reducir el stock)
const updateInventory = async (req, res) => {
    // Extrae productId y quantity del cuerpo de la solicitud
    const { productId, quantity } = req.body;
    
    // Busca el registro de inventario correspondiente al productId proporcionado
    const inventory = await Inventory.findOne({ productId });

    // Verifica si el inventario existe y si hay suficiente stock
    if (!inventory || inventory.stock < quantity) {
        throw new Error('Insufficient stock'); // Lanza un error si no hay suficiente stock
    }

    // Reduce el stock en la cantidad especificada
    inventory.stock -= quantity;
    
    // Guarda los cambios en la base de datos
    await inventory.save();
    
    // Devuelve el inventario actualizado en formato JSON con un código de estado 201 (Created)
    res.status(201).json(inventory);
};

// Función para compensar el inventario (aumentar el stock)
const compensateInventory = async (req, res) => {
    // Extrae productId y quantity del cuerpo de la solicitud
    const { productId, quantity } = req.body;
    
    // Busca el registro de inventario correspondiente al productId proporcionado
    const inventory = await Inventory.findOne({ productId });

    // Si el inventario existe, aumenta el stock en la cantidad especificada
    if (inventory) {
        inventory.stock += quantity;
        await inventory.save();
    }

    // Devuelve un mensaje de éxito en formato JSON con un código de estado 200 (OK)
    res.status(200).json({ message: 'Inventory compensation completed' });
};

// Exporta las funciones para que puedan ser utilizadas en otras partes de la aplicación (por ejemplo, en las rutas)
module.exports = {
    getInventory,
    updateInventory,
    compensateInventory
};

// getInventory: Obtiene todos los registros de inventario de la base de datos y los devuelve en formato JSON.
// updateInventory: Reduce el stock de un producto en el inventario y devuelve el inventario actualizado.
// compensateInventory: Aumenta el stock de un producto en el inventario (compensación) y devuelve un mensaje de éxito.
// module.exports: Exporta las funciones para que puedan ser utilizadas en las rutas.
// Este controlador maneja las operaciones relacionadas con el inventario en el microservicio de inventario.w