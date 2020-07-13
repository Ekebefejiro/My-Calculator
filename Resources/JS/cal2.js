alert('hello');
var txt=document.getElementById('txt');
function pushBtn(obj){
	var pressed=obj.innerHTML;
	if(pressed== "="){
		txt.innerHTML=eval(txt.innerHTML);
	}
	else if(pressed=="clr"){
txt.innerHTML="0";
	 }
	else{
	if(txt.innerHTML=="0"){
     txt.innerHTML=pressed;
	}
	else{
		txt.innerHTML+=pressed;
	}
}
}