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

//function runSearch();//
  function runSearch() {
    inquirer
      .prompt({
        name: "product",
        type: "input",
        message: "What product are you searching for?"
      })
      .then(function(answer) {
        var query = "SELECT item_id, product, department, stock, price FROM products GROUP BY item_id = ' ' ";
       //var query = "SELECT * FROM products" 
       connection.query(query, {product: answer.item_id}, function(err, res){
          if (err) throw err; 
          for (var i = 0; i < res.length; i++) {
            console.log(res[0]);
            console.log("item_id: " + res[i].item_id + " || Product: " + res[i].product + " || Department: " + res[i].department + " || Stock: " + res[i].stock + " || Price: " + res[i].price);
           qtySearch();
          }
          });
      })
  }
  
  function qtySearch() { 
    inquirer
      .prompt({
        name: "quantity",
        type: "input",
        message: "How many quantities would you like to buy per item?"
      })
      .then(function(answer) {
        var query = "SELECT stock, price FROM products WHERE stock";
        connection.query(query, {stock: answer.quantity}, function(err, res) {
        console.log(answer.quantity, res[0].stock)
          if (answer.quantity < res[0].stock) {
              console.log(res[0]);
              console.log("Your total is.." + res[0].price * answer.quantity + " , Have a swell day!");
          }
           else {
                  console.log(res[0]);
                  console.log("The ultimate INSUFFICIENCY of it all!");
        };
        });
      });
  }
  

  
  
