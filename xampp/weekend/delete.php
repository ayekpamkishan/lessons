<?php
$mob='';
$mob= $_POST["id"];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kishan";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$delSQL = "DELETE FROM subscriptionTable where MOBILE='$mob'";
 # Execute the SELECT Query
  if( !( $selectRes1 = mysqli_query($conn, $delSQL ) ) )
  {
    echo 'Retrieval of data from Database Failed - #'.mysql_errno().': '.mysql_error();
  }else{
    echo header("Location: export.php");
  }
?>