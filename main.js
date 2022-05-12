function preload()
{

}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
  	video.size(800, 400);
	video.parent('canvas');

	poseNet = ml5.poseNet(video, modelLoaded);
  	poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log('Model Loaded!');
}

function gotPoses(results)
{
  if(results.length > 0)
  {

    rightWristY = results[0].pose.rightWrist.y;
    rightWristX = results[0].pose.rightWrist.x;
    scoreRightWrist =  results[0].pose.keypoints[10].score;
    console.log(scoreRightWrist);
  }
}

function draw()
{
	if(scoreRightWrist > 0.2)
  {
    fill("red");
    stroke("red");
    circle(rightWristX, rightWristY, 30);
  }
}