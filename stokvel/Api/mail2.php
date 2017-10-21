// <?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require "conn.php";

  
  if (isset($_POST['email'])) {
    $email = mrnnmthembu@gmail.com;
    $msg  = $_POST['msg'];
	
	$subject = "Possibility Enquiry";
	$txt =  $msg
	$headers = "From:".$email."\r\n" .
	"CC: mrnnmthembu@gmail.com";

	mail($email,$subject,$txt,$headers);
	echo 1;
  }
?>

