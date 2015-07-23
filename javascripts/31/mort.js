function calc(){

	var p=parseFloat(document.getElementById('l').value);
	var r=parseFloat(document.getElementById('rr').value);
	var n=parseFloat(document.getElementById('m').value);
	var e=parseFloat(document.getElementById('em').value);
	r=r/1200;
	var temp=Math.pow((1+r),n);

	if(isNaN(r)){
		alert("Please provide a rate of interest");
	}
	else{

		if(isNaN(p)){
			loan=(e*(temp-1))/(r*temp);	
			document.getElementById('l').value=Math.round(loan);
		}
		else if(isNaN(e)){
			emi=(p*r*temp)/(temp-1);
			document.getElementById('em').value=Math.round(emi);
		}
		else if(isNaN(n)){
			month=(Math.log(e/(e-(p*r)))/(Math.log(1+r)));
			document.getElementById('m').value=Math.round(month);
		}
	}	


	
	
}