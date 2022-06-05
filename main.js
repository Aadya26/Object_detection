Status ="";
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    object_Detecter= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting Objects";
}
img ="";
function preload()
{
img = loadImage('bedroom.jpg');
}
function draw()
{
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Bed", 90, 275);
    noFill();
    stroke("#FF0000");
    rect(80, 250 ,450 ,150);
    fill("#FF0000");
    text("Shelf", 460, 75);
    noFill();
    stroke("#FF0000");
    rect(450, 60 ,150 ,350);
}
function modelLoaded()
{
    console.log("Model Loaded!");
    Status= true;
    object_Detecter.detect(img,gotresult);
}
function gotresult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
    }
}
