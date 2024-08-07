const mysql = require('mysql2');


const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "react news app"
})


conn.connect((error) => {
    if (error) {
        console.log("error", error);
    } else {
        console.log("successfully connected");
    }
})


module.exports = conn;