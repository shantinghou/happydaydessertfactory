
var canvas

function setup() {
    canvas = createCanvas(windowWidth, 860);
    canvas.position(0, 700);
    canvas.style('z-index', '-100');
    // canvas.translate(0, -800);
    
}

function draw(){
    clear();
    fill(246, 56, 114);

    var d = mouseX-width/2;
    
    noStroke();
    beginShape();
    vertex(width/2+d, height);
    curveVertex(width/2+d, height);
    curveVertex(2*width/3+d, 2*height/3);
    curveVertex(3*width/4+d, 1*height/3);
    curveVertex(2*width/3+d, 0);
    vertex(2*width/3+d, 0);
    // close shape
    vertex(width, 0);
    vertex(width, height);
    vertex(width/2, height);
    endShape(); 
    fill(200, 200, 200);
    textSize(20);
    textFont('Syne');
    if (d>50){
        text("<— discount code", 2*width/3+d, 2*height/3+100);
    }
}
