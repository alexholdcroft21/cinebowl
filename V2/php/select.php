

<?php

header("Access-Control-Allow-Origin: *");
header("Content-type: application/json");

define('HOST','127.0.0.1');
define('USER','alex');
define('PASS','5aQw0#l2');
define('DB','cinebowl');
$con = mysqli_connect(HOST,USER,PASS,DB);

if (!$con){
 die("Error in connection" . mysqli_connect_error()) ;
}

  $sql = "SELECT * FROM app_films";
  $result = mysqli_query($con, $sql);
  $json_array= array();

      while($row = mysqli_fetch_assoc($result))
      {
        $json_array[] = $row;
      }

      echo json_encode($json_array);

      /*echo '<pre>';
      print_r($json_array);
      echo '</pre>'*/

     ?>
