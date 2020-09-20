<?php 

	require 'connection.php';
	
	$out = $out1 = $out2 = $out3 = '';

	// Category option retrieval
	if(isset($_POST['categoryID'])){
		$sql = "SELECT Part FROM Inventory WHERE Category='".$_POST['categoryID']."'";
		$res = mysqli_query($connection, $sql);
		$out .= '<option value= "" disabled selected>-Select Part #-</option>';
		$elements = mysqli_fetch_all($res, MYSQLI_ASSOC);

		foreach ($elements as $element)
		$out .= '<option value='. $element["Part"]. '>'.$element['Part'].'</option>';

		echo $out;
	}

	// Part option retrieval
	if(isset($_POST['partID'])){
		$sql = "SELECT Product FROM Inventory WHERE Part='".$_POST['partID']."'";
		$res = mysqli_query($connection, $sql);
		$out1 .= '<option value= "" disabled selected>-Select Product #-</option>';
		$elements = mysqli_fetch_all($res, MYSQLI_ASSOC);

		foreach ($elements as $element) 
			$out1 .= '<option value='. $element["Product"]. '>'.$element['Product'].'</option>';
		echo $out1;
	}

	// Product option retrieval
	if(isset($_POST['productID'])){
		$flag = (boolean)json_decode(strtolower($_POST['isRetail']));

		if($flag){
			$sql = "SELECT Price FROM Inventory WHERE Product='".$_POST['productID']."'";
			$res = mysqli_query($connection, $sql);
			$elements = mysqli_fetch_all($res, MYSQLI_ASSOC);
			foreach ($elements as $element) 
				$out2 = $element['Price'].'#';
			echo $out2;
		}
		
		elseif(!$flag){
			$sql = "SELECT WholesalePrice FROM Inventory WHERE Product='".$_POST['productID']."'";
			$res = mysqli_query($connection, $sql);
			$elements = mysqli_fetch_all($res, MYSQLI_ASSOC);
			foreach ($elements as $element) 
				$out2 = $element['WholesalePrice'].'#';
			echo $out2;
		}

		$sql = "SELECT Quantity FROM Inventory WHERE Product='".$_POST['productID']."'";
		$res = mysqli_query($connection, $sql);
		$elements = mysqli_fetch_all($res, MYSQLI_ASSOC);
		foreach ($elements as $element) 
			$out3 = $element['Quantity'];
		echo $out3;
	}


if(isset($_POST['OK'])){

	if($_POST['discountValue'] == '')
		$_POST['discountValue'] = 0;

	$sql = "INSERT INTO orders (ordernum, customer, productPricing, category, part, product, price, quantity, discountValue, total, orderdate, shipDate) 
			VALUES (0,'Customer 2' ,"."'". $_POST['ProductPricing']."'".','."'".$_POST['Category']."'".','."'".$_POST['Part']."'".','."'".$_POST['Product']."'".','.$_POST['Price'].','.$_POST['Quantity'].','.$_POST['discountValue'].','.$_POST['Total'].','.$_POST['orderDate'].','.$_POST['shipDate'].")";
	
	if (mysqli_query($connection, $sql)) 
  		echo "New record created successfully";
 	else 
  		echo "Error: " . $sql . "<br>" . mysqli_error($connection);
}

?>