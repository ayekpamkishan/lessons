function tab1()
  {
    document.getElementById("news").style.color="blue";
    document.getElementById("sub").style.color="black";
    document.getElementById("news").style.background="#E5EFFF";
    document.getElementById("sub").style.background="none";
    document.getElementById("left").style.display="block";
    document.getElementById("right").style.display="block";
    document.getElementById("lern").style.display="block";
    document.getElementById("form").style.display="none";
    document.getElementById("subscribe").style.display="none";
    document.getElementById("rst").style.display="none";
  }
  function tab2()
  {
    document.getElementById("news").style.color="black";
    document.getElementById("sub").style.color="blue";
    document.getElementById("sub").style.background="#E5EFFF";
    document.getElementById("news").style.background="none";
    document.getElementById("left").style.display="none";
    document.getElementById("right").style.display="none";
    document.getElementById("lern").style.display="none";
    document.getElementById("form").style.display="block";
    document.getElementById("subscribe").style.display="block";
    document.getElementById("rst").style.display="block";
  }

 function check(e)
{
  var phone=document.getElementById("phone");
  phone.style.borderColor ="transparent";
    var no=e.which;
    if (no<48||no>57)
            return false;
    
}
function validno()
    {
        var phone=document.getElementById("phone");
        var n = phone.value.charAt(0);
        if (n=="7" || n=="8" || n=="9")
        {     
            if (phone.value.length<10)
              {window.alert("MOBILE NUMBER SHOULD BE 10 DIGIT"); 
            phone.style.borderColor = "red";}
              
        }
        else
          {
            window.alert("MOBILE NUMBER SHOULD BEGIN WITH 9, 8 OR 7");
             phone.style.borderColor = "red";
           }
    }

function jsonval()
{

  var interest="";
  var name=document.form1name.name.value;
  var email=document.form1name.email.value;
  var sex=document.form1name.sex.value;
  var inputElements = document.getElementsByClassName('inter');
  for(var i=0; inputElements[i]; ++i)
  {
     	  if(inputElements[i].checked)
        {
 
          interest= interest+inputElements[i].value+" ";
          //console.log(interest);	

        }
  }
  var country=document.form1name.country.value;
  var address=document.form1name.address.value;
  var object=[];
  var array=[];
  object.name=name;
  object.country=country;
  object.email=email;
  object.address=address;
  object.sex=sex;
  object.arr=interest;
  JSON.stringify(object);



console.log(object);

}

function State(country)
{
  var x;
  var list = document.getElementById("state");
  while (list.hasChildNodes()) 
  {   
    list.removeChild(list.firstChild);
  }
  if(country=="IN"){
     x=["Kolkata"];
  }
  if(country=="US"){
       x=["Alabama"];
  }
  document.getElementById("state").disabled=false;
  for(i=0;i<x.length;i++)
  {
    var s=document.getElementById("state");
    var option=document.createElement('option');
    option.value=x[i];
    option.label=x[i];
    s.add(option);
  }
}
