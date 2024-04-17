const mysql = require('mysql');

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'go',
        database: 'appdb'
    });

connection.connect(
    async(err)=>
    {
        if(err)
        {
            console.error('Error connecting to database:', err);
            return;
        }
        console.log('Connected to MySQL database');
    });

module.exports = connection;