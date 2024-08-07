const mysql = require('mysql2');


const conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})


conn.connect((error) => {
    if (error) {
        console.log("Error connecting to the database:", error);
        process.exit(1);
    } else {
        console.log("successfully connected");
    }
})


conn.on('error', (err) => {
    console.error('Database connection error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        // Reconnect on connection loss
        reconnect();
    } else {
        // Exit on other errors
        process.exit(1);
    }
});

const reconnect = () => {
    console.log('Attempting to reconnect to the database...');
    conn.connect((err) => {
        if (err) {
            console.error('Error reconnecting to the database:', err);
            setTimeout(reconnect, 2000); // Retry connection after 2 seconds
        } else {
            console.log('Successfully reconnected to the database');
        }
    });
};


module.exports = conn;