const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection ({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "diegojoy777",
        database: "burgers_db"
    
    })
}

connection.connect(function(err) {
    if (err) {
        console.error("connected as id" + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadId);
});

module.exports = connection;