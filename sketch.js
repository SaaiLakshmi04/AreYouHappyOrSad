var video;
var classifier;
var label;

function preload() {
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ORo5x_aqD/model.json');
}
function setup() {
    createCanvas(640,520);
    video=createCapture(VIDEO);
    video.hide();
    classifyVideo();
}
 function classifyVideo() {
     classifier.classify(video,(err,res) =>{
         if(err){
             console.error(err);
         }
         label=res[0].label;
         classifyVideo();
     });
 }
 function draw() {
     background(0);
     image(video,0,0); //0,0 is x,y on canvas-top left corner
     textSize(50);
     fill(200);
     text(label,width/2,height-10);
     if(label == 'Happy'){
     text('😁',width/2,height/2);
    }
    else
    text('😟',width/2,height/2);
 }