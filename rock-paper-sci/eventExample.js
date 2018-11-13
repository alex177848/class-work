(<link href="Event Examples.css" rel="stylesheet" type="text/css">

var x = 0;
var y = 0;
var z = 0;

window.onload = funtion(){
	var moveDiv = .getElementById("move");
	var enterDiv = .getElementById("enter");
	var overDiv = .getElementById("over");
	var clickDiv = .getElementById("click");
	
	moveDiv.onmousemove = myMoveFunction;
	enterDiv.onmousesenter = myEnterFunction;
	coverDiv.onmouseover = myOverFunction;
	clickDiv.onmousedown = myClickfunction;
}

function myMoveFunction(e) {
    document.getElementById("demo").innerHTML = z+=1;
}

function myEnterFunction(e) {
    document.getElementById("demo2").innerHTML = x+=1;
}

function myOverFunction(e) {
    document.getElementById("demo3").innerHTML = y+=1;
}

function myOverFunction(e) {
    document.getElementById("demo4").innerHTML = y+=1;
}


function myClickfunction(e){
	document.getElementById("demo4").innerHTML = "button clicked is;"+ e.button + '<br>';
	document.getElementById("demo4").innerHTML += "offsetX is"+ e.offsetX+ '<br>';
	document.getElementById("demo4").innerHTML += "offsetY"+ offsetY+ '<br>';
	document.getElementById("demo4").innerHTML += "shift key is pressed" + e.getModifierstate('shift')+ '<br>';
	
}
