// Importa el modelo de Producto desde la carpeta models
const Product = require('../models/Product');

// Función para obtener todos los productos
const getProducts = async (req, res) => {
    // Busca todos los productos en la base de datos usando el modelo Product
    const products = await Product.find();
    
    // Devuelve la lista de productos en formato JSON como respuesta
    res.json(products);
};

// Función para obtener un producto por su ID
const getProductById = async (req, res) => {
    // Busca un producto en la base de datos usando el ID proporcionado en los parámetros de la solicitud (req.params.id)
    const product = await Product.findById(req.params.id);
    
    // Devuelve el producto encontrado en formato JSON como respuesta
    res.json(product);
};

// Función para crear un nuevo producto
const createProduct = async (req, res) => {
    // Crea una nueva instancia del modelo Product con los datos proporcionados en el cuerpo de la solicitud (req.body)
    const product = new Product(req.body);
    
    // Guarda el nuevo producto en la base de datos
    await product.save();
    
    // Devuelve el producto creado en formato JSON con un código de estado 201 (Created)
    res.status(201).json(product);
};

// Exporta las funciones para que puedan ser utilizadas en otras partes de la aplicación (por ejemplo, en las rutas)
module.exports = {
    getProducts,
    getProductById,
    createProduct
};

// getProducts: Obtiene todos los productos.
// getProductById: Obtiene un producto por su ID.
// createProduct: Crea un nuevo producto.
// module.exports: Exporta las funciones para que puedan ser usadas en las rutas.
// Este controlador es una parte clave del microservicio de catálogo, ya que maneja las operaciones 
// básicas relacionadas con los productos. 