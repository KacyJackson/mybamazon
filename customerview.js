//install npm packages
var mysql = require('mysql');
var inquirer = require('inquirer');

// mysql connection
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "thenumber1",
	database: "Bamazon_database"
})
 
connection.connect(function(err){
	if (err) throw err;
	console.log("connected as " + connection.threadId);
	begin();
})

// Begin inquirer prompts

console.log("Welcome to the Bamazon Toy Department!");

var begin = function (){
	inquirer.prompt(
	{
		name: "welcome",
		type: "list",
		message: "Would you like to view our current offers?",
		choices: ["YES", "NO"]
	}).then(function(answer) {
		if (answer.welcome.toUpperCase() == "YES"){
			ourOffers();
		}
		else {
			console.log("See you next time!");
			return;
		}
	})
};

var ourOffers = function (){

connection.query("SELECT * FROM toyproducts", function(err, res) {
   	if(err) throw err;
    for (var i = 0; i < res.length; i++) {

 //Show the current offers to customer
        console.log(res[i].ItemID + " | " + res[i].ProductName + " | " + "$" + res[i].Price);
    }
    console.log("-----------------------------------");
    console.log("-----------------------------------");
    console.log("-----------------------------------");
    
//Function to show next question
    nextQuestion();
})
};

//Prompt questions to find out customer order
var nextQuestion = function (){
	inquirer.prompt([
	{
		name: "productid",
		type: "list",
		message: "Please use your arrow key to select the item you would like to order:",
		choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
	},	
	{
		name: "productunits",
		type: "input",
		message: "How many would you like to order?",
		validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }
	}]).then(function(answer) {
		console.log("-----------ORDER SUMMARY------------------------");

//Run function to check amount			
			getQuantity(answer);
	})
};

//Compare order number to inventory

var getQuantity = function(answer) {
	console.log("Your order is being placed...");
	var check = 'SELECT StockQuanitiy, Price FROM toyproducts WHERE itemID =?';
	var compare = answer.productid;

		connection.query(check, compare, function(err, result) {
			if (result[0].StockQuanitiy < answer.productunits) {
				console.log("Your order amount cannot be placed.  Please select a different quantity.");
				nextquestion(1);
			}
			else {

// calculate the total by pulling the price and multiple by product wanted	
				var orderTotal = answer.productunits * result[0].price;
				var newQuantity = result[0].StockQuanitiy-answer.quantity;
				
				console.log("Total Cost: $" + orderTotal);

				connection.query("UPDATE `toyproducts` SET StockQuanitiy = (StockQuanitiy - ?) WHERE id = ?;", [answer.productunits, answer.productid], function(err, res){
					
						console.log("Your order had been processed at $" + total);
					});
				
				}
		});

	
			setTimeout(function(){
				console.log("Thanks for shopping with us!");
			},3000);
	
	
};


	

	






