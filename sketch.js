function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    background(255);
    save = createImg('unnamed.png')
    save.position(width - 60, 10)
    save.size(50, 50)
    save.mousePressed(canvassave)


    c = createImg('Black_circle.png')
    c.position(10, 10)
    c.size(50, 50)
    l = createImg('line.png')
    l.position(60, 10)
    l.size(50, 50)
    e = createImg('eraser.png')
    e.position(120, 10)
    e.size(50, 50)
    p = createImg('pen.png')
    p.position(180, 10)
    p.size(50, 50)
    ps = createSlider(0, 10, 1, 0.001)
    ps.position(240, 10)
    po = createSlider(0, 255, 255, 0.001)
    po.position(240, 30)
    pen = true;
    eraser = false;
    circl = false;
    lin = false;
    p.mousePressed(set0)
    e.mousePressed(set1)
    c.mousePressed(set2)
    l.mousePressed(set3)
}

function canvassave() {
    stroke(255);
    rect(180, 10, 50)
    rect(120, 10, 50)
    rect(60, 10, 50)
    rect(10, 10, 50)
    saveCanvas(cnv, 'myCanvas.jpg')
}
reload = false



function set0() {
    pen = true;
    eraser = false;
    circl = false;
    lin = false;

}

function set1() {
    pen = false;
    eraser = true;
    circl = false;
    lin = false;
}

function set2() {
    pen = false;
    eraser = false;
    circl = true;
    lin = false;
}

function set3() {
    pen = false;
    eraser = false;
    circl = false;
    lin = true;
}


function draw() {
    noFill();
    strokeWeight(2)
    if (pen == true) {
        stroke(0);
        rect(180, 10, 50)
    } else {
        stroke(255);
        rect(180, 10, 50)
    }
    if (eraser == true) {
        stroke(0);
        rect(120, 10, 50)
    } else {
        stroke(255);
        rect(120, 10, 50)
    }
    if (lin == true) {
        stroke(0)
        rect(60, 10, 50)
    } else {
        stroke(255);
        rect(60, 10, 50)
    }
    if (circl == true) {
        stroke(0);
        rect(10, 10, 50)
    } else {
        stroke(255);
        rect(10, 10, 50)
    }

    if (start.length == 4) {
        stroke(0, 0, 0, po.value())
        strokeWeight(ps.value());
        line(start[3], start[2], start[1], start[0]);
        start = []
    }
    if (startc.length == 4) {
        stroke(0, 0, 0, po.value())
        strokeWeight(ps.value());
        d = dist(startc[3], startc[2], startc[1], startc[0])
        ellipse(startc[3], startc[2], 2 * d);
        startc = []
    }

}

function mouseDragged() {
    if (mouseY > 60 && pen) {
        stroke(0, 0, 0, po.value())
        strokeWeight(ps.value());
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
    if (mouseY > 60 && eraser) {
        stroke(255, 255, 255, po.value())
        strokeWeight(ps.value() * 2);
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}
start = []
startc = []

function mouseClicked() {
    if (mouseY > 60 && lin) {
        start.unshift(mouseX)
        start.unshift(mouseY)
    }
    if (mouseY > 60 && circl) {
        startc.unshift(mouseX)
        startc.unshift(mouseY)
    }
}