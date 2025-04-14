const pool = require('./database');
const { faker } = require('@faker-js/faker'); // Asegúrate de importar correctamente

async function generateData() {
  try {
    const conn = await pool.getConnection();

    // Generar datos aleatorios para clientes
    for (let i = 0; i < 20; i++) {
      const nombre = faker.person.fullName();  // Cambiado de faker.name.findName()
      const email = faker.internet.email();
      await conn.query('INSERT INTO clientes (nombre, email) VALUES (?, ?)', [nombre, email]);
    }

    // Generar datos aleatorios para productos
    for (let i = 0; i < 20; i++) {
      const nombre = faker.commerce.productName();
      const precio = faker.commerce.price();
      await conn.query('INSERT INTO productos (nombre, precio) VALUES (?, ?)', [nombre, precio]);
    }

    console.log('Datos generados correctamente');
  } catch (err) {
    console.error('Error generando los datos:', err);
  } finally {
    pool.end();
  }
}

generateData();

