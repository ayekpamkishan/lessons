(function total () {

function createElement(tagName, parentElement, attList, style, events, label){
	 var ele = document.createElement(tagName), attrName, styleName,eventName;
	 parentElement.appendChild(ele);

	 for( attrName in attList){
	 	ele[attrName]=attList[attrName];
	 }
	 for( styleName in style){
	 	ele.style[styleName]=style[styleName];
	 }
	 for(eventName in events){
	 	ele.addEventListener(eventName, events[eventName]);
	 }

	if(label!=null){
		ele.appendChild(document.createTextNode(label));
	}
	 return ele;
}

createElement("div", document.body, {id: "maindiv"}, {position: "relative", height:"60%", width:"75%", top:"15%"}, {}, "");
createElement("H3", maindiv, {}, {}, {}, "Select a Calculator");

createElement("input", maindiv, {id: "radio1",type: "radio",name:'cname',}, {}, {click: function (){
	clearDiv(); basic(); }}, "");

createElement("input", maindiv, {id: "radio2",type: "radio",name:'cname'}, {}, {click: function (){clearDiv(); dt();}}, "Kishan");

createElement("input", maindiv, {id: "radio3",type: "radio",name:'cname'}, {}, {click: function (){clearDiv(); mort();}}, "Kishan");

var pl,i;
 function basic(){
 		var label=[['MC','M-','M+','MR'],['%','(+ / -)','REM','CLS'],
 		['+','9','8','7'],['-','6','5','4'],
 		['*','3','2','1'],['/','=','0','.']];

		createElement("div", document.body,{id: "basicDiv"},{position: "absolute", height:"50%", width:"30%",top:"20%"},{},null);
		createElement('input',basicDiv,{id:"output"},{width:"74.5%",height:'10%',border:'10px solid grey'},null);

		table=createElement('table',basicDiv,{id:'basicTable'},{height:"100%",width:"80%",backgroundColor: "grey"}," ");	
		table.cellSpacing=10;
			for(var i=0;i<6;i++)
			{
				row=table.insertRow(i);
				for (var j = 0; j < 4; j++) 
				{
						var a=label[i][j];
						
						createElement("button", row.insertCell(0), {id: label[i][j],type: "submit"}, {width:"100%", height:"100%"}, {click:invokeBasic}, label[i][j]);


				}
				
			}
function invokeBasic()
{
	if(this.id=='CLS')
		clearscreen(this.id);
	else if(this.id=='MR')
		memo(this.id);
	else if(this.id=='MC')
		memoclean(this.id);
	else if(this.id=='REM')
		calc('%');
	else if(this.id=='%')
		calc('% of');
	else if(this.id=='+/-')
		negate(this.id);
	else if(this.id=='+'||this.id=='-'||this.id=='/'||this.id=='*'||this.id=='='||this.id=='M+'||this.id=='M-')
		calc(this.id);
	else
		press(this.id);
}			
//basic
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
      
      if (op != "=" && op != "M+" && op != "M-")
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
        else if ( "M+" == op )
        {
            
            
            result =memory+parseFloat(document.getElementById("output").value);
        }
        else if ( "M-" == op )
        {
            
            result =memory-parseFloat(document.getElementById("output").value);
      }

          
      operator="";
      document.getElementById("output").value=result;
      memory=result;
        
  }
  flag=1;
}
function memo(){
    document.getElementById("output").value=memory;

}
function clearscreen() {
    document.getElementById("output").value=" ";
    
}
function memoclean(){
        memory=0;
}
function negate(){
      document.getElementById("output").value= document.getElementById("output").value* -1;
}//basic end
		

}

//DATE AND TIME
function dt(){
			createElement("div", document.body,{id: "dateDiv"},{position: "absolute", height:"60%", width:"75%", top:"20%"},{},"");
			var text=['Start Time','End Time','Difference'];//TIME DIFFERENCE
			var id=[['s1','m1','h1'],['s2','m2','h2'],['s3','m3','h3'],];
			createElement("p",dateDiv,{},{color: '#0000FF'},{},"ENTER A START TIME AND AN END TIME");
			table=createElement('table',dateDiv,{id:'dateTable'},{backgroundColor: "grey"},null);	
					table.cellSpacing=10;
			for(var i=0;i<3;i++)
			{
				row=table.insertRow(i);
				
				for (var j = 0; j < 3; j++) 
				{
						
						if(j===0)
							pl="sec";
						else if(j==1)
							pl="min";
						else
							pl="hr";
						createElement("input", row.insertCell(0), {placeholder:pl, id:id[i][j]}, {width:"100%"}, {},null);

				}
				span= createElement('span',row.insertCell(0),{},{},null);
				span.appendChild( document.createTextNode(text[i]),null);
				
			}
			createElement("button", table.insertRow(i).insertCell(0), {}, {width:"100%"}, {click:function(){timediff();}},"Calculate");//END OF TIME DIFFERENCE

			var txt=['Start Time','Duration','Added time'];//TIME ADD
			var idd=[['s11','m11','h11'],['s22','m22','h22'],['s33','m33','h33'],];
			createElement("p",dateDiv,{},{color: '#0000FF'},{},"ENTER A START TIME AND A TIME DURATION");
			table=createElement('table',dateDiv,{id:'dateTable'},{backgroundColor: "grey"},null);	
					table.cellSpacing=10;
			for(i=0;i<3;i++)
			{
				row=table.insertRow(i);
				
				for (var k = 0; k < 3; k++) 
				{
						
						if(k===0)
							pl="sec";
						else if(k==1)
							pl="min";
						else
							pl="hr";
						createElement("input", row.insertCell(0), {placeholder:pl, id:idd[i][k]}, {width:"100%"}, {},null);

				}
				span= createElement('span',row.insertCell(0),{},{},null);
				span.appendChild( document.createTextNode(txt[i]),null);
				
			}
			createElement("button", table.insertRow(i).insertCell(0), {}, {width:"100%"}, {click:function(){timeadd();}},"Calculate");//END OF TIME ADD

			var tex=['Start Date','End Date','Days Within'];//DATE DIFFERENCE
			var iid=[['year1','month1','date1'],['year2','month2','date2'],['year3','month3','date3'],];
			createElement("p",dateDiv,{},{color: '#0000FF'},{},"ENTER A START DATE AND AN END DATE");
			table=createElement('table',dateDiv,{id:'dateTable'},{backgroundColor: "grey"},null);	
					table.cellSpacing=10;
			for(i=0;i<3;i++)
			{
				row=table.insertRow(i);
				
				for (var l = 0; l < 3; l++) 
				{
						
						if(l===0)
							pl="yyyy";
						else if(l==1)
							pl="mm";
						else
							pl="dd";
						createElement("input", row.insertCell(0), {placeholder:pl, id:iid[i][l]}, {width:"100%"}, {},null);

				}
				span= createElement('span',row.insertCell(0),{},{},null);
				span.appendChild( document.createTextNode(tex[i]),null);
				
			}
			createElement("button", table.insertRow(i).insertCell(0), {}, {width:"100%"}, {click:function(){caldate();}},"Calculate");//END OF DATE DIFFERENCE


function timediff () {
	var sh= parseInt(document.getElementById('h1').value);
	var sm= parseInt(document.getElementById('m1').value);
	var ss= parseInt(document.getElementById('s1').value);
	var eh= parseInt(document.getElementById('h2').value);
	var em= parseInt(document.getElementById('m2').value);
	var es= parseInt(document.getElementById('s2').value);
	var s,m,h;
	if(es>=ss)
		s=es-ss;
	else
	{
		s=(es+60)-ss;
		em-=1;
	}

	if(em>=sm)
		m=em-sm;
	else
	{
		m=(em+60)-sm;
		eh-=1;
	}
	if(eh>=sh)
		h=eh-sh;
	else
		h=(eh-sh)+24;
	document.getElementById('s3').value=s+" sec";
	
	document.getElementById('m3').value=m+" min";
	document.getElementById('h3').value=h+" hr";
	
	
}//end of timediff
function timeadd() {
	var hh= parseInt(document.getElementById('h11').value);
	var mm= parseInt(document.getElementById('m11').value);
	var ss= parseInt(document.getElementById('s11').value);
	var hhh= parseInt(document.getElementById('h22').value);
	var mmm= parseInt(document.getElementById('m22').value);
	var sss= parseInt(document.getElementById('s22').value);
	var s,m,h;
	while(hhh>24)
	{
		hhh-=24;
	}
	s=ss+sss;
	m=mm+mmm;
	h=hh+hhh;
	if(s>=60)
	{
		m++;
		s-=60;
	}
	if(m>=60)
	{
		h++;
		m-=60;
	}
	if(h>=24)
		h=(h%24);
	document.getElementById('h33').value=h+" hr";
	document.getElementById('m33').value=m+" min";
	document.getElementById('s33').value=s+" sec";
	
	
}//end of timeadd
function caldate(){//caldate
	var d11= parseInt(document.getElementById('date1').value);
	var m11= parseInt(document.getElementById('month1').value);
	var y11= parseInt(document.getElementById('year1').value);
	var d22= parseInt(document.getElementById('date2').value);
	var m22= parseInt(document.getElementById('month2').value);
	var y22= parseInt(document.getElementById('year2').value);
	var d, m, y,swap;
	if(d22>=d11)
		d=d22-d11;
	else
	{
		d=(d22+30)-d11;
		m22-=1;
	}
	
	if(m22>=m11)
		m=m22-m11;
	else
	{
		m=(m22+12)-m11;
		y22-=1;
	}
	
		y=y22-y11;
	


	document.getElementById('date3').value=d+" days";
	document.getElementById('month3').value=m +" months";
	document.getElementById('year3').value=y+" years";

}//end of caldate

		}



function mort(){
			createElement("div", document.body,{id: "mortDiv"},{position: "absolute", height:"50%", width:"25%",top:"20%"},{},null);


			table=createElement('table',mortDiv,{'id':'mort'},{backgroundColor: "grey"}," ");
			label=['Loan Amount','Rate Of Interest','Number Of Month','EMI'];
    		id=['Loan','Rate','Month','EMI'];

			table.cellSpacing=10;
			for(var i=0;i<4;i++)
			{
				row=table.insertRow(i);
				createElement('input',row.insertCell(0),{'id':id[i]},{},null);
				span= createElement('span',row.insertCell(0),{},{},null);
				span.appendChild( document.createTextNode(label[i]),null);
			}
			createElement("button",table.insertRow(i).insertCell(0), {id: "calMort",type: "submit"}, {left:"20%"}, {click: function (){mortC();}}, "Calculate");
			createElement("p", mortDiv, {id: "guide"}, {color: '#0000FF'}, {}, "Instructions: Enter any two value with a rate of interest to calculate the fourth value");
			function mortC(){

					var p=parseFloat(document.getElementById('Loan').value);
					var r=parseFloat(document.getElementById('Rate').value);
					var n=parseFloat(document.getElementById('Month').value);
					var e=parseFloat(document.getElementById('EMI').value);
					r=r/1200;
					var temp=Math.pow((1+r),n);

					if(isNaN(r)){
						alert("Please provide a rate of interest");
					}
					else{

						if(isNaN(p)){
							loan=(e*(temp-1))/(r*temp);	
							document.getElementById('Loan').value=Math.round(loan);
						}
						else if(isNaN(e)){
							emi=(p*r*temp)/(temp-1);
							document.getElementById('EMI').value=Math.round(emi);
						}
						else if(isNaN(n)){
							month=(Math.log(e/(e-(p*r)))/(Math.log(1+r)));
							document.getElementById('Month').value=Math.round(month);
						}
					}	

				}
		}


function clearDiv(){
		
		var p=document.getElementsByTagName('div');
		if(p.length>1)//if there is any div other then the main div
		{
			if(document.getElementById('basicDiv')){
				document.getElementsByTagName('body')[0].removeChild(document.getElementById('basicDiv'));
			}
			
			if(document.getElementById('dateDiv'))
				document.getElementsByTagName('body')[0].removeChild(document.getElementById('dateDiv'));
			
			if(document.getElementById('mortDiv'))
				document.getElementsByTagName('body')[0].removeChild(document.getElementById('mortDiv'));
		}
		
}		
		







for(i=1;i<4;i++){		
	
	var y = document.createElement("label");//label
	var t= i>1 ? (i>2 ? document.createTextNode("MORTGAGE") : document.createTextNode("DATE/TIME")) : (document.createTextNode("BASIC"));
	y.setAttribute("for", "radio"+i);
	y.appendChild(t);
	document.getElementById('maindiv').insertBefore(y,document.getElementById("radio"+i));//label


}
  
  							
    
					

})();
