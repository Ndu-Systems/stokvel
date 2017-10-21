<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));
$rows = array();
//$email = "ndu@mail.com";//$data->email;

if (isset($data->username) ){
$email = $data->username;
$sql = "SELECT * FROM investment WHERE email = '$email' AND status = 'Ready'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
		$rows["investments"][]= $row;
	}
}

echo json_encode($rows);
$conn->close();
 }
	
 else {

	echo json_encode(500);
}

?>



