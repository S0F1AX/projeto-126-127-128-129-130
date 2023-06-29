musica1 = ""
musica2 = ""
esquerdaX = "";
direitaX = "";
esquerdaY = "";
direitaY = "";

function preload() {
    musica1 = loadSound("devil in disguise.mp3");
    musica2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(500, 410);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 500, 410);
}

function modelLoaded() {
    console.log("carregou!! yay!");
}

function gotPoses(results) {
    if (results.length > 0) 
    {
        console.log(results);

        esquerdaX = results[0].pose.leftWrist.x;
        esquerdaY = results[0].pose.leftWrist.y;

        direitaX = results[0].pose.rightWrist.x;
        direitaY = results[0].pose.rightWrist.y;
    }

}