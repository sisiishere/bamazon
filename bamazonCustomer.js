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
    runSearch();
});
  
  function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What department id do you prefer?",
        choices: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "1":
          item_id();
          break;
  
        case "2":
          item_id();
          break;
  
        case "3":
          item_id();
          break;
  
        case "4":
          item_id();
          break;
  
        case "5":
          item_id();
          break;

        case "6":
        item_id();
        break;

        case "7":
        item_id();
        break;

        case "8":
        item_id();
        break;
        
        case "9":
        item_id();
        break;

        case "10":
        item_id();

        }
      });
  }
  
  function item_id() {
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
  
  
  