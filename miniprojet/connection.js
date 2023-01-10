const {Client} = require('pg');
 
const client = new Client({
    host: 'localhost',
    user: 'terryvilver',
    port: 5432,
    password: 'root',
    database: 'contactsdb'
});

module.exports = client;
