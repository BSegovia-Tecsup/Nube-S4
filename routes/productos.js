const express = require('express');
const pool = require('../database');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM productos');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
});

module.exports = router;

