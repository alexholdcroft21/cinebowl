<?php

header("Access-Control-Allow-Origin: *");
header("Content-type: application/json");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

define('HOST','127.0.0.1');
define('USER','alex');
define('PASS','5aQw0#l2');
define('DB','cinebowl');
$con = mysqli_connect(HOST,USER,PASS,DB);

if (!$con){
 die("Error in connection" . mysqli_connect_error()) ;
}

  $sql = "SELECT * FROM show_times WHERE show_date >= (NOW() - INTERVAL 1 DAY)";
  $result = mysqli_query($con, $sql);
  $json_array= array();

      while($row = mysqli_fetch_assoc($result))
      {
        $json_array[] = $row;
      }

      echo json_encode($json_array);
     ?>
