<!DOCTYPE html>
<html>
<head>
<title>Point of Sale (POS) Application</title>
<link rel="stylesheet" href="styles.css">
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="script.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<script type="text/javascript"> 
	$(document).ready(function(){
	
		$('#productpricing').change(function(){
			clearAllFields();
		});


        //Categories --------------------------------------------------------------------------------
		$('#category').change(function(){
			categoryHandler('#category', this);
		});

		$(document).on('change', '#category1', function(){
			categoryHandler('#category1', this);
		});

		$(document).on('change', '#category2', function(){
			categoryHandler('#category2', this);
		});

		$(document).on('change', '#category3', function(){
			categoryHandler('#category3',this);
		});

		$(document).on('change', '#category4', function(){
			categoryHandler('#category4', this);
		});
		//End Categories --------------------------------------------------------------------------------


		//Parts ------------------------------------------------------------------------------------------
        $('#part').change(function(){
            partHandler('#part', this);
        });

        $(document).on('change', '#part1', function(){
            partHandler('#part1', this);
        });

        $(document).on('change', '#part2', function(){
            partHandler('#part2', this);
        });

        $(document).on('change', '#part3', function(){
            partHandler('#part3',this);
        });

        $(document).on('change', '#part4', function(){
            partHandler('#part4', this);
        });
		//End Parts---------------------------------------------------------------------------------


        //Products------------------------------------------------------------------------------------------------------------
        $('#product').change(function(){
                productHandler(0, this);
            });

        $(document).on('change', '#product1', function(){
            productHandler(1, this);
        });

        $(document).on('change', '#product2', function(){
            productHandler(2, this);
        });

        $(document).on('change', '#product3', function(){
            productHandler(3, this);
        });

        $(document).on('change', '#product4', function(){
            productHandler(4, this);
        });
		//End Products--------------------------------------------------------------------------------------------------------


        //Quantity -------------------------------------------------------------------------------------------------
		$('#quantity').change(function(){
			quantityHandler(0);
		});

		$(document).on('change', '#quantity1', function(){
			quantityHandler(1);
		});

		$(document).on('change', '#quantity2', function(){
			quantityHandler(2);
		});

		$(document).on('change', '#quantity3', function(){
			quantityHandler(3);
		});

		$(document).on('change', '#quantity4', function(){
			quantityHandler(4);
		});
		//End Quantity-------------------------------------------------------------------------------------------------------------------------------------------

        //Discount Value ---------------------------------------------------------------------------------------------------------------------------------------
		$("#discountvalue").change(function(){
            discountHandler();
		});
        // End Discount Value --------------------------------------------------------------------------------------------------------------------------------

		$('#submit').click(function(){
			var ok = true;
			var order_date = retrieveValue('order-date');
			var customer = retrieveValue('customers');
			var sub_total = retrieveValue('subtotal');
			var payment_type = retrieveValue('paymenttype');
			var product_pricing = retrieveValue('productpricing');
			var category = retrieveValue('category');
			var part = retrieveValue('part');
			var product = retrieveValue('product');
			var price = retrieveValue('price');
			var quantity = retrieveValue('quantity');
			var discount_value = retrieveValue('discountvalue');
			var total = retrieveValue('totalprice');
			var ship_date = retrieveValue('ship-date');
			var tot_quantity = parseElementToInteger('quantity');
			
			if(counter === 1){
				tot_quantity += parseElementToInteger('quantity1');
			}
			else if(counter === 2){
				tot_quantity += parseElementToInteger('quantity1') + parseElementToInteger('quantity2');
			}

			else if(counter === 3){
				tot_quantity += parseElementToInteger('quantity1') + parseElementToInteger('quantity2') + parseElementToInteger('quantity3');
			}

			else if(counter === 4){
				tot_quantity += parseElementToInteger('quantity1') + parseElementToInteger('quantity2') + parseElementToInteger('quantity3') + parseElementToInteger('quantity4');
			}

			console.log(payment_type);
			console.log(customer);
			console.log(total);

			if(payment_type == "default"){
				Swal.fire({text: "Please select a payment type", icon: "error"});
			}

			else if(customer == "default"){
				Swal.fire({text: "Please select a customer", icon: "error"});
			}

			else if(total === '0'){
				Swal.fire({text: "Please select a product", icon: "error"});
			}

			else{
				if(validateForm(sub_total, payment_type, total, customer, product_pricing)){
					$.ajax({
						url:"http://localhost/POS%20App/ajaxData.php",
						type:"POST",
						data: {'orderDate':order_date,
								'ProductPricing':product_pricing,
					 			'Category':category,
						  		'Part':part,
				 				'Product':product,
						  		'Price':price,
				  				'Quantity':tot_quantity,
						  		'discountValue':discount_value,
						  		'Total':total,
						  		'shipDate':ship_date,
						  		'OK':ok,
						  		'Customer':customer,
						  		'subTotal':sub_total,
						  		'paymentType':payment_type},
						success: function(result){
								Swal.fire({text: "Invoice Created!", icon: "success"});
						}
					});
				}
				else
				Swal.fire({text: "Something Went Wrong!", icon: "error"});
			}
		});
	});
</script>
</head>
<body>
	<?php include("connection.php");?>

	<h1>Point of Sale (POS) Application</h1>

	<form action="index.php" method="POST" onsubmit="return false">
		<table>
			<!-- Order Date -->
			<tr>
				<td align="right"><label for="OrderDate">Order Date:</label></td>
				<td align="left"><input type="date" id="order-date" name="order-date" value="2020-09-15" min="2018-01-01" max="2024-12-31"></td>
			</tr>
			<!-- End Order Date -->

			<!-- Customers -->
			<tr>
				<td align="right"><label for="Customers">Customers<span>*</span>:</label></td>
				<td align="left">
					<select name="customers" id="customers">
						<option value="default" selected="" disabled="">Choose Customer</option>
						<option value="customer1">Customer 1</option>
						<option value="customer2">Customer 2</option>
						<option value="customer3">Customer 3</option>
						<option value="customer4">Customer 4</option>
						<option value="customer5">Customer 5</option>
						<option value="customer6">Customer 6</option>
					</select>
				</td>
			</tr>
			<!-- End Customers -->

			<!-- Product Pricing -->
			<tr>
				<td align="right"><label for="ProductPricing">Product Pricing<span>*</span>:</label></td>
				<td align="left">
					<select name="productpricing" id="productpricing">
						<option value="default" selected="" disabled="">Select Pricing</option>
						<option value="wholesale">Wholesale</option>
						<option value="retail">Retail</option>
					</select>
				</td>
			</tr>
			<!-- End Product Pricing -->

			<!-- Start of Inventory Section -->
			<tr id="inventoryTitle"><td><h3>Inventory</h3></tbody></td></tr>

			<tbody id="inventory" class="inventory">
				<!-- Category -->
				<tr class="inventoryInput">
					<td align="right"><label class="block" for="Category">Category:</label></td>
					<td align="left">
						<select name="category" id="category">
							<option value="" selected="" disabled="">Choose Category</option>
							<?php foreach ($items as $item) {?>
								<option value=<?php echo htmlspecialchars($item['Category'])?>><?php echo htmlspecialchars($item['Category'])?></option>
							<?php } ?>
						</select>
					</td>
				</tr>
			<!-- End Category -->

			<!-- Part # -->
			<tr class="inventoryInput">
				<td align="right"><label class="block" for="Part">Part #:</label></td>
				<td align="left">
					<select name="part" id="part">
						 <option value="" selected="" disabled="">Choose Part #</option>
					</select>
				</td>
			</tr>
			<!-- End Part # -->

			<!-- Product -->
			<tr class="inventoryInput">
				<td align="right"><label class="block" for="Product">Product:</label></td>
				<td align="left">
					<select name="product" id="product">
						 <option value="" selected="" disabled="">Choose Product</option>
					</select>
				</td>
			</tr>
			<!-- End Product -->

			<!-- Price -->
			<tr class="inventoryInput">
				<td align="right"><label class="block" for="Price">Price:</label></td>
				<td align="left"><input value="0" placeholder="0" id="price" style="background-color: #CDCDCD" type="number" name="price" readonly="true" /></td>
			</tr>
			<!-- End Price -->

			<!-- Quantity -->
			<tr class="inventoryInput">
				<td align="right"><label class="block" for="Quantity">Quantity:</label></td>
				<td align="left"><input placeholder="0" id="quantity" type="number" name="quantity"/></td>
			</tr>
			</tbody>
			<!-- End Quantity -->

			<!-- Add Button -->
			<tr><td align="right"><input id="add_field" class="add_field" type="submit" onclick="duplicate(myJSVar)" name="add" value="Add"></td></tr>
			<!-- End Add Button -->

			<!-- Sub-Total -->
			<tr>
				<td align="right"><label for="SubTotal">Sub-Total<span>*</span>:</label></td>
				<td align="left"><input id="subtotal" type="number" name="subtotal" readonly="true" value="0"/></td>
			</tr>
			<!-- End Sub-Total -->

			<!-- Discount Type -->
			<tr>
				<td align="right"><label for="DiscountType">Discount Type:</label></td>
				<td align="left">
				<input type="radio" id="percentage" name="discounttype" value="%">
				<label for="percentage">%</label>
				<input type="radio" id="dollar" name="discounttype" value="$">
				<label for="dollar">$</label></td>
			</tr>
			<!-- End Discount Type -->

			<!-- Discount Value -->
			<tr>
				<td align="right"><label for="DiscontValue">Discount Value:</label></td>
				<td align="left"><input step="any" value="0" placeholder="0" type="number" name="discountvalue" id="discountvalue" /></td>
			</tr>
			<!-- End Discount Value -->

			<!-- Total After Discount -->
			<tr>
				<td align="right"><label for="TotalAfterDiscount">Total After Discount:</label></td>
				<td align="left"><input  step="any" placeholder="0.00" type="number" id="totalafterdiscount" name="totalafterdiscount" /></td>
			</tr>
			<!-- End Total After Discount -->

			<!-- Total Before Tax -->
			<tr>
				<td align="right"><label for="TotalBeforeTax">Total Before Tax:</label></td>
				<td align="left"><input step="any" placeholder="0.00" type="number" id="totalbeforetax" name="totalbeforetax" /></td>
			</tr>
			<!-- End Total Before Tax -->

			<!-- GST -->
			<tr>
				<td align="right"><label for="GST">GST:</label></td>
				<td align="left"><input placeholder="5" value="5" style="background-color: #e5e5e6" type="number" id="GST" name="gst" readonly="true" /></td>
			</tr>
			<!-- End GST -->

			<!-- Tax Price -->
			<tr>
				<td align="right"><label for="TaxPrice">Tax Price:</label></td>
				<td align="left"><input step="any" placeholder="0.00" style="background-color: #e5e5e6" readonly="true" id="taxprice" type="number" name="taxprice" /></td>
			</tr>
			<!-- End Tax Price -->

			<!-- Total Price -->
			<tr>
				<td align="right"><label for="TotalPrice">Total Price<span>*</span>:</label></td>
				<td align="left"><input step="any" id="totalprice" style="background-color: #e5e5e6" readonly="true" value="0" placeholder="0.00" type="number" name="totalprice"/></td>
			</tr>
			<!-- End Total Pirce -->

			<!-- Payment Type -->
			<tr>
				<td align="right"><label for="PaymentType">Payment Type<span>*</span>:</label></td>
				<td align="left">
					<select name="paymenttype" id="paymenttype">
						<option value="default" selected="" disabled="">Select Payment Type</option>
						<option value="credit">Credit</option>
						<option value="debit">Debit</option>
						<option value="paypal">Paypal</option>
						<option value="cheque">Cheque</option>
					</select>
				</td>
			</tr>
			<!-- End Payment Type -->

			<!-- Comment -->
			<tr>
				<td align="right"><label for="Comment">Comment:</label></td>
				<td align="left"><!-- HTML Codes by Quackit.com -->
				<style type="text/css">
				textarea.html-text-box {background-color:#ffffff;background-image:url(http://);background-repeat:no-repeat;background-attachment:fixed;border-width:1;border-style:solid;border-color:#cccccc;font-family:Arial;font-size:14pt;color:#000000;}
				input.html-text-box {background-color:#ffffff;font-family:Arial;font-size:14pt;color:#000000;}
				</style>
				<form method="post" action="http://"><textarea name="comments" cols="70" rows="7" class="html-text-box">Comments here...</textarea><br></form></td>
			</tr>
			<!-- End Comment -->

			<!-- Created Sold By -->
			<tr>
				<td align="right"><label for="CreatedBy">Created/Sold By:</label></td>
				<td align="left"><input placeholder="Fabio" style="background-color: #e5e5e6" type="number" name="createdby" readonly="true" /></td>
			</tr>
			<!-- End Created/ Sold By -->

			<!-- Ship Date -->
			<tr>
				<td align="right"><label for="ShipDate">Ship Date:</label></td>
				<td align="left"><input type="date" id="ship-date" name="ship-date" value="2020-09-15" min="2018-01-01" max="2024-12-31"></td>	
			</tr>
			<!-- End Ship Date -->

			<tr>
				<td align="right"><label for="RequiredFields">Required Fields<span>*</span></label></td>
			</tr>

			<tr><td align="right"><input id="submit" type="submit" name="submit"></td></tr>

		</table>
	</form>

<script>
	var myJSVar = <?php echo json_encode($items);?>;
	var counter = 0;
</script>
</body>
</html>