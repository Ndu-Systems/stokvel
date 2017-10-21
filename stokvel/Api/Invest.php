<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->amount) ){
    $amount        = $data->amount      ;
    $date          = $data->date        ;
    $expectedDate  = $data->expectedDate;
    $email         = $data->email       ;
    $doc           = $data->doc         ;
	$status       = "New";

	 $sql = "INSERT INTO investment ( date, amount, expectedDate, email, doc, status)
                             VALUES ('$date', '$amount', '$expectedDate', '$email', '$doc', '$status')";
        
        
        if ($conn->query($sql) === TRUE) {
            echo 1;
        } else {
            //echo json_encode('failed');
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        
        
    }
	
 else {

	echo json_encode( "500");
}
?>
