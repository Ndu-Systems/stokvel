<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

               $id				=	$data->id;
               $doc				=	$data->doc;
			   $date			=	$data->date;
               $expectedDate			=	$data->expectedDate;
			  
			$sql = "
			UPDATE  investment  SET
			 doc = '$doc'  ,
			 date = '$date' ,
			 expectedDate = '$expectedDate' ,
			 status = 'Pending'
			 
			WHERE id= $id 
			
				";
								
								
				if ($conn->query($sql) === TRUE) {
					echo 1;
				} else {
				echo 0;
				}
								
						

?>


