var mysql = require("mysql2");

var connection = mysql.createConnection({ 
    host: "localhost", //127.0.0.1
    //host: "Mysql", //127.0.0.1

    port: 3306, 

    user: "root",

    password: "root",
    database: "bamazon1_db"
});

connection.connect(function(err)  {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM bamazon1", function(err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    })
}