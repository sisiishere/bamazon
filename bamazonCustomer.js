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
};

var inquirer = function() {
    // if the length of the team array is 5 or higher, no more questions will be asked
      inquirer.prompt([
        {
          item_id: "ID #",
          message: "What is the item's ID?: ",
          message: "Quantity of the product: ",
          validate: function(bamazon1_stock) {
            if (quantity >= bamazon1_stock) {
              true;
              console.log("Good to go! Buy 'em!");
            }
            else {
            false;
            console.log("Insufficiency. Decrease the amount.")
            }
          }}])}