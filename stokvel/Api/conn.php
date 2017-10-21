<?php

 $servername = "localhost";
 $username = "root";
 $password = "";
 $dbname = "possibility";


//$servername = "127.0.0.1";
//$username = "ndusys0_poss";
//$password = "Harder01!";
//$dbname = "ndusys0_possibility";


$conn = new mysqli($servername, $username, $password,$dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


function SendEmail($sendTo,$title,$msg,$headers){
mail($sendTo,$title,$msg,$headers);
}
?>