<?php
// define variables and set to empty values
$nameErr = $emailErr = $mobileErr = $genderErr =$interestErr = $countryErr = $stateErr = $addressErr = $interest =  "";
$name = $email = $mobile = $gender = $country = $state = $address = "";
$mob="/^[789][0-9]{9}$/";
$smsg="Congrats! You details have been successfully stored in our database.";
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
$myfile = fopen("newfile.csv", "a") or die("Unable to open file!");
fwrite($myfile, $name."\t");
fwrite($myfile, $email."\t");
fwrite($myfile, $mobile."\t");
fwrite($myfile, $gender."\t");
fwrite($myfile, $interest."\t");
fwrite($myfile, $country."\t");
fwrite($myfile, $state."\t");
fwrite($myfile, $address."\n");
fclose($myfile);
echo $smsg;
}


else{
  echo $nameErr."\n";
   echo $emailErr."\n";
    echo $mobileErr."\n";
    echo $genderErr."\n";
    echo $interestErr."\n";
    echo $countryErr."\n";
    echo $stateErr."\n";
    echo $addressErr."\n";
}
?>