<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require "conn.php";

  
  if (isset($_POST['email'])) {
    $email = $_POST['email'];
    $pin  = $_POST['code'];
	$subject = "Vefifiction Code";
	$txt =  "Your Code is: ".$pin;
	$headers = "From: no-reply@possibility.org.za" . "\r\n" .
	"CC: mrnnmthembu@gmail.com";

	mail($email,$subject,$txt,$headers);
	echo 1;
  }
?>

