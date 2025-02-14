const Product = require('../models/Product');

// Obtener todos los productos
const getProducts = async (req, res) => {
    const products = await Product.find(); // Usa el modelo Product para buscar todos los productos
    res.json(products);
};

// Crear un nuevo producto
const createProduct = async (req, res) => {
    const product = new Product(req.body); // Crea una nueva instancia del modelo Product
    await product.save(); // Guarda el nuevo producto en la base de datos
    res.status(201).json(product);
};

// mongoose.Schema: Define la estructura de los documentos en MongoDB.
// Campos del esquema:
// name: Nombre del producto.
// description: Descripción del producto.
// price: Precio del producto.
// stock: Cantidad disponible en el inventario.
// mongoose.model: Crea un modelo que permite interactuar con la colección de productos en la base de datos.
// module.exports: Exporta el modelo para que pueda ser utilizado en otras partes de la aplicación.

// Este archivo es fundamental para el microservicio de catálogo, ya que define la estructura de los productos 
// y proporciona una interfaz para interactuar con la base de datos. 