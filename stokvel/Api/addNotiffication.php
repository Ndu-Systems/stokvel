<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->addressTo) ){
	$topic			= $data->topic;
	$addressTo		= $data->addressTo;
	$commments		= $data->commments;

	
  
    if ($conn->query("SELECT * FROM client WHERE email = '$addressTo'")->num_rows > 0) {
        $sql = "INSERT INTO announcments (`id`, `addressTo`, `topic`, `comments`) VALUES(null ,'$addressTo', '$topic', '$commments')";        
        
        if ($conn->query($sql) === TRUE) {
            echo 1;
        } else {
            //echo json_encode('failed');
            echo "Error: " . $sql . "<br>" . $conn->error;
        }        
        
    }
    else{
		 $sql = "INSERT INTO announcments (`id`, `addressTo`, `topic`, `comments`) VALUES(null ,'$addressTo', '$topic', '$commments')";   
		 if ($conn->query($sql) === TRUE) {
            echo 1;
        } else {
            //echo json_encode('failed');
            echo "Error: " . $sql . "<br>" . $conn->error;
        }     
	}
}
 else {

	echo json_encode( "500");
}

?>