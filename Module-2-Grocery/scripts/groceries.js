	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		lactose: false,
		nut: false,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		lactose: false,
		nut: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		lactose: false,
		nut: false,
		organic: true,
		price: 10.00
	},
	{
		name: "truffle",
		vegetarian: false,
		glutenFree: true,
		lactose: false,
		nut: false,
		organic: true,
		price: 30.00
	},
	{
		name: "peanuts",
		vegetarian: false,
		glutenFree: true,
		lactose: false,
		nut: true,
		organic: true,
		price: 2.65
	},
	{
		name: "assorted nuts",
		vegetarian: false,
		glutenFree: true,
		lactose: false,
		nut: true,
		organic: true,
		price: 3.00
	},
	{
		name: "almonds",
		vegetarian: false,
		glutenFree: true,
		lactose: false,
		nut: true,
		organic: true,
		price: 5.00
	},
	{
		name: "milk",
		vegetarian: false,
		glutenFree: true,
		lactose: true,
		nut: false,
		organic: true,
		price: 3.90
	},
	{
		name: "cheese",
		vegetarian: false,
		glutenFree: true,
		lactose: true,
		nut: false,
		organic: false,
		price: 3.10
	},
	{
		name: "yogurt",
		vegetarian: false,
		glutenFree: true,
		lactose: true,
		nut: false,
		organic: false,
		price: 3.95
	}
];
	
//This code is from stack overflow https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
function comparePrice( a, b ) {
	if ( a.price < b.price ){
	  return -1;
	}
	if ( a.price > b.price ){
	  return 1;
	}
	return 0;
}

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	prods.sort( comparePrice );

	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Lactose_Intolerance") && (prods[i].lactose == false)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Nut_Allergy") && (prods[i].nut == false)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Lactose_Intolerance_Nut_Allergy") && (prods[i].lactose == false) && (prods[i].nut == false)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Lactose_Intolerance_Organic") && (prods[i].lactose == false) && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Nut_Allergy_Organic") && (prods[i].nut == false) && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Lactose_Intolerance_Nut_Allergy_Organic") && (prods[i].lactose == false) && (prods[i].organic == true) && (prods[i].nut == false)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None" || restriction==""){
			product_names.push(prods[i].name);
		}
	}
		
	// <option value="Lactose_Intolerance">Lactose Intolerance  </option>
	// <option value="Nut_Allergy">Nut Allergy  </option>
	// <option value="Organic">Organic  </option>
	// <option value="Lactose_Intolerance_Nut_Allergy">Lactose Intolerance and Nut Allergy </option>
	// <option value="Lactose_Intolerance_Organic">Lactose Intolerance and Organic </option>
	// <option value="Nut_Allergy_Organic">Nut Allergy and Organic </option>
	// <option value="Lactose_Intolerance_Nut_Allergy_Organic">Lactose Intolerance, Nut Allergy, and Organic </option>
	// <option value="None">None</option>
	// +", price: $"+prods[i].price
	
	return product_names;
}
//product_prices.push(prods[i].price);
function restrictListPrices(prods, restriction) {
	//prods.sort( comparePrice );
	let product_prices = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Lactose_Intolerance") && (prods[i].lactose == false)){
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "Nut_Allergy") && (prods[i].nut == false)){
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "Lactose_Intolerance_Nut_Allergy") && (prods[i].lactose == false) && (prods[i].nut == false)){
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "Lactose_Intolerance_Organic") && (prods[i].lactose == false) && (prods[i].organic == true)){
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "Nut_Allergy_Organic") && (prods[i].nut == false) && (prods[i].organic == true)){
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "Lactose_Intolerance_Nut_Allergy_Organic") && (prods[i].lactose == false) && (prods[i].organic == true) && (prods[i].nut == false)){
			product_prices.push(prods[i].price);
		}
		else if (restriction == "None" || restriction==""){
			product_prices.push(prods[i].price);
		}
	}
		
	// <option value="Lactose_Intolerance">Lactose Intolerance  </option>
	// <option value="Nut_Allergy">Nut Allergy  </option>
	// <option value="Organic">Organic  </option>
	// <option value="Lactose_Intolerance_Nut_Allergy">Lactose Intolerance and Nut Allergy </option>
	// <option value="Lactose_Intolerance_Organic">Lactose Intolerance and Organic </option>
	// <option value="Nut_Allergy_Organic">Nut Allergy and Organic </option>
	// <option value="Lactose_Intolerance_Nut_Allergy_Organic">Lactose Intolerance, Nut Allergy, and Organic </option>
	// <option value="None">None</option>
	// +", price: $"+prods[i].price
	
	return product_prices;
}
// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return Number(totalPrice).toFixed(2);
}

function getPriceByName(name){
	let i = products.indexOf(name);
	return products[i].price;
}