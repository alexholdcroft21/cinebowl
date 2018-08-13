<?php
  define('HOST','127.0.0.1');
  define('USER','alex');
  define('PASS','5aQw0#l2');
  define('DB','cinebowl');
  $con = mysqli_connect(HOST,USER,PASS,DB);

  if (!$con){
	 die("Error in connection" . mysqli_connect_error()) ;
  }
?>
