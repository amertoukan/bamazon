require('dotenv').config();

var mysql = require ('mysql');
var inquirer = require ('inquirer');
var connection = mysql.createConnection(
    {
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
    });


function validateInput(value){
    var integer = Number.isInteger(parseFloat(value));
    var sign = Math.sign(value);

    if (integer && (sign == 1)){
        return true;
    } else {
        return 'Please enter a whole number.';
    }
}

function inquire(){
    inquirer.prompt([
    {
        name: 'item_id',
        type: 'input',
        message: 'Please enter the item ID of the item you would like to purchase.',
        validate: validateInput, 
        filter: Number
        },
        {
        name : "quantity",
        type: 'input',
        message: 'Please enter the quantity.',
        validate: validateInput, 
        filter: Number
        }
    ]).then (function(answer){
        var quantity = answer.quantity;
        var item = answer.item_id;

        //query db to confirm the given item exists in the desired quantity
        var queryStr = 'SELECT * FROM products WHERE ?';
        connection.query(queryStr, {item_id: item}, function (err, res){
        if (err) throw err; 
        if (res.length === 0){
            console.log('ERROR: please enter a valid item ID');
        } else {
            var productData = res[0];

            //If Product is available
    if (quantity <= productData.stock_qty){
        console.log('Good news, your product is in stock! Placing order ...');
var qty = productData.stock_qty - quantity;  
var updateStock = 'UPDATE products SET stock_qty = ' + qty+ ' WHERE item_id= ' +item ;

 connection.query(updateStock, {stock_qty:qty} , function(err, res){
        if (err) throw err; 
        var total = productData.price * quantity;
        
        console.log('Your order has been placed, Your total is ');
        console.log(total);
        console.log('Thank you for shopping with us! See you soon');

        // //END CONNECTION
         connection.end();
    });
    } else {
        console.log('Sorry, seems like the product your trying to order is running low on stock.');
        console.log('This means we will not be able to fulfill your order with the quantity requested. Please try again with a different quantity');

        store();
    }
        }
        });
    });
}

function store(){
    queryString = 'SELECT item_id, product_name, dept_name, price FROM products';
connection.query(queryString, function (err,res){
   if(err) throw err; 

   console.log('\n\nWELCOME TO BAMAZON!! HERE IS OUR INVENTORY LIST: ');
   console.log('---------------------------------------\n\n');

   var strOut = '';

   for (var i = 0; i < res.length ; i++){
    console.log("\n\nProduct ID: " + res[i].item_id + "\nProduct : " + res[i].product_name + "\nDepartment: " + res[i].dept_name + "\nPrice: " + res[i].price + '\n\n-----------------------------' );
    }
    console.log ('----------------------------------------\n\n');
    inquire();
});
}



store();
