status = "";
objectinput = "";

function setup() {
    canvas = createCanvas(640, 400);
    canvas.center();
    video.createCapture(VIDEO);
    video.center();
    video.hide();
}

function startdetect() {
    objectDetection = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Object";
    objectinput = document.getElementById("objectinp").value;
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
}

function draw() {
    image(video, 0, 0, 640, 400);
}