// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    background(225);

    // Hour arc
    let endHour = map(hr % 12, 0, 12, 0, TWO_PI) - HALF_PI;
    strokeWeight(14);
    stroke(255, 100, 100);
    noFill();
    arc(400, 300, 200, 200, -HALF_PI, endHour);

    // Minute arc
    let endMinute = map(min, 0, 60, 0, TWO_PI) - HALF_PI;
    strokeWeight(10);
    stroke(100, 255, 100);
    arc(400, 300, 300, 300, -HALF_PI, endMinute);

    // Second arc
    let endSecond = map(sec, 0, 60, 0, TWO_PI) - HALF_PI;
    strokeWeight(6);
    stroke(100, 100, 255);
    arc(400, 300, 400, 400, -HALF_PI, endSecond);

    // Log minute change
    if (frameCount % 60 == 0) {
        console.log(min);
    }
}
