var x = 1;

function duplicate(a) {

	if(counter < 4)
		counter++;

	var maxFields = 5;
	var wrapper = $(".inventory");
	var option;
	var id;
	var opt;
	var y = x + 1;

	if(x < maxFields){
		$(wrapper).append('<tr><td><h4>Order #'+y+'</h5></td></tr></tr><tr class="inventoryInput"><td align="right"><label class="block"'+
			' for="Category">Category:</label></td><h1>Hello<h1><td align="left"><select name="category'+x+'"'+' id="category'+x+'"'+'><option value=""'+
			' selected="" disabled="">Choose Category</option>'+'</select></td></tr>'+
			'<tr class="inventoryInput"><td align="right"><label class="block" for="Part">Part #:</label></td> '+
			'<td align="left"><select name="part'+x+'"'+' id="part'+x+'"'+'><option value="" selected="" disabled="">Choose Part #</option></select></td></tr>'+
			'<tr class="inventoryInput"><td align="right"><label class="block" for="Product">Product:</label></td><td align="left">'+
			'<select name="product'+x+'"'+' id="product'+x+'"'+'><option value="" selected="" disabled="">Choose Product</option></select></td></tr>'+
			'<tr class="inventoryInput"><td align="right"><label class="block" for="Price">Price:</label></td><td align="left">'+
			'<input value="0" placeholder="0" id="price'+x+'"'+' style="background-color: #CDCDCD" type="number" name="price" readonly="true" /></td></tr>'+
			'<tr class="inventoryInput"><td align="right"><label class="block" for="Quantity">Quantity:</label></td><td '+
			' align="left"><input placeholder="0" id="quantity'+x+'"'+' type="number" name="quantity"/></td></tr>');

		for(var i = 0; i < a.length; i++){
			opt = '<option value="category"'+ x +'>'+ a[i].Category + '</option>';
			option = document.createElement('option');
			option.setAttribute('value', a[i].Category);
			option.appendChild(document.createTextNode(a[i].Category));
			id = "category"+ x;
			document.getElementById(id).appendChild(option);
		}
		x++;
		y++;
	}

	else
		Swal.fire({text: "Reached maximum amount of Orders", icon: "warning"});
}

function multiply(a, b){
	return a * b;
}

function clearAllFields(){
	document.getElementById('category').value = '';
	document.getElementById('part').value = '';
	document.getElementById('product').value = '';
	document.getElementById('price').value = '';
	document.getElementById('quantity').value = '';
	document.getElementById('subtotal').value = '';
	document.getElementById('discountvalue').value = '';
	document.getElementById('totalbeforetax').value = '';
	document.getElementById('totalafterdiscount').value = '';
	document.getElementById('taxprice').value = '';
	document.getElementById('totalprice').value = '';

	if(counter === 1 || counter === 2 || counter === 3 || counter === 4){
		document.getElementById('category1').value = '';
		document.getElementById('part1').value = '';
		document.getElementById('product1').value = '';
		document.getElementById('price1').value = '';
		document.getElementById('quantity1').value = '';
	}

	if(counter === 2 || counter === 3 || counter === 4){
		document.getElementById('category2').value = '';
		document.getElementById('part2').value = '';
		document.getElementById('product2').value = '';
		document.getElementById('price2').value = '';
		document.getElementById('quantity2').value = '';
	}

	if(counter === 3 || counter === 4){
		document.getElementById('category3').value = '';
		document.getElementById('part3').value = '';
		document.getElementById('product3').value = '';
		document.getElementById('price3').value = '';
		document.getElementById('quantity3').value = '';
	}

	if(counter === 4){
		document.getElementById('category4').value = '';
		document.getElementById('part4').value = '';
		document.getElementById('product4').value = '';
		document.getElementById('price4').value = '';
		document.getElementById('quantity4').value = '';
	}
}

function clearFields(a){
	switch (a){
		case 0:
		document.getElementById('product').value = '';
		document.getElementById('price').value = '';
		document.getElementById('quantity').value = '';
		document.getElementById('subtotal').value = '';
		document.getElementById('discountvalue').value = '';
		document.getElementById('totalbeforetax').value = '';
		document.getElementById('totalafterdiscount').value = '';
		document.getElementById('taxprice').value = '';
		document.getElementById('totalprice').value = '';
		break;

		case 1:
		document.getElementById('price').value = '';
		document.getElementById('quantity').value = '';
		document.getElementById('subtotal').value = '';
		document.getElementById('discountvalue').value = '';
		document.getElementById('totalbeforetax').value = '';
		document.getElementById('totalafterdiscount').value = '';
		document.getElementById('taxprice').value = '';
		document.getElementById('totalprice').value = '';
		break;

		case 2:
		document.getElementById('totalbeforetax').value = '';
		document.getElementById('totalafterdiscount').value = '';
		document.getElementById('taxprice').value = '';
		document.getElementById('totalprice').value = '';
		break;

		case 3:
		document.getElementById('discountvalue').value = '';
		document.getElementById('totalbeforetax').value = '';
		document.getElementById('totalafterdiscount').value = '';
		document.getElementById('taxprice').value = '';
		document.getElementById('totalprice').value = '';
		break;

		case 4:
		document.getElementById('price1').value = '';
		document.getElementById('quantity1').value = '';
		break;

		case 5:
		document.getElementById('price2').value = '';
		document.getElementById('quantity2').value = '';
		break;

		case 6:
		document.getElementById('price3').value = '';
		document.getElementById('quantity3').value = '';
		break;

		case 7:
		document.getElementById('price4').value = '';
		document.getElementById('quantity4').value = '';
		break;
	}
}

	function percentageCalc(a, b){
		return a * ((100 - b) / 100);
	}

	function parseElement(a){
		return parseFloat(document.getElementById(a).value);
	}

	function parseElementToInteger(a){
		return parseInt(document.getElementById(a).value);
	}

	function retrieveValue(a){
		return document.getElementById(a).value;
	}

	function validateForm(a, b, c, d, e){
		flag = false;

		if(a === '0')
			Swal.fire({text: "Sub-Total is required", icon: "error"});

		if(b === 'default')
			Swal.fire({text: "Payment Type is required", icon: "error"});

		if(c === '0')
			Swal.fire({text: "Total Price is required", icon: "error"});
	

		if(d === 'default')
			Swal.fire({text: "Customer is required", icon: "error"});
	

		if(e === 'default')
			Swal.fire({text: "Product Pricing is required", icon: "error"});

		else
			flag = true;

		return flag;
	}


	function categoryHandler(cat, elem){
		var part = '#part';

		if(cat === '#category')
			clearFields(0);
		
		else if(cat === '#category1'){
			clearFields(4);
			part += '1';
		}
		else if (cat === '#category2'){
			clearFields(5);
			part += '2';
		}
		else if(cat === '#category3'){
			clearFields(6);
			part += '3';
		}
		else if(cat === '#category4'){
			clearFields(7);
			part += '4';
		}

		var category_id = $(elem).val();
		$.ajax({
				url:"http://localhost/POS%20App/ajaxData.php",
				type:"POST",
				data: {'categoryID':category_id},
				success: function(result){
					$(part).html(result);
				},
				error: function(data) {
				alert(data);
				}
		});
	}


	function partHandler(part, elem){
		var product = '#product';

		if(part === '#part')
			clearFields(1);
		
		else if(part === '#part1'){
			clearFields(4);
			product += '1';
		}
		else if (part === '#part2'){
			clearFields(5);
			product += '2';
		}
		else if(part === '#part3'){
			clearFields(6);
			product += '3';
		}
		else if(part === '#part4'){
			clearFields(7);
			product += '4';
		}

		var part_id = $(elem).val();
			$.ajax({
					url:"http://localhost/POS%20App/ajaxData.php",
					type:"POST",
					data: {'partID':part_id},
					success: function(result){
						$(product).html(result);
					}
			});
	}


	function productHandler(a, elem){
		var is_retail;
		var price = '#price';
		var quantity = '#quantity';

		if(a === 0){

		}
		else if(a === 1){
			price += '1'
			quantity += '1';
		}
		else if (a === 2){
			price += '2'
			quantity += '2';
		}
		else if(a === 3){
			price += '3'
			quantity += '3';
		}
		else if(a === 4){
			price += '4'
			quantity += '4';
		}

		if(document.getElementById('productpricing').value != 'retail' && document.getElementById('productpricing').value != 'wholesale')
			Swal.fire({text: "Select a Product Pricing", icon: "error"});

		else{
			if(document.getElementById('productpricing').value == 'retail')
				is_retail = true;

			else if(document.getElementById('productpricing').value == 'wholesale')
				is_retail = false;

			var product_id = $(elem).val();
			$.ajax({
					url:"http://localhost/POS%20App/ajaxData.php",
					type:"POST",
					data: {'productID':product_id, 'isRetail':is_retail},
					success: function(result){
						var results = result.split('#');
						$(price).val(results[0]);
						$(quantity).val(results[1]);

						updatePriceQuantity(a, results[0], results[1]);
						productSubtotalCalculator(a, results[0], results[1]);
						updateTotals();

					}
			});
		}

	}

	function quantityHandler(a){
		if(a === 0)
			document.getElementById('subtotal').value = (parseElement('price') * parseElement('quantity')).toFixed(2);

		else if(a === 1)
			document.getElementById('subtotal').value = (parseElement('price') * parseElement('quantity') + 
			parseElement('price1') * parseElement('quantity1')).toFixed(2);

		else if(a === 2)
			document.getElementById('subtotal').value = (parseElement('price') * parseElement('quantity') +
			parseElement('price1') * parseElement('quantity1') + parseElement('price2') * parseElement('quantity2')).toFixed(2);

		else if(a === 3)
			document.getElementById('subtotal').value = (parseElement('price') * parseElement('quantity') +
			parseElement('price1') * parseElement('quantity1') + parseElement('price2') * parseElement('quantity2') +
			parseElement('price3') * parseElement('quantity3')).toFixed(2);

		else if(a === 4)
			document.getElementById('subtotal').value = (parseElement('price') * parseElement('quantity') + 
			parseElement('price1') * parseElement('quantity1') + parseElement('price2') * parseElement('quantity2') + 
			parseElement('price3') * parseElement('quantity3')+ parseElement('price4') * parseElement('quantity4')).toFixed(2);



		if(parseElement('discountvalue') === 0 || typeof(parseElement('discountvalue')) == 'undefined' || parseElement('discountvalue') == null || isNaN(parseElement('discountvalue'))){
			document.getElementById('discountvalue').value = 0;
			document.getElementById('totalbeforetax').value = retrieveValue('subtotal');
			document.getElementById('taxprice').value = (retrieveValue('subtotal') * 0.05).toFixed(2);
			document.getElementById('totalprice').value = (parseElement('subtotal') + parseElement('taxprice')).toFixed(2);
		}

		else{

			var s = parseElement('subtotal');
			var d = parseElement('discountvalue');

			document.getElementById('totalafterdiscount').value = percentageCalc(s,d).toFixed(2);

			document.getElementById('totalbeforetax').value = parseElement('totalafterdiscount').toFixed(2);
			document.getElementById('taxprice').value = ((parseElement('GST') * parseElement('totalafterdiscount')) / 100).toFixed(2);
			document.getElementById('totalprice').value = (parseElement('taxprice') + parseElement('totalbeforetax')).toFixed(2); 
		}
	}

	function discountHandler(){
		clearFields(2);
			var types;
			var index;

			types = document.getElementsByName('discounttype');
			flag = false;

			for(i = 0; i < types.length; i++) { 
            	if(types[i].checked === true) {
					flag = true;
					index = i;
				}
       	 	} 

		    if(!flag)
				Swal.fire({text: "Select a Discount Type", icon: "error"});

				if(types[index].value === "%"){
					var discountvalue = parseElement('discountvalue');
					if(parseElement('discountvalue') === 0 || typeof(parseElement('discountvalue')) == 'undefined' || parseElement('discountvalue') == null || isNaN(parseElement('discountvalue')))
						discountvalue = 0;
			
					var temp = percentageCalc(parseElement('subtotal'),discountvalue);
					document.getElementById('totalafterdiscount').value = temp.toFixed(2);
				}

				if(types[index].value === "$"){
					var discountvalue = parseElement('discountvalue');
					if(parseElement('discountvalue') === 0 || typeof(parseElement('discountvalue')) == 'undefined' || parseElement('discountvalue') == null || isNaN(parseElement('discountvalue')))
						discountvalue = 0;
					document.getElementById('totalafterdiscount').value = (parseElement('subtotal') - parseElement('discountvalue')).toFixed(2);
				}

				document.getElementById('totalbeforetax').value = parseElement('totalafterdiscount').toFixed(2);
				document.getElementById('taxprice').value = (parseElement('GST') * parseElement('totalafterdiscount') / 100).toFixed(2);
				document.getElementById('totalprice').value = (parseElement('taxprice') + parseElement('totalbeforetax')).toFixed(2); 
	}

function updateTotals(){
	document.getElementById('totalbeforetax').value = parseElement('subtotal').toFixed(2);
	document.getElementById('taxprice').value = (parseElement('subtotal') * 0.05).toFixed(2);
	document.getElementById('totalprice').value = (parseElement('subtotal') + (parseElement('subtotal') * 0.05)).toFixed(2);
}


function productSubtotalCalculator(a, results1, results2){
	
	//Calculating Sub-Total based on how many orders are being added
	//This if is for the first order
	if(a === 0){
		if(counter === 0)
			document.getElementById('subtotal').value = parseFloat(multiply(results1, results2));
		
		else if(counter === 1)
			document.getElementById('subtotal').value = parseFloat(multiply(results1, results2)) + 
			(document.getElementById('price1').value * document.getElementById('quantity1').value);
		

		else if(counter === 2)
			document.getElementById('subtotal').value = parseFloat(multiply(results1, results2)) + 
			(document.getElementById('price1').value * document.getElementById('quantity1').value) +
			(document.getElementById('price2').value * document.getElementById('quantity2').value);

		else if(counter === 3)
			document.getElementById('subtotal').value = parseFloat(multiply(results1, results2)) + 
			(document.getElementById('price1').value * document.getElementById('quantity1').value) +
			(document.getElementById('price2').value * document.getElementById('quantity2').value) + 
			(document.getElementById('price3').value * document.getElementById('quantity3').value);

		else if(counter === 4)
			document.getElementById('subtotal').value = parseFloat(multiply(results1, results2)) + 
			(document.getElementById('price1').value * document.getElementById('quantity1').value) +
			(document.getElementById('price2').value * document.getElementById('quantity2').value) + 
			(document.getElementById('price3').value * document.getElementById('quantity3').value) + 
			(document.getElementById('price4').value * document.getElementById('quantity4').value);
	}
	
	//This if is for the second order
	else if (a === 1){
		if(counter === 1)
			document.getElementById('subtotal').value = parseFloat(multiply(results1, results2)) + 
			(document.getElementById('price').value * document.getElementById('quantity').value);
							
		else if(counter === 2)
			document.getElementById('subtotal').value = parseFloat(multiply(results1, results2)) + 
			(document.getElementById('price').value * document.getElementById('quantity').value) +
			(document.getElementById('price2').value * document.getElementById('quantity2').value);

		else if(counter === 3)
			document.getElementById('subtotal').value = parseFloat(multiply(results1, results2)) + 
			(document.getElementById('price').value * document.getElementById('quantity').value) +
			(document.getElementById('price2').value * document.getElementById('quantity2').value) + 
			(document.getElementById('price3').value * document.getElementById('quantity3').value);

		else if(counter === 4)
			document.getElementById('subtotal').value = parseFloat(multiply(results1, results2)) + 
			(document.getElementById('price').value * document.getElementById('quantity').value) +
			(document.getElementById('price2').value * document.getElementById('quantity2').value) + 
			(document.getElementById('price3').value * document.getElementById('quantity3').value) + 
			(document.getElementById('price4').value * document.getElementById('quantity4').value);
	}

	//This if is for the third order
	else if(a === 2){
		if(counter === 2)
			document.getElementById('subtotal').value = parseFloat(multiply(results1, results2)) + 
			(document.getElementById('price').value * document.getElementById('quantity').value) +
			(document.getElementById('price1').value * document.getElementById('quantity1').value);

		else if(counter === 3)
			document.getElementById('subtotal').value = parseFloat(multiply(results1, results2)) + 
			(document.getElementById('price').value * document.getElementById('quantity').value) +
			(document.getElementById('price1').value * document.getElementById('quantity1').value) + 
			(document.getElementById('price3').value * document.getElementById('quantity3').value);

		else if(counter === 4)
			document.getElementById('subtotal').value = parseFloat(multiply(results1, results2)) + 
			(document.getElementById('price').value * document.getElementById('quantity').value) +
			(document.getElementById('price1').value * document.getElementById('quantity1').value) + 
			(document.getElementById('price3').value * document.getElementById('quantity3').value) + 
			(document.getElementById('price4').value * document.getElementById('quantity4').value);	
	}

	//This if is for the fourth order
	else if(a === 3){
		if(counter === 3)
			document.getElementById('subtotal').value = parseFloat(multiply(results1, results2)) + 
			(document.getElementById('price').value * document.getElementById('quantity').value) +
			(document.getElementById('price1').value * document.getElementById('quantity1').value) + 
			(document.getElementById('price2').value * document.getElementById('quantity2').value);

		else if(counter === 4)
			document.getElementById('subtotal').value = parseFloat(multiply(results1, results2)) + 
			(document.getElementById('price').value * document.getElementById('quantity').value) +
			(document.getElementById('price1').value * document.getElementById('quantity1').value) + 
			(document.getElementById('price2').value * document.getElementById('quantity2').value) + 
			(document.getElementById('price4').value * document.getElementById('quantity4').value);
	}

	//This if is for the fifth order
	else if(a === 4){
		if(counter === 4)
			document.getElementById('subtotal').value = parseFloat(multiply(results1, results2)) + 
			(document.getElementById('price').value * document.getElementById('quantity').value) +
			(document.getElementById('price1').value * document.getElementById('quantity1').value) + 
			(document.getElementById('price2').value * document.getElementById('quantity2').value) + 
			(document.getElementById('price3').value * document.getElementById('quantity3').value);
	}

}

function updatePriceQuantity(a, results1, results2){
	var price = 'price';
	var quantity = 'quantity';

	if(a === 0){
	}

	if(a === 1){
		price = 'price' + '1';
		quantity = 'quantity' + '1';
	}	

	if(a === 2){
		price = 'price' + '2';
		quantity = 'quantity' + '2';
	}	

	if(a === 3){
		price = 'price' + '3';
		quantity = 'quantity' + '3';
	}	

	if(a === 4){
		price = 'price' + '4';
		quantity = 'quantity' + '4';
	}	

	document.getElementById(price).value = parseFloat(results1);
	document.getElementById(quantity).value = parseFloat(results2);

}