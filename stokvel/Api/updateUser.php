<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

               $clienId			=	$data->clienId;              
               $name    		=	$data->name;
			   $email			=	$data->email;
			   $bankName		=	$data->bankName;
               $branchCode    	=	$data->branchCode;
               $bankAccountNo  	=	$data->bankAccountNo;
               $cell    		=	$data->cell;
                $status    		=	$data->status;
       

			   $sql = "
				UPDATE  client  SET	 
				 Status = '$status', 
				 name ='$name',
				 bankName = '$bankName',
				 branchCode ='$branchCode',			 
				 bankAccountNo ='$bankAccountNo',
				 email = '$email',
				 cell = '$cell'
				WHERE clienId= '$clienId' 		
				";								
								
				if ($conn->query($sql) === TRUE) {
					echo 1;
				} else {
				echo 0;
				}						
						

?>


