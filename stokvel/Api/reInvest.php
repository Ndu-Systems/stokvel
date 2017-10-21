<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));
$rows = array();
//$email = "ndu@mail.com";//$data->email;

if (isset($data->email) ){

// 1. New Investment
$newAmount = $data->newAmount;
    $date          = $data->date        ;
    $expectedDate  = $data->expectedDate;
    $email         = $data->email       ;
    $doc           = $data->doc         ;
	$status       = "Active";
 $sql = "INSERT INTO investment ( date, amount, expectedDate, email, doc, status)
                             VALUES ('$date', '$newAmount', '$expectedDate', '$email', '$doc', '$status')";
        
        
        if ($conn->query($sql) === TRUE) {
          //  echo 1;
        } else {
            //echo json_encode('failed');
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

		
// 2. Withdrawal

			   $id				=	$data->id;
               $doc				=	$data->doc;
			   $date			=	$data->date;
               $expectedDate			=	$data->expectedDate;
			   $balance = $data->balance;
			  
			$sql = "
			UPDATE  investment  SET
			 amount = '$balance' ,
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



