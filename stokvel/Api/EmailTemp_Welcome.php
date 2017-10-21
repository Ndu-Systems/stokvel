<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$data = json_decode(file_get_contents("php://input"));
$user = $data->name;
$to = $data->email;
$companyName = "Possibility Group";

echo $msg = "
<div style='background: #27ae60;color: white;padding: 2%;font-size: 20px;font-family: cursive;'>
Dear $user <br><br>

Welcome to $companyName <br><br>

We offer a very warm welcome to the best entity in investment portfolios, you have came to the right door to your Financial freedom.  <br><br>

We love greeting new clients because it allows me the opportunity to describe the $companyName philosophy. Our years of success are due to this philosophy, which includes helping our clients meet  their objectives through investment management. <br><br>

We at  $companyName give 110% to all your service needs. Anything less is not good enough. This means that on every investment we give you more value through great returns. By consistently going the extra mile, we have created successful portfolios that work and we have loyal clientele. In this same manner, we hope to earn your confidence and continued business. <br><br>

Yours sincerly, <br><br>

$companyNamem
</div>
";
 
//---------------------------------------------------------------------------------------

$subject = 'Welcome to Possibility Group';
$from = 'Possibility@possibility.org.za';
 
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $msg, $headers);
?>
