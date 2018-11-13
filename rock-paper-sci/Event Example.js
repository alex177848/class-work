<!DOCTYPE html>
<html>
<head><style>#ageConfirm, #guidanceFooter { display: none !important; }</style>
<style>
div {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    margin: 10px;
    float: left;
    padding: 30px;
    text-align: center;
    background-color: lightgray;
}

p {
    background-color: white;
}
</style>
</head>
<body>

<h3>This example demonstrates the difference between onmousemove, onmouseenter and onmouseover.</h3>

<p>The onmousemove event occurs every time the mouse pointer is moved over the div element.</p>

<p>The mouseenter event only occurs when the mouse pointer enters the div element. </p>

<p>The onmouseover event occurs when the mouse pointer enters the div element, and its child elements (p and span).</p>

<div onmousemove="myMoveFunction()">
  <p>onmousemove: <br> <span id="demo">Mouse over me!</span></p>
</div>

<div onmouseenter="myEnterFunction()">
  <p>onmouseenter: <br> <span id="demo2">Mouse over me!</span></p>
</div>

<div onmouseover="myOverFunction()">
  <p>onmouseover: <br> <span id="demo3">Mouse over me!</span></p>
</div>

<script>
var x = 0;
var y = 0;
var z = 0;

function myMoveFunction() {
    document.getElementById("demo").innerHTML = z+=1;
}

function myEnterFunction() {
    document.getElementById("demo2").innerHTML = x+=1;
}

function myOverFunction() {
    document.getElementById("demo3").innerHTML = y+=1;
}
</script>

</body>
</html>
