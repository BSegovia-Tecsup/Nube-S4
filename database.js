const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'user',
  password: 'userpassword',
  database: 'mydb',
  connectionLimit: 5
});

module.exports = pool;
