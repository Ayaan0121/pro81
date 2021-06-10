//canvas
canvas=document.getElementById("myCanvas");
//variable ctx
ctx = canvas.getContext("2d");
//colur setting var
color ="red"
//style to circle
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
//function
canvas.addEventListener("mousedown", my_mouseDown);
//function mouse down
function my_mouseDown(e){
    color=document.getElementById("colour").value;
    mouse_x=228;
    mouse_y=267;
    mouse_2x=314;
    mouse_2y=265;
    mouse_3x=400;
    mouse_3y=255;
    mouse_4x=278;
    mouse_4y=312;
    mouse_5x=371;
    mouse_5y=305;
    circle(mouse_x,mouse_y );
    circle(mouse_2x,mouse_2y );
    circle(mouse_3x,mouse_3y );
    circle(mouse_4x,mouse_4y );
    circle(mouse_5x,mouse_5y );
    console.log("x ="+ mouse_x + "  y =" + mouse_y)
    
}
//function circle
function  circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}
 //celar
 function clearArea(){
ctx.clearRect(0,0,canvas.width,canvas.height);
 }