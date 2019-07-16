var mysql = require("mysql2");
var inquirer = require("inquirer");

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
    runSearch();
});
  
  
  
  function runSearch() {
    inquirer
      .prompt({
        name: "product",
        type: "input",
        message: "What product are you searching for?"
      })
      .then(function(answer) {
        var query = "SELECT id, product, department FROM bamazon1 WHERE ?";
        connection.query(query, { prod: answer.prod }, function(err, res) {
          if (err) throw err;
          for (var i = 0; i < res.length; i++) {
            console.log("id: " + res[i].item_id + " || Product: " + res[i].prod + " || Department: " + res[i].dep);
          }
          runSearch();
        });
      });
  }
  
  function runSearch() {
    inquirer
      .prompt({
        name: "quantity",
        type: "input",
        message: "How many quantities would you like to buy per item?"
      })
      .then(function(answer) {
        var query = "SELECT stock, price FROM bamazon1 WHERE ?";
        connection.query(query, function(err, res) {
          if (answer <= stock) {
          for (var i = 0; i < res.length; i++) {
            console.log("Your order has been placed! Have a swell day!");
          }}
          else {
              for (var i = 0; i < res.length; i++) {  
                  console.log("The ultimate INSUFFICIENCY of it all!")
              }
          }
          runSearch();
        });
      });
  }
  
  
  