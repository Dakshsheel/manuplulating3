difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

canvas = createCanvas(550, 450);
canvas.position(560, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
    background('#C691C2');
    fill('#F90093');
    textSize(difference);
    text('Dakshsheel', 50, 400);
}

function modelLoaded(){
    console.log('Pose Is Initilized!');
}

function gotPoses(results)
{
    if(results.length > 0)
{

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+ leftWristX +"rightWristX"+ rightWristX +"difference"+ difference );
    }
}


