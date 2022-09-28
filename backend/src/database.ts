import mysql from 'mysql2';
import keys from './keys';

const pool = mysql.createConnection(keys.database);

pool.connect(function(err) {
    if (err) throw err;
    console.log("DB is connected");
  });

export default pool;
//Creamos conexion a la DB 
/*const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is Connected');
    });

export default pool;*/