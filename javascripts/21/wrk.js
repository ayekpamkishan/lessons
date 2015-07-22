var result=0;
var flag =1;
var operator = "";
var temp;
var memory=0;
function press (n){

      if (flag==1) {
          document.getElementById("output").value=n;
          flag =0;
      }
     else 
          document.getElementById("output").value+=n;
     
    }
function calc(op) {
  var todo = document.getElementById("output").value;
      
      if (op != "=" && op != "m+" && op != "m-")
      {
         temp=todo;
          operator=op;
          document.getElementById("output").value=operator;
      }
      else
      {
        
        if ( "-" == operator ){
          
            result = parseFloat(temp)-parseFloat(document.getElementById("output").value);
          }
        else if ( "+" ==operator ){
          
           result = parseFloat(temp)+parseFloat(document.getElementById("output").value);
         }
        
        else if ( "/"== operator )
            {
              
              result = parseInt(parseInt(temp)/parseInt(document.getElementById("output").value));
            }
        else if ( "*" == operator )
            {
              
              result =parseFloat(temp)*parseFloat(document.getElementById("output").value);
            }
        else if ( "%" == operator )
            {
              
              result =parseInt(temp)%parseInt(document.getElementById("output").value);
            }
        else if ( "% of" == operator )
            {
              
              result =(parseFloat(document.getElementById("output").value)/100)*parseFloat(temp);
            }
        else if ( "m+" == op )
        {
            
            
            result =memory+parseFloat(document.getElementById("output").value);
        }
        else if ( "m-" == op )
        {
            
            result =memory-parseFloat(document.getElementById("output").value);
      }

          
      operator="";
      document.getElementById("output").value=result;
      memory=result;
        
  }
  flag=true;
}
function memo(){
    document.getElementById("output").value=memory;

}
function clearscreen() {
    document.getElementById("output").value=" ";
    operator=" ";
}
function memoclean(){
        memory=0;
}
function negate(){
      document.getElementById("output").value= document.getElementById("output").value* -1;
}
