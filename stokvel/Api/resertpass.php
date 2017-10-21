<?php
header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require "conn.php";
//$data = json_decode(file_get_contents("php://input"));
			   $password=$_POST['password'];
			   $email=$_POST['email'];
			  
			$sql = "
			UPDATE  client  SET
			 password = '$password'
			WHERE email= '$email' 
				";
								
								
				if ($conn->query($sql) === TRUE) {
					echo 1;
				} else {
				echo 0;
				}
								
						

?>


