function create(id) {
	var maindiv=document.createElement("div");
	maindiv.id="md";
	document.getElementsByTagName("body")[0].appendChild(maindiv);
	for(i=0;i<48;i++){
		var sdivs=document.createElement('div');
		sdivs.id="sd"+i;
		sdivs.style.display="inline-block";
		sdivs.style.width="5%";
		sdivs.style.margin="0% 0% 0% 0%";
		sdivs.style.padding="3% 3% 1% 0%";
		maindiv.appendChild(sdivs);
		if(id=="add")
		add(sdivs.id);
		else if(id=="sub")
			difference(sdivs.id);
	}
}
function add(id) {
	var a=Math.round(99*Math.random());
	var b=Math.round(99*Math.random());
	r=a+b; 
	document.getElementById(id).innerHTML= a + "</br>" + "+ " + b + "</br>" + "<input type=text id=a  onkeydown=cursor(this) onkeyup=validate("+r+",this.value,this)>";
}
function difference(id) {
	var a=Math.round(99*Math.random());
	var b=Math.round(99*Math.random());
	r=a-b;
	document.getElementById(id).innerHTML= a + "</br>" + "- " + b + "</br>" + "<input type=text id=s  onkeydown=cursor(this) onkeyup=validate("+r+",this.value,this)>";
}
function validate(sum,input,i){
	if(sum==input)
		i.style.background="green";
	else
		i.style.background="red";
}
function cursor(element){
	if(element.setSelectionRange){
		element.setSelectionRange(0,0);
	}
}
