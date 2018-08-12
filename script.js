var image = document.getElementById("ImageOne");
var graphImage = document.getElementById("ImageTwo");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var needle = document.getElementById("iconMeter");

function changeRed()
{   
    box1.style.width = "180px";
    box2.style.width = "300px";
    box3.style.width = "280px";
    box4.style.width = "210px";
    box5.style.width = "190px";
    box1.style.backgroundColor = "red";
    box2.style.backgroundColor = "red";
    box3.style.backgroundColor = "red";
    box4.style.backgroundColor = "red";
    box5.style.backgroundColor = "red";
    needle.style.transform = "rotate(70deg)";
    if (image.getAttribute('src'))
    {
        image.src = "red.jpg"
        graphImage.src = "red-graph.png"
    }
}
function changeBlue()
{
    box1.style.width = "300px";
    box2.style.width = "280px";
    box3.style.width = "320px";
    box4.style.width = "240px";
    box5.style.width = "200px";
    box1.style.backgroundColor = "blue";
    box2.style.backgroundColor = "blue";
    box3.style.backgroundColor = "blue";
    box4.style.backgroundColor = "blue";
    box5.style.backgroundColor = "blue";  
    needle.style.transform = "rotate(110deg)"; 
    if (image.getAttribute('src'))
    {
        image.src = "blue.jpg"
        graphImage.src = "blue-graph.png"
    }
}
function changeGrey()
{   
    box1.style.width = "280px";
    box2.style.width = "160px";
    box3.style.width = "220px";
    box4.style.width = "300px";
    box5.style.width = "230px";
    box1.style.backgroundColor = "grey";
    box2.style.backgroundColor = "grey";
    box3.style.backgroundColor = "grey";
    box4.style.backgroundColor = "grey";
    box5.style.backgroundColor = "grey";
    needle.style.transform = "rotate(100deg)"; 
    if (image.getAttribute('src'))
    {
        image.src = "grey.jpg"
        graphImage.src = "grey-graph.png"
    }
}
function changeSilver()
{
    box1.style.width = "230px";
    box2.style.width = "320px";
    box3.style.width = "290px";
    box4.style.width = "210px";
    box5.style.width = "300px";
    box1.style.backgroundColor = "silver";
    box2.style.backgroundColor = "silver";
    box3.style.backgroundColor = "silver";
    box4.style.backgroundColor = "silver";
    box5.style.backgroundColor = "silver";
    needle.style.transform = "rotate(90deg)"; 
    if (image.getAttribute('src'))
    {
        image.src = "silver.jpg"
        graphImage.src = "silver-graph.png"
    }
}

