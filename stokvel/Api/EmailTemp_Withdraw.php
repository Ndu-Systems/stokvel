<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";$data = json_decode(file_get_contents("php://input"));
$user = "Ndu";
$companyName = "Possibility Group";

$InvestedAmount = "Ndu";
$maturityDate = "Ndu";
$ExpectedReturn = "Ndu";
$withdrawalAmount = "Ndu";
$withdrawalDate = "Ndu";

echo $msg = "
<div style='background: #27ae60;color: white;padding: 2%;font-size: 20px;font-family: cursive;'>
Dear $user, <br><br>

You have requested a withdrawal amount [xxxxxx] on your  Investment you have made on [date of investment].Your request is being processed.<br><br>

Current Investment<br><br>

Invested amount : $InvestedAmount<br>
Maturity date : $maturityDate<br>
Expected Return : $ExpectedReturn<br><br>

Withdrawal:<br>
Amount: $withdrawalAmount<br>
Date : $withdrawalDate<br><br>


You may still cancel your withdrawal if you can reply with CANCEL on this email.<br>
 We look forward to give you more financial freedom in our business.
<br><br>

Yours sincerly<br>
$companyName<br>
</div>
";
 

?>
