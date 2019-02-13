var mysql = require("mysql");
var inquirer = require('inquirer')

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Gingeraw@1",
    database: "bamazondb"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

function start() {
    //prints the items for sale and their details
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;

        console.log('Welcome to Bamazon lol!!!!!')
        console.log('----------------------------------------------------------------------------------------------------')

        for (var i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity);
            console.log('--------------------------------------------------------------------------------------------------')
        }

        inquiryItems(res);
    })

};

function inquiryItems(res) {

    inquirer.prompt([
        {
            name: "product",
            type: "list",
            choices: function () {
                var choiceArray = [];
                for (var i = 0; i < res.length; i++) {
                    choiceArray.push(res[i].product_name);
                }
                return choiceArray;
            },
            message: "What product would you like to purchase?"
        },
        {
            name: "amount",
            type: "input",
            message: "How many would you like to purchase?"
        }
    ]).then(function (answer) {
        var chosenProduct;
        for (var i = 0; i < res.length; i++) {
            if (res[i].product_name === answer.product) {
                chosenProduct = res[i];
            }
        }

        if (chosenProduct.stock_quantity > parseInt(answer.amount)) {
            connection.query("UPDATE products SET ? WHERE ?", [
                {
                    stock_quantity: chosenProduct.stock_quantity - parseInt(answer.amount)
                },
                {
                    id: chosenProduct.id
                }], function (error) {
                    if (error) throw err;
                    console.log("\n\n");
                    console.log("==============================================");
                    console.log("Product purchased successfully!");
                    console.log("==============================================");
                    console.log("Purchase Summary");
                    console.log("-----------------------------");
                    console.log("Item Name: " + chosenProduct.product_name);
                    console.log("Item Count: " + parseInt(answer.amount));
                    console.log("-----------------------------");
                    console.log("Total: " + "$" + (chosenProduct.price * parseInt(answer.amount)));
                    console.log("==============================================");
                    console.log("\n\n");
                    start();             
                })
        } else {
            console.log("==============================================");
            console.log("Insufficient stock.");
            console.log("==============================================");
            start();  
        }
    });

};


start();