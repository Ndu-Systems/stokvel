<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));
$rows = array();
//$email = "ndu@mail.com";//$data->email;

if (isset($data->id) ){		
// 2. Withdrawal

			   $id				=	$data->id;
             
			$sql = "
			UPDATE  investment  SET
			 status = 'Withdraw'
			 
			WHERE id= $id 
			
				";
								
								
				if ($conn->query($sql) === TRUE) {
					//echo 1;
					echo "Your request has been submitted successfully";
				} else {
				echo 0;
				}
					
}else{
	echo "500";
}
?>



