song="";
rightwristX=0;
rightwristY=0;
leftwristX=0;
leftwristY=0;
function preload(){
    song=loadSound("music.mp3");
    }
function setup(){
canvas=createCanvas(600,600);
canvas.center();
webcam=createCapture(VIDEO);
webcam.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotposes);
}
function draw(){
image(webcam,0,0,600,600);

}
function modelLoaded(){
    console.log("model is loaded!")
}
function play(){
    song.play();
        song.volume(1);
    song.rate(1)
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
    rightwristX= results[0].pose.rightWrist.x;
    rightwristY= results[0].pose.rightWrist.y;
    leftwristX= results[0].pose.leftWrist.x;
    leftwristY= results[0].pose.leftWrist.y;
    }
}