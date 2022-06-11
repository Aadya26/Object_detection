Status ="";
objects=[];
function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    object_Detecter= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";
}
img ="";
function preload()
{
img = loadImage('bedroom.jpg');
}
function draw()
{
    image(img,0,0,380,380);
    if(Status!="")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        object_Detecter.detect(img, gotresult);
        for(i=0; i<objects.length;i++)
        {
            document.getElementById("status").innerHTML="Status : Object Detected";
             fill(r,g,b);
            percent = floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x ,objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y , objects[i].width , objects[i].height);
        }
     }
}
function modelLoaded()
{
    console.log("Model Loaded!");
    Status= true;
    object_Detecter.detect(img, gotresult);
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
