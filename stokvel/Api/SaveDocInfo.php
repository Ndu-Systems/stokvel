<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->name) ){
    $name    = $data->name  ;
    $url     = $data->url   ;
    $email   = $data->email ;
    $status  = $data->status;
    $date    = $data->date  ;


	 $sql = "INSERT INTO documents ( email, name, url, status, date)
                             VALUES ('$email', '$name', '$url', '$status', '$date')";
        
        
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
