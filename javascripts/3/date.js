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
	document.getElementById('rsec').value=s+" sec";
	
	document.getElementById('rmin').value=m+" min";
	document.getElementById('rhr').value=h+" hr";
	
	
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
function dayplus(){
	var d=parseInt(document.getElementById('dd1').value);
	var m=parseInt(document.getElementById('mm1').value);
	var y=parseInt(document.getElementById('yy1').value);
	var d1=parseInt(document.getElementById('dd2').value);
	d+=d1;
	while(d>30)
	{
		m++;
		d-=30;
	}
	while(m>12)
	{
		y++;
		m-=12;
	}

	document.getElementById('dd3').value=d;
	document.getElementById('mm3').value=m;
	document.getElementById('yy3').value=y;
}
function timeadd() {
	var hh= parseInt(document.getElementById('h1').value);
	var mm= parseInt(document.getElementById('mmm1').value);
	var ss= parseInt(document.getElementById('s1').value);
	var hhh= parseInt(document.getElementById('h2').value);
	var mmm= parseInt(document.getElementById('mmm2').value);
	var sss= parseInt(document.getElementById('s2').value);
	var s,m,h;
	while(hhh>24)
	{
		hhh-=24
	}
	s=ss+sss;
	m=mm+mmm;
	h=hh+hhh;
	alert(h);
	alert(m);
	alert(s);

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
	alert(h);
	alert(m);
	alert(s);
	document.getElementById('h3').value=h+" hr";
	document.getElementById('mmm3').value=m+" min";
	document.getElementById('s3').value=s+" sec";
	
	
}