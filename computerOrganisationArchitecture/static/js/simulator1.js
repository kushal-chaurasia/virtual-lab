

function sh(x) {
	var y=document.getElementById(x).style.display;
	if(y=='none'){
	document.getElementById(x).style.display = "block";  }
	else{
	document.getElementById(x).style.display = "none";  }
}

function my(x) {
document.getElementById(x).style.display = "block";  
  document.getElementById(x).innerHTML = "Paragraph changed.";
}


function m() {
   document.getElementById("demo").style.display = "none";
}

function mo() {
   alert("CONTENT WILL BE HIDDEN");
}
function mm() {
	x=window.innerWidth;
	y=window.innerWidth;
   document.getElementById("demo").innerHTML = x+"px"+y+"px";
   var e = window.event;
    var X = e.clientX;
    var Y = e.clientY;
	document.getElementById("d").innerHTML = X+"px"+Y+"px";
}
function la(x) {
   document.getElementById(x).style.backgroundColor = '#dddddd';
}
function la1(x) {
   document.getElementById(x).style.backgroundColor = '#ddffff';
}

function asm(in1,op,st){
	
	
	
}