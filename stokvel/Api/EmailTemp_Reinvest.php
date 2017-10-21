<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";$data = json_decode(file_get_contents("php://input"));

$user = "Ndu";
$InvestedAmount = "Ndu";
$maturityDate = "Ndu";
$ExpectedReturn = "Ndu";
$ReinvestAmount = "Ndu";
$reinvestmentDate = "Ndu";
$maturityDate = "Ndu";
$ExpectedReivestAmount = "Ndu";
$companyName = "Possibility Group";


echo $msg = "
<div style='background: #27ae60;color: white;padding: 2%;font-size: 20px;font-family: cursive;'>
Dear $user <br><br>

Congratulations on making a wise choice of re-Investing your money.We appreciate you as our loyal customer that wants more value through our business.We pride our self through legit business and customer satisfaction.We ideally share a bright future with you.<br><br>

This serves as a certificate of your re-investment. <br><br>

Current Account<br>
Invested amount: <b>$InvestedAmount</b> <br>
Maturity date:  <b>$maturityDate </b><br>
Expected Return: <b>$ExpectedReturn</b> <br><br>

Re-investment<br>
Amount : <b>$ReinvestAmount</b><br>
date of re-investment : <b>$reinvestmentDate</b><br>
maturity date : <b>$maturityDate</b> <br>
Expected overall returns : <b>$ExpectedReivestAmount</b><br><br>

We will always give you more financial freedom if you stick to our business. We promise you value and we will give you more.<br><br>


Yours sincerly<br>
$companyName
</div>
";
 

?>
