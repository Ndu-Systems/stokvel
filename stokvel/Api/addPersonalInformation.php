<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

               $name				=	$data->name;
               $surname				=	$data->surname;
			   $IdentityNo			=	$data->IdentityNo;
               $addressLine			=	$data->addressLine;
			   $street				=	$data->street;
               $surbub				=	$data->surbub;
			   $city				=	$data->city;
               $postalCode			=	$data->postalCode;
			   $bankName			=	$data->bankName;
               $branchCode			=	$data->branchCode;
			   $bankAccountNo		=	$data->bankAccountNo;
			   $email				=	$data->email;
			   $dob					=	$data->dob;
			   $cell				=	$data->cell;
			$sql = "
			UPDATE  client  SET
			 name = '$name'  ,
			 surname = '$surname' ,
			 IdentityNo = '$IdentityNo' ,
			  addressLine = '$addressLine',  
			 street = '$street'  ,
			 surbub = '$surbub',
			 city = '$city'  ,
			 postalCode = '$postalCode' ,
			 cell = '$cell'  ,
			 dob = '$dob',
			 bankName = '$bankName' ,
			 branchCode = '$branchCode'  ,
			 bankAccountNo ='$bankAccountNo' 
			WHERE email= '$email' 
			
				";
								
								
				if ($conn->query($sql) === TRUE) {
					echo 1;
				} else {
				echo 0;
				}
								
						

?>


