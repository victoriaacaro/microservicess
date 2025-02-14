// Importa la librería express para crear la aplicación
const express = require('express');

// Importa la librería mongoose para interactuar con MongoDB
const mongoose = require('mongoose');

// Importa las rutas de inventario desde el archivo inventoryRoutes
const inventoryRoutes = require('./routes/inventoryRoutes');

// Crea una instancia de la aplicación express
const app = express();

// Define el puerto en el que correrá el servidor, usando una variable de entorno o el puerto 3004 por defecto
const PORT = process.env.PORT || 3004;

// Conecta a la base de datos MongoDB usando la URI proporcionada en la variable de entorno MONGO_URI
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB')) // Si la conexión es exitosa, muestra un mensaje en la consola
    .catch(err => console.error('Could not connect to MongoDB', err)); // Si hay un error, muestra el error en la consola

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Monta las rutas de inventario en la ruta base /api/inventory
app.use('/api/inventory', inventoryRoutes);

// Inicia el servidor y lo hace escuchar en el puerto definido
app.listen(PORT, () => {
    console.log(`Inventory Service running on port ${PORT}`);
});


// express: Se utiliza para crear la aplicación web y manejar solicitudes HTTP.
// mongoose: Se utiliza para conectarse a MongoDB y realizar operaciones en la base de datos.
// inventoryRoutes: Contiene las rutas relacionadas con el inventario.
// mongoose.connect: Conecta a la base de datos MongoDB usando la URI proporcionada en la variable de entorno MONGO_URI.
// app.use(express.json()): Permite que la aplicación parseé el cuerpo de las solicitudes en formato JSON.
// app.use('/api/inventory', inventoryRoutes): Monta las rutas de inventario en la ruta base /api/inventory.
// app.listen: Inicia el servidor y lo hace escuchar en el puerto definido (3004 por defecto).

// Este archivo es el punto de entrada del microservicio de inventario 
// y configura la aplicación para manejar solicitudes relacionadas con el inventario. 