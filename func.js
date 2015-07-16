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