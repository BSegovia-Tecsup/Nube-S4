const express = require('express');
const app = express();
const path = require('path');

// Importar las rutas
const clientesRoutes = require('./routes/clientes');
const productosRoutes = require('./routes/productos');

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Usar las rutas
app.use('/clientes', clientesRoutes);
app.use('/productos', productosRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
