song1="";
song2="";
song1_status="";
song2_status="";

rightWristX=0;
rightWristY=0;

leftWristX=0;
leftWristY=0;
function preload(){
    song1=loadSound("Dandelions(PaglaSongs).mp3");
    song2=loadSound("Bones(PaglaSongs).mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song.play();
    song.setVolume(1);
	song.rate(1);
}
function gotPoses(results){
      if(results.length>0){
        console.log(results);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX =" + rightWristX + "rightWristY" + rightWristX);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX + "leftWristY" + leftWristX);
      }
}