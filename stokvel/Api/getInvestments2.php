 
<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
require "conn.php";

$rows = array();
$sql = "SELECT * FROM investment";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
		$rows["investments"][]= $row;
	}
	echo json_encode($rows);
$conn->close();
}
 else {

	echo json_encode(500);
}


?>