img = "";
Status = "";
object = [];
function preload(){
img = loadImage("bedroom.jpg");
}

function setup(){
canvas = createCanvas(620,440);
canvas.center();
objectDetector = ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML =  "Status : Detecting Objects";
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
    object = results;
  }
}

function draw(){
  image(img,0,0,620,440);

  if(Status != ""){
    for(i = 0;i < object.length;i++){
      document.getElementById("status").innerHTML =  "Status :  Objects Detected";
document.getElementById("no_objects").innerHTML = "2 out of the 6 objects are identified."
      fill("#ff0000");
      percent = floor(object[i].confidence * 100);
      text(object[i].label + " " + percent + "%",object[i].x-70,object[i].y-80);
     noFill();
     stroke("#ff0000");
     rect(object[i].x-80,object[i].y-100,object[i].width-50,object[i].height);
    
    
    }
  }
}

function back(){
    window.location = "index.html"
}