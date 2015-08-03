<html>

<head>
    <style type="text/css">
        table {
            border-collapse: collapse;
        }
    </style>
    <script type='text/javascript' src="func.js"></script>
</head>

<body>

    <?php 

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
$selectSQL = 'SELECT * FROM `subscriptionTable`';
# Execute the SELECT Query
 if( !( $data = mysqli_query($conn, $selectSQL ) ) ){
   echo 'Retrieval of data from Database Failed - #'.mysql_errno().': '.mysql_error();
 }else{
   ?>
        <table border>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>MOBILE</th>
                    <th>SEX</th>
                    <th>INTEREST</th>
                    <th>COUNTRY</th>
                    <th>STATE</th>
                    <th>ADDRESS</th>
                    <th>DELETE</th>
                    <th>EDIT</th>
                </tr>
            </thead>
            <tbody>
                <?php
     if( mysqli_num_rows( $data )==0 ){
       echo '<tr><td colspan="4">No Rows Returned</td></tr>';
     }else{
       while( $row = mysqli_fetch_assoc( $data ) ){
         echo "<tr>
         <td>{$row['NAME']}</td>
         <td>{$row['EMAIL']}</td>
         <td>{$row['MOBILE']}</td>
         <td>{$row['SEX']}</td>
         <td>{$row['INTEREST']}</td>
         <td>{$row['COUNTRY']}</td>
         <td>{$row['STATE']}</td>
         <td>{$row['ADDRESS']}</td>
         <td><input type='button' id={$row['MOBILE']} onclick='remov(this.id)'  value='DELETE'></a></td>
         <td><a href='edit.php?id={$row['MOBILE']}'>edit</a></td>
         </tr>\n";
       }
     }
   ?>
            </tbody>
        </table>

        <?php
 }
?>
            <div id='errormsg'>

            </div>
</body>

</html>