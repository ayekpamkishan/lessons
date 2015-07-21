function create(id) {
	var maindiv = document.createElement("div");
	maindiv.id = "md";
	maindiv.className = "md";
	document.getElementsByTagName("body")[0].appendChild(maindiv);
	for(i=0;i<24;i++){
		var sdivs = document.createElement('div');
		sdivs.id = "sd"+i;
		sdivs.style.display="inline-block";
		sdivs.style.margin = "0% 0% 0% 0%";
		sdivs.style.padding = "3% 3% 1% 0%";
		maindiv.appendChild(sdivs);
		if(id =="add")
		add(sdivs.id);
		else if(id =="sub")
			difference(sdivs.id);
	}
}
function add(id) {
	var a = Math.round(99*Math.random());
	var b = Math.round(99*Math.random());
	r = a + b; 
	document.getElementById(id).innerHTML = a + "</br>" + "+ " + b + "</br>" + "<input type=text id=re  onkeydown=cursor(this) onkeyup=validate("+r+",this.value,this)>";
}
function difference(id) {
	var a = Math.round(99*Math.random());
	var b = Math.round(99*Math.random());
	r = a - b;
	document.getElementById(id).innerHTML = a + "</br>" + "- " + b + "</br>" + "<input type=text id=re  onkeydown=cursor(this) onkeyup=validate("+r+",this.value,this)>";
}
function validate(sum,input,idd){
	if(sum==input)
		idd.style.background="green";
	else
		idd.style.background="red";
}
function cursor(element){
	if(element.setSelectionRange){
		element.setSelectionRange(0,0);
	}
}
