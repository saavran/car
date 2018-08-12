var image = document.getElementById("ImageOne");
var graphImage = document.getElementById("ImageTwo");

function changeRed()
{
    
    if (image.getAttribute('src'))
    {
        image.src = "red.jpg"
        graphImage.src = "red-graph.png"
    }
}
function changeBlue()
{
    
    if (image.getAttribute('src'))
    {
        image.src = "blue.jpg"
        graphImage.src = "blue-graph.png"
    }
}
function changeGrey()
{
    
    if (image.getAttribute('src'))
    {
        image.src = "grey.jpg"
        graphImage.src = "grey-graph.png"
    }
}
function changeSilver()
{
    
    if (image.getAttribute('src'))
    {
        image.src = "silver.jpg"
        graphImage.src = "silver-graph.png"
    }
}

