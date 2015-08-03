<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="edit.css">
    <script src="func.js"></script>
</head>

<body>


    <?php

    $id1='';
    $id1= $_GET["id"];
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

        $column = "SELECT * FROM subscriptionTable where MOBILE='$id1'";
        $data = mysqli_query($conn,$column);
        $row = mysqli_fetch_array($data);
        $inerestArr=array();
       $inerestArr=explode(",",$row['INTEREST']);
        mysqli_close($conn);
        
        ?>

        <script src="func.js"></script>

        <div id="tab" class="relative">


            <form name="form1name" method="post" action="#">
                <div id="form" class="form1">
                    <h3><span class="h3">Subscription Form</span></h3>
                    <div class="formleft">
                        <table border="0" cellspacing="13" cellpadding="0">
                            <tr>
                                <td><span class="label">Name<span class="error">*</span></span>
                                </td>
                                <td>
                                    <input type="text" name="name" id="name" class="fsize" value="<?php echo $row['NAME']?>">
                                </td>
                            </tr>
                            <tr>
                                <td><span class="label">Email<span class="error">*</span></span>
                                </td>
                                <td>
                                    <input type="text" name="email" id="email" class="fsize" value="<?php echo $row['EMAIL'];?>">
                                </td>
                            </tr>
                            <tr>
                                <td><span class="label">Mobile<span class="error">*</span></span>
                                </td>
                                <td>
                                    <input type="text" name="mobile" id="phone" class="fsize" value="<?php echo $row['MOBILE'];?>">
                                </td>
                            </tr>
                            <tr>
                                <td><span class="label">Sex<span class="error">*</span></span>
                                </td>
                                <td>
                                    <input type="radio" name="sex" <?php if ($row[ 'SEX']=='male' ) echo 'checked="checked"';?> value="male"><span class="label">Male</span>
                                    <input type="radio" name="sex" <?php if ($row[ 'SEX']=='female' ) echo 'checked="checked"';?> value="female"><span class="label">Female</span>
                            </tr>
                            <tr>
                                <td><span class="label">Interest<span class="error">*</span></span>
                                </td>
                                <td>
                                    <input type="checkbox" <?php if(in_array( "Football",$inerestArr)) echo "checked='checked'"; ?> name="interest[]" class="inter" value="Football" ><span class="label">Football</span>

                                    <input type="checkbox" name="interest[]" <?php if(in_array( "Movie",$inerestArr)) echo "checked='checked'"; ?> value="Movie"class="inter"><span class="label">Movie</span>

                                    <input type="checkbox" name="interest[]" <?php if(in_array( "Reading",$inerestArr)) echo "checked='checked'"; ?> value="Reading" class="inter"><span class="label">Reading
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
                                        <option value="India" <?php if ($row[ 'COUNTRY']=='India' ) echo "selected";?>>India</option>
                                        <option value="US" <?php if ($row[ 'COUNTRY']=='US' ) echo "selected";?>>US</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><span class="label">States<span class="error">*</span></span>
                                </td>
                                <td>
                                    <select id="state" name="state" class="fsize" <?php if ($state) { echo " selected"; } ?> value="" disabled>
                                        <option value=" ">
                                            <?php  if ($row['STATE']) echo $row['STATE'];?>
                                        </option>

                                </td>
                            </tr>
                            <tr>
                                <td valign="top"><span class="label">Address<span class="error">*</span></span>
                                </td>
                                <td><span class="tarea"><textarea name="address" rows="4" cols="28" id='address'><?php echo $row['ADDRESS'];?></textarea></span>
                            </tr>

                        </table>

                    </div>

                </div>
                <button type="button" onclick="ajax(this.id)" id="update" class="s-button" name="subscribe">
                    <center>SUBSCRIBE</center>
                    <?php if (isset($_POST['subscribe'])) {
   echo "<script type='text/javascript'>tab2();</script>";
  } ?>
                </button>


                </td>
                </tr>
            </form>

        </div>
        <div class="err" id="errormsg">
</body>

</html>