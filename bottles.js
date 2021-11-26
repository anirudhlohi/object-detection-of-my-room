img = "";
Status = "";
objects = [];
function preload(){
img = loadImage("bottles.jpg");
}

function setup(){
canvas = createCanvas(640,420);
canvas.center();
objectDetector = ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML =  "Status : Detecting Objects";
}

function draw(){
  image(img,0,0,640,420);

  if(Status != ""){
    for(i = 0; i < objects.length;i++){
document.getElementById("status").innerHTML = "Objects Detected";
document.getElementById("no_objects").innerHTML = "3 out of the 5 objects are identified."
      percent = floor(objects[i].confidence * 100);
      fill("#fc0303");
      text(objects[i].label + " " + percent+ "%",objects[i].x+20,objects[i].y+20);
      noFill();
      stroke("#fc0303");
      rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
  }
}
function modelLoaded(){
  console.log("Model Loaded.");
  Status = true;
  objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    objects = results
  }
}
function back(){
    window.location = "index.html"
}