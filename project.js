function preload(){
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video=console.log(VIDEO);
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function PoseNet(results)
{
 

 }
