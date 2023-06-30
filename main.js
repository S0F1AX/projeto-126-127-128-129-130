musica1 = ""
musica2 = ""
esquerdaX = "";
direitaX = "";
esquerdaY = "";
direitaY = "";
pontoPE = "";
pontoPD = "";
status1 = "";
status2 = "";

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

    status1 = musica1.isPlaying();

    status2 = musica2.isPlaying();

    fill("blue");
    stroke("blue"); 

    if(pontoPE > 0.2)
    {
        circle(esquerdaX, esquerdaY, 10);
        musica2.stop()

        if(status1 == false)
        {
            musica1.play()
            document.getElementById("elvis").innerHTML="Está tocando Devil In Disguise, por Elvis Presley";
        }
    }

    if(pontoPD > 0.2)
    {
        circle(direitaX, direitaY, 10);
        musica1.stop()

        if(status2 == false)
        {
            musica2.play()
            document.getElementById("elvis").innerHTML="Está tocando PEter Pan, estranho mais é";
        }
    }
    
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

        pontoPE = results[0].pose.keypoints[9].score;
        pontoPD = results[0].pose.keypoints[10].score;
    }

}