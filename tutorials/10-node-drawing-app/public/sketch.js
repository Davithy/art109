var socket;

function setup() {
    createCanvas(1000, 1000);
    background(51);

    // socket = io.connect('http://localhost:3000');
    socket = io();
    socket.on('mouse', newDrawing);    
}

function newDrawing(data) {
    noStroke();
    fill(50, 100, 200);
    ellipse(data.x, data.y, 10, 10);
}

function mouseDragged() {
    console.log('Sending: ' + mouseX + ',' + mouseY);

    var data = {
        x: mouseX,
        y: mouseY
    }
    socket.emit('mouse', data);

    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 15, 15);
}

function draw() {
}