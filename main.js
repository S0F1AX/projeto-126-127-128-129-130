musica1 = ""
musica2 = ""

function preload()
{
    musica1 = loadSound("devil in disguise.mp3");
    musica2 = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(500,410);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 500, 410);  
}