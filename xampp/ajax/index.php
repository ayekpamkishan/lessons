<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="my.css">
    <script src="func.js"></script>
</head>

 <body>       

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

            <form name="form1name" method="post">
                <div id="form" class="form1">
                    <h3><span class="h3">Subscription Form</span></h3>
                    <div class="formleft">
                        <table border="0" cellspacing="13" cellpadding="0">
                            <tr>
                                <td><span class="label">Name<span class="error">*</span></span>
                                </td>
                                <td>
                                    <input type="text" name="name" id="name" class="fsize" value="">
                                </td>
                            </tr>
                            <tr>
                                <td><span class="label">Email<span class="error">*</span></span>
                                </td>
                                <td>
                                    <input type="text" name="email" id="email" class="fsize" value="">
                                </td>
                            </tr>
                            <tr>
                                <td><span class="label">Mobile<span class="error">*</span></span>
                                </td>
                                <td>
                                    <input type="text" name="mobile" id="phone" class="fsize" value="">
                                </td>
                            </tr>
                            <tr>
                                <td><span class="label">Sex<span class="error">*</span></span>
                                </td>
                                <td>
                                    <input type="radio" name="sex" value="male"><span class="label">Male</span>
                                    <input type="radio" name="sex" value="female"><span class="label">Female</span>
                            </tr>
                            <tr>
                                <td><span class="label">Interest<span class="error">*</span></span>
                                </td>
                                <td>
                                    <input type="checkbox" name="interest[]" class="inter"  value="Football" ><span class="label">Football</span>

                                    <input type="checkbox" name="interest[]" value="Movie"class="inter"><span class="label">Movie</span>

                                    <input type="checkbox" name="interest[]" value="Reading" class="inter"><span class="label">Reading
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
                                    <select id="country" name="country" class="fsize" onchange="State(this.value)" value="">
                                        <option value=""> </option>
                                        <option value="India">India</option>
                                        <option value="US">US</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><span class="label">States<span class="error">*</span></span>
                                </td>
                                <td>
                                    <select id="state" name="state" class="fsize"  value="" disabled>
                                        <option value=""></option>

                                </td>
                            </tr>
                            <tr>
                                <td valign="top"><span class="label">Address<span class="error">*</span></span>
                                </td>
                                <td><span class="tarea"><textarea name="address" id="address" rows="4" cols="28"></textarea></span>
                            </tr>

                        </table>

                    </div>

                </div>
                <button type="reset" id="rst" class="r-button">
                    <center>RESET</center>
                </button>
                <button type="button" onclick="ajax()" id="subscribe" class="s-button" name="subscribe">
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
