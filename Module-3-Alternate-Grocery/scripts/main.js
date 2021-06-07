
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

function valueCombiner(){
	s1 = document.getElementById("check_1");
	s2 = document.getElementById("check_2");
	s3 = document.getElementById("check_3");

	abc="Lactose_Intolerance_Nut_Allergy_Organic"
	ab="Lactose_Intolerance_Nut_Allergy"
	ac="Lactose_Intolerance_Organic"
	bc="Nut_Allergy_Organic"
	
	if(s1.checked && s2.checked && s3.checked){
		return abc
	}else if(s1.checked && s2.checked){
		return ab
	}else if(s1.checked && s3.checked){
		return ac
	}else if(s2.checked && s3.checked){
		return bc
	}else if (s1.checked){
		return s1.value;
	}else if (s2.checked){
		return s2.value;
	}else if (s3.checked){
		return s3.value;
	}else{
		return "None"
	}
}
	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	var val = valueCombiner();
	//s1.value

	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, val);
	var optionArrayPrices = restrictListPrices(products, val);
	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		var productPrice = optionArrayPrices[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		checkbox.value2 = productPrice;
		checkbox.setAttribute("onchange","selectedItems()");
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);
		
		//create a text for the price
		var label2 = document.createElement('label')
		label2.htmlFor = productPrice;
		label2.appendChild(document.createTextNode(", price: $"+productPrice));
		s2.appendChild(label2);

		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	var btn = [];

	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createTextNode(", price: $"+ele[i].value2));
			//para.appendChild(document.createTextNode(getPriceByName(ele[i].value)));  
			btn[i] = document.createElement("BUTTON");    
			btn[i].innerHTML = "X"; // Insert text
			btn[i].value2=ele[i].value;
			btn[i].setAttribute("value",(ele[i].value).toString());
			btn[i].id="btn"+i.toString();
			btn[i].setAttribute("onclick","unClick(this.value)");     
			para.appendChild(btn[i]);  
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));
		
}

function unClick(thingy){
	var ele = document.getElementsByName("product");
	//alert("hi "+ele[i].checked);
	//var ele2 = document.getElementById("tab2");
	//var ele3 = document.getElementById("tab3");
	for (let i=0; i<ele.length; i+=1) {
		//alert("hi "+thingy);
		//alert("hi "+ele[i].value);
		if (thingy==ele[i].value){
			//ele2.click();
			//alert("hi "+ele[i].checked);
			ele[i].click();
			//ele3.click;
		}
	}
	selectedItems();
}

function clickAll(){
	var ele = document.getElementsByName("product");
	//alert("hi "+ele[i].checked);
	//var ele2 = document.getElementById("tab2");
	//var ele3 = document.getElementById("tab3");
	for (let i=0; i<ele.length; i+=1) {
		if(ele[i].checked==false){

			ele[i].checked = true;
		}
	}
	selectedItems();
}