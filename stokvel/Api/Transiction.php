<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));
if (isset($data->email)) {
    $amount          = $data->amount;
    $transictionType = $data->transiction;
    $email           = $data->email;
    $investmentId    = $data->id;
    $date            = $data->date;
    $sql             = "INSERT INTO transiction (email, investmentId, amount, date, transictionType)
                                VALUES ('$email', '$investmentId', '$amount', '$date', '$transictionType')";
    if ($conn->query($sql) === TRUE) {
        $updateQuery = "UPDATE investment SET status ='$transictionType'";
        if ($conn->query($updateQuery) === TRUE) {
            echo "Transiction was successful we gonna contact you after review";
        }
    } else {
        //echo json_encode('failed');
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
} else {
    echo json_encode("500");
}
?>