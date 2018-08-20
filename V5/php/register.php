<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }

  require "dbconnect.php";

    $data = file_get_contents("php://input");
    if (isset($data)) {
        $request = json_decode($data);
		$username = $request->username;
		$password = $request->password;
		$emailadd = $request->email;
    $role = '1';
}

  $duplicateuser=mysqli_query($con,"SELECT * from app_users where username='$username'");
  $duplicateemail=mysqli_query($con,"SELECT * from app_users where email='$emailadd'");

  if (mysqli_num_rows($duplicateuser)>0){
    $response = "Username already in Use.";
  } elseif (mysqli_num_rows($duplicateemail)>0) {
    $response = "Email already in Use.";
  }else{

  if(!preg_match('/^[a-z\d_]{2,20}$/i', $username)) {
      $response = "the username does not meet the requirements!";
  }
  elseif(!preg_match('/^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z!@#$%]{8,12}$/', $password)) {
      $response = "the password does not meet the requirements!";
  }
  elseif (!filter_var($emailadd, FILTER_VALIDATE_EMAIL)) {
      $response = "Invalid email format";
  }
  else{

$username = stripslashes($username);
$hashedpassworddb = hash('sha512' , $password);
$sql = "INSERT INTO app_users (username, password, email, role)
VALUES ('$username', '$hashedpassworddb', '$emailadd', '$role')";
if ($con->query($sql) === TRUE) {
	$response= "Registration successfull";

} else {
   $response= "Error: " . $sql . "<br>" . $db->error;
}
}
}
	echo json_encode( $response);

?>
