// DRAW ROBOT FACE
// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Rectangle Behind Head for Ears
ctx.fillStyle = "rgb(100, 100, 100)";
ctx.fillRect(80, 260, 460, 80);

// Filled Triangle for Hair
filltriangle(180, 80, 140, 100, 220, 100);

// Filled Triangle for Hair
filltriangle(340, 80, 300, 100, 380, 100);

// Outlined Triangle for Hair
stroketriangle(260, 80, 220, 100, 300, 100);

// Outlined Triangle for Hair
stroketriangle(420, 80, 380, 100, 460, 100);

// Filled Triangle for Neck
filltriangle(300, 200, 220, 600, 380, 600);

// Rectangle Head
ctx.fillStyle = "rgb(180, 180, 180)";
ctx.fillRect(100, 100, 400, 400);

// Filled Circle for Left Eye Socket
ctx.fillStyle = "rgb(235, 235, 235)";
fillcircle(200, 250, 50, 0);

// Filled Circle for Right Eye Socket
fillcircle(400, 250, 50, 0);

// Rectangle for Mouth
ctx.fillRect(200, 350, 200, 60);

// Horizontal Line for Teeth
ctx.strokeStyle = "rgb(180, 180, 180)";
strokelines(200, 380, 400, 380);

// First Vertical Line for Teeth
strokelines(250, 350, 250, 410);

// Second Vertical Line for Teeth
strokelines(300, 350, 300, 410);

// Third Vertical Line for Teeth
strokelines(350, 350, 350, 410);

// Filled Circle for Left Eye
ctx.fillStyle = "rgb(100, 100, 100)";
fillcircle(200, 250, 30);

// Filled Circle for Right Eye
fillcircle(400, 250, 10);

// Outlined Circle for Left Eye Socket
ctx.strokeStyle = "rgb(100, 100, 100)";
strokecircle(200, 250, 50, 0);

// Outlined Circle for Right Eye Socket
strokecircle(400, 250, 50, 0);

// Line for Left Eyebrow
ctx.lineWidth = 2;
strokelines(150, 180, 250, 180);

// Line for Right Eyebrow
strokelines(350, 160, 450, 180);

// Outlined Triangle for Nose
stroketriangle(300, 280, 320, 320, 280, 320);

// Draw Functions
//Function for Filled Hair
function filltriangle(x1, y1, x2, y2, x3, y3){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.fill();
}

//Function for Outlined hair
function stroketriangle(x1, y1, x2, y2, x3, y3){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.stroke();
}

//Function for Lines to represent Teeth and Eyebrows
function strokelines(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

//Function for Filled Circles to represent Eyes
function fillcircle(x, y, radius){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
}

//Function for Outlined Circles to represent the outlines in the Eyes
function strokecircle(x, y, radius){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}