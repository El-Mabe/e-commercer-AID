const { Pool } = require('pg');

    const pool = new Pool({
        host: 'localhost',
        port: 5432,
        user: 'jmabesoy',
        password:'',
        database: 'e-commerce'
    });


module.exports = pool;