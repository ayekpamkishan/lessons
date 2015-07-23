function timediff () {
	var sh= document.getElementById('shr').value;
	var sm= document.getElementById('smin').value;
	var ss= document.getElementById('ssec').value;
	var eh= document.getElementById('ehr').value;
	var em= document.getElementById('emin').value;
	var es= document.getElementById('esec').value;
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
	document.getElementById('rsec').value=s;
	
	document.getElementById('rmin').value=m;
	document.getElementById('rhr').value=h;
	
	
}

function caldate(){
	var d11= parseInt(document.getElementById('d1').value);
	var m11= parseInt(document.getElementById('m1').value);
	var y11= parseInt(document.getElementById('y1').value);
	var d22= parseInt(document.getElementById('d2').value);
	var m22= parseInt(document.getElementById('m2').value);
	var y22= parseInt(document.getElementById('y2').value);
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
	


	document.getElementById('d3').value=d+" days";
	document.getElementById('m3').value=m +" months";
	document.getElementById('y3').value=y+" years";

}