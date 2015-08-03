<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="my.css">
</head>

<body>

    <?php
// define variables and set to empty values
$nameErr = $emailErr = $mobileErr = $genderErr =$interestErr = $countryErr = $stateErr = $addressErr =  "";
$name = $email = $mobile = $gender = $country = $state = $address =$smsg= "";
$mob="/^[789][0-9]{9}$/";
$interest = [];
$intereststr="";
$flag=0;
if ($_SERVER["REQUEST_METHOD"] == "POST") { $flag=1;
if (empty($_POST["name"])) {
     $nameErr = "---NAME is required";
     $flag=0;
   } else {
     $name = test_input($_POST["name"]);
     // check if name only contains letters and whitespace
     if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
       $nameErr = "---Only letters and space allowed in NAME"; 
     }
   }
   
   if (empty($_POST["email"])) {
     $emailErr = "---EMAIL is required";
     $flag=0;
   } else {
     $email = test_input($_POST["email"]);
     // check if e-mail address is well-formed
     if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       $emailErr = "---Invalid email format"; 
       $flag=0;
     }
   }
   if (empty($_POST["mobile"])) {
     $mobileErr = "---MOBILE is required";
     $flag=0;
   } else {
      $mobile = test_input($_POST["mobile"]);
     if(!preg_match("/^[789][0-9]{9}$/", $mobile))
    { 
    $mobileErr="---MOBILE no should be 10 digit starting with 7/8/9 ";
    $flag=0;
        
  }
   }
   if (empty($_POST["sex"])) {
     $genderErr = "---SEX must be selected";
     $flag=0;
   } else {
     $gender = test_input($_POST["sex"]);
   }
   if (empty($_POST["interest"])) {
     $interestErr = "---INTEREST is required";
     $flag=0;
   } else {
     $interest = ($_POST["interest"]);
    }  

   //
   if (empty($_POST["country"])) {
     $countryErr = "---COUNTRY is required";
     $flag=0;
   } else {
     $country = test_input($_POST["country"]);
   }
   if (empty($_POST["state"])) {
     $stateErr = "---STATE is required";
     $flag=0;
   } else {
     $state = test_input($_POST["state"]);
   }
   if (empty($_POST["address"])) {
     $addressErr = "---ADDRESS is required";
     $flag=0;
   } else {
     $address = test_input($_POST["address"]);
   }
}//MAIN IF     

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}
if($flag==1){
$smsg="Congrats! You details have been successfully stored in our database.";
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kishan";
$intereststr=implode(",",$interest);

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$detail = "INSERT INTO subscription (NAME, EMAIL, MOBILE, SEX, INTEREST, COUNTRY, STATE, ADDRESS)
VALUES ('$name', '$email', '$mobile', '$gender', '$intereststr', '$country', '$state', '$address')";



if (mysqli_query($conn, $detail)) {
    echo "New record created successfully";
} 
else {
    echo "Error: " . $detail . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
}
?>

        <script src="func.js"></script>

        <div id="tab" class="relative">
            <div onclick="tab1()" id="news" class="tc1">
                <center>News</center>
            </div>
            <div onclick="tab2()" id="sub" class="tc2">
                <center>Subscribe</center>
            </div>
            <div id="left" class="absoluteLeft">
                <span class="h1"><h3>Welcome</h3>
          <p id="pf">Simple and effective AngularJS bindings for FusionCharts JavaScript Charting Library. Simple and effective AngularJS bindings for FusionCharts JavaScript Charting Library.</p>

          <p id="ps">AngularJS bindings for FusionCharts JavaScript Charting Library</p></span>
            </div>

            <div id="right" class="absoluteRight">
                <span class="h2"><h3>Latest News</h3></span>
                <img src="tc.jpg">
            </div>
            <button type="submit" onclick="" id="lern" class="l-button">
                <center>LEARN MORE</center>
            </button>

            <form name="form1name" method="post" action="index.php">
                <div id="form" class="form1">
                    <h3><span class="h3">Subscription Form</span></h3>
                    <div class="formleft">
                        <table border="0" cellspacing="13" cellpadding="0">
                            <tr>
                                <td><span class="label">Name<span class="error">*</span></span>
                                </td>
                                <td>
                                    <input type="text" name="name" id="name" class="fsize" value="<?php echo $name;?>">
                                </td>
                            </tr>
                            <tr>
                                <td><span class="label">Email<span class="error">*</span></span>
                                </td>
                                <td>
                                    <input type="text" name="email" id="email" class="fsize" value="<?php echo $email;?>">
                                </td>
                            </tr>
                            <tr>
                                <td><span class="label">Mobile<span class="error">*</span></span>
                                </td>
                                <td>
                                    <input type="text" name="mobile" id="phone" class="fsize" value="<?php echo $mobile;?>">
                                </td>
                            </tr>
                            <tr>
                                <td><span class="label">Sex<span class="error">*</span></span>
                                </td>
                                <td>
                                    <input type="radio" name="sex" <?php if (isset($gender) && $gender=="male" ) echo "checked";?> value="male"><span class="label">Male</span>
                                    <input type="radio" name="sex" <?php if (isset($gender) && $gender=="female" ) echo "checked";?> value="female"><span class="label">Female</span>
                            </tr>
                            <tr>
                                <td><span class="label">Interest<span class="error">*</span></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="interest[]" class="inter" <?php foreach($interest as $value){ if($value=='Football' ) echo "checked"; } ?> value="Football" ><span class="label">Football</span>

                                    <input type="checkbox" name="interest[]" <?php foreach($interest as $value){ if($value=='Movie' ) echo "checked"; } ?> value="Movie"class="inter"><span class="label">Movie</span>

                                    <input type="checkbox" name="interest[]" <?php foreach($interest as $value){ if($value=='Reading' ) echo "checked"; } ?> value="Reading" class="inter"><span class="label">Reading
                  </span>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div class="formright">
                        <table border="0" cellspacing="13" cellpadding="0">
                            <tr>
                                <td><span class="label">Country<span class="error">*</span></span>
                                </td>
                                <td>
                                    <select id="country" name="country" class="fsize" onchange="State(this.value)" value="<?php echo $country;?>">
                                        <option value=""> </option>
                                        <option value="India" <?php if ($country=="India" ) { echo " selected"; } ?>>India</option>
                                        <option value="US" <?php if ($country=="US" ) { echo " selected"; } ?>>US</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><span class="label">States<span class="error">*</span></span>
                                </td>
                                <td>
                                    <select id="state" name="state" class="fsize" <?php if ($state) { echo " selected"; } ?> value="" disabled>
                                        <option value="-1"> <?php if (!empty($_POST["state"])){echo $_POST["state"];}?></option>

                                </td>
                            </tr>
                            <tr>
                                <td valign="top"><span class="label">Address<span class="error">*</span></span>
                                </td>
                                <td><span class="tarea"><textarea name="address" rows="4" cols="28"><?php echo $address;?></textarea></span>
                            </tr>

                        </table>

                    </div>

                </div>
                <button type="reset" id="rst" class="r-button">
                    <center>RESET</center>
                </button>
                <button type="submit" onclick="jsonval()" id="subscribe" class="s-button" name="subscribe">
                    <center>SUBSCRIBE</center>
                    <?php if (isset($_POST['subscribe'])) {
   echo "<script type='text/javascript'>tab2();</script>";
  } ?>
                </button>


                </td>
                </tr>
            </form>

        </div>
        <div class="err">
            <span class="error"><?php echo $nameErr;?></span>
            <br>
            <br>
            <span class="error"><?php echo $emailErr;?></span>
            <br>
            <br>
            <span class="error"><?php echo $mobileErr;?></span>
            <br>
            <br>
            <span class="error"><?php echo $genderErr;?></span>
            <br>
            <br>
            <span class="error"><?php echo $interestErr;?></span>
            <br>
            <br>
            <span class="error"><?php echo $countryErr;?></span>
            <br>
            <br>
            <span class="error"><?php echo $stateErr;?></span>
            <br>
            <br>
            <span class="error"><?php echo $addressErr;?></span>
            <br>

            <br>


            <!--  <span class="error"><?php echo $name;?></span><br> 
    <span class="error"><?php echo $email;?></span><br>
     
      <span class="error"><?php echo $gender;?></span><br>
       <span class="error"><?php echo $interest;?></span><br>
        <span class="error"><?php echo $country;?></span><br>
         <span class="error"><?php echo $state;?></span><br>
          <span class="error"><?php echo $address;?></span><br> -->
            <span class="success"><?php echo $smsg;?></span>
            <br>
        </div>
</body>

</html>