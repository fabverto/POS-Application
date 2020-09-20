<?php 

$connection = mysqli_connect('localhost', 'fabio', 'fabio1234', 'POS');

if(!$connection){
	echo "Connection error, plese try again" . mysqli_connect_error();
}

$query = "SELECT DISTINCT Category FROM Inventory";
$results = mysqli_query($connection, $query);
$items = mysqli_fetch_all($results, MYSQLI_ASSOC);

?>