<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";$data = json_decode(file_get_contents("php://input"));
$user 				= "Ndu";
$companyName	 	= "Possibility Group";
$portfolio 			= "portfolio";
$dateOfInvestment	= "Ndu";
$investedAmount		= "Ndu";
$investedAmount 	= "Ndu";
$maturityDate 		= "Ndu";
$expectedReturn 	= "Ndu";

echo $msg = "
<div style='background: #27ae60;color: white;padding: 2%;font-size: 20px;font-family: cursive;'>
Dear $user <br><br>


Congratulations on your new Investment  you have made on $dateOfInvestment.You have invested $investedAmount on this portfolio  $portfolio We share a bright future here.<br><br>

This serves as a certificate of your investment. <br><br>

Invested amount : $investedAmount<br>
Maturity date : $maturityDate<br>
Expected Return : $expectedReturn<br><br>

As our loyal customer we offer you more value and returns if you re-invest your amount. Once again sit back and relax while your money grows for your benefit. <br><br>

Terms and condition<br>
If you choose to withdraw, 10% will be deducted from the total returns on investment.<br><br>

Yours sincerly, <br><br>

$companyName
</div>
";
 

?>
