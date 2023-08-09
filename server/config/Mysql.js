const mysql = require('mysql2');

// Tạo kết nối đến cơ sở dữ liệu MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: `Vuong@021219`,
  database: 'thichphims'
});

module.exports = connection;
