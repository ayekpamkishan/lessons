function tab1() {
    document.getElementById("news").style.color = "blue";
    document.getElementById("sub").style.color = "black";
    document.getElementById("news").style.background = "#E5EFFF";
    document.getElementById("sub").style.background = "none";
    document.getElementById("left").style.display = "block";
    document.getElementById("right").style.display = "block";
    document.getElementById("lern").style.display = "block";
    document.getElementById("form").style.display = "none";
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("rst").style.display = "none";
}

function tab2() {
    document.getElementById("news").style.color = "black";
    document.getElementById("sub").style.color = "blue";
    document.getElementById("sub").style.background = "#E5EFFF";
    document.getElementById("news").style.background = "none";
    document.getElementById("left").style.display = "none";
    document.getElementById("right").style.display = "none";
    document.getElementById("lern").style.display = "none";
    document.getElementById("form").style.display = "block";
    document.getElementById("subscribe").style.display = "block";
    document.getElementById("rst").style.display = "block";
}


function jsonval() {

    var interest = "";
    var name = document.form1name.name.value;
    var email = document.form1name.email.value;
    var mobile = document.form1name.mobile.value;
    var sex = document.form1name.sex.value;
    var inputElements = document.getElementsByClassName('inter');
    for (var i = 0; inputElements[i]; ++i) {
        if (inputElements[i].checked) {

            interest = interest + inputElements[i].value + " ";
        }
    }
    var country = document.form1name.country.value;
    var address = document.form1name.address.value;
    var object = [];
    var array = [];
    object.name = name;
    object.email = email;
    object.mobile = mobile;
    object.sex = sex;
    object.interest = interest;
    object.country = country;
    object.address = address;


    JSON.stringify(object);



    console.log(object);

}

function State(country) {
    var x;
    var list = document.getElementById("state");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    if (country == "India") {
        x = ["", "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"];
    }
    if (country == "US") {
        x = ["", "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
    }
    document.getElementById("state").disabled = false;
    for (i = 0; i < x.length; i++) {
        var s = document.getElementById("state");
        var option = document.createElement('option');
        option.value = x[i];
        option.label = x[i];
        s.add(option);
    }
}

function ajax() {
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("phone").value;
    var sex = document.getElementsByName("sex");
    if(sex[0].checked)
        sex="male";
    if(sex[1].checked)
        sex="female";
    var hobby = document.getElementsByName("interest[]");
    var  interest = "";
       for (var i = 0, n = hobby.length; i < n; i++) {
           if (hobby[i].checked) {
               interest += hobby[i].value + ",";
           }
       }

    var country = document.getElementById("country").value;
    var state = document.getElementById("state").value;
    var address = document.getElementById("address").value;
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("errormsg").innerHTML = xmlhttp.responseText;
        }
    }
    var parameters = "name=" + name + "&email=" + email+ "&mobile=" + mobile + "&sex=" + sex + "&interest=" + interest + "&country=" + country + "&state=" + state  + "&address=" + address;
    xmlhttp.open("POST", "validate.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(parameters);
}




