canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(100, 100, 50, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouseX = e.clientX-canvas.offsetLeft;
    mouseY = e.clientY-canvas.offsetTop;

    console.log("X =" + mouseX + ",Y =" + mouseY);
    
    circle(mouseX, mouseY);
}

function circle(mouseX, mouseY){

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouseX, mouseY, 50, 0, 2*Math.PI);
    ctx.stroke();
    
}

    