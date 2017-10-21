<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->email) ){
	$name			= $data->name;
	$password		= $data->password;
	$email			= $data->email;
	$cell			= $data->cell;
	$passwordConfirm= $data->passwordConfirm;
	$bankName		= $data->bankName;
	$branchCode		= $data->branchCode;
	$bankAccountNo	= $data->bankAccountNo;
	$Status = "active";
    $role = "admin";
    if ($conn->query("SELECT * FROM client WHERE email = '$email'")->num_rows == 0) {
        $sql = "INSERT INTO client VALUES(null ,'$name', '$email', '$bankName', '$branchCode', '$bankAccountNo', '$password', '$cell', '$Status','$role')";
        
        
        if ($conn->query($sql) === TRUE) {
            echo 1;
        } else {
            //echo json_encode('failed');
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        
        
    }
	else{
		echo "Email address already used choose a different one or go to Login";
	}
}
 else {

	echo json_encode( "500");
}
?>
