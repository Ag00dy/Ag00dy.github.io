x = 0
y = 0
vel = 2
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
let sx = width/2 + (390,280) * cos(frameCount/10)
let cy = height/2 + (280,280) * sin(frameCount/10)
  background(0,0,0,50);
  fill(0);

  if (mouseIsPressed){
for (var w = 0; w <= width*.228; w = w + 25) { 
for (var h = 0; h <= height; h = h + 25) {
fill(255,255,255,50);
rect(w,h,10,10);
rect(w+ width*.795,h,10,10);
}
}   
}
  
  fill(255,0,0)
  ellipse(sx,cy,50,50)
 let sx2 = width/2 + (390,270) * cos(frameCount/10-1)
 let cy2 = height/2.5 + (280,280) * sin(frameCount/10-1)
 let sx3 = width/2 + (370,260) * cos(frameCount/10-2)
 let cy3 = height/3 + (260,260) * sin(frameCount/10-2)
 let sx4 = width/2 + (360,250) * cos(frameCount/10-3)
 let cy4 = height/3.5 + (250,250) * sin(frameCount/10-3)
 let sx5 = width/2 + (360,240) * cos(frameCount/10-4)
 let cy5 = height/4 + (240,240) * sin(frameCount/10-4)
 let sx6 = width/2 + (350,230) * cos(frameCount/10-5)
 let cy6 = height/4.5 + (200,230) * sin(frameCount/10-5)
  fill(245,80,2)
  ellipse(sx2,cy2,50,50)
  fill(245,232,34)
  ellipse(sx3,cy3,50,50)
  fill(0,255,0)
  ellipse(sx4,cy4,50,50)
  fill(0,0,255)
  ellipse(sx5,cy5,50,50)
  fill(201,69,245)
  ellipse(sx6,cy6,50,50)
  
    if(keyIsDown(32)) {
    
  let sx = width/2 + (390,280) * -cos(frameCount/10)
  let cy = height/2 + (280,280) * sin(frameCount/10)
  fill(255,0,0)
  ellipse(sx,cy,50,50)
 let sx2 = width/2 + (390,270) * -cos(frameCount/10-1)
 let cy2 = height/2.5 + (280,280) * sin(frameCount/10-1)
 let sx3 = width/2 + (370,260) * -cos(frameCount/10-2)
 let cy3 = height/3 + (260,260) * sin(frameCount/10-2)
 let sx4 = width/2 + (360,250) * -cos(frameCount/10-3)
 let cy4 = height/3.5 + (250,250) * sin(frameCount/10-3)
 let sx5 = width/2 + (360,240) * -cos(frameCount/10-4)
 let cy5 = height/4 + (240,240) * sin(frameCount/10-4)
 let sx6 = width/2 + (350,230) * -cos(frameCount/10-5)
 let cy6 = height/4.5 + (200,230) * sin(frameCount/10-5)
  fill(245,80,2)
  ellipse(sx2,cy2,50,50)
  fill(245,232,34)
  ellipse(sx3,cy3,50,50)
  fill(0,255,0)
  ellipse(sx4,cy4,50,50)
  fill(0,0,255)
  ellipse(sx5,cy5,50,50)
  fill(201,69,245)
  ellipse(sx6,cy6,50,50)
  }

let mx = map(mouseX,130,600, width*.3,width*.6, true)
let my = map(mouseY,0,560, 0,width*.45, true)
textSize(100);
fill(random(100,255),random(100,255),random(100,255))
text('21', mx,my);

  
 x = x+vel
  noFill();
  noStroke();
  ellipse(x,700,50,50)
  let from = color(248, 243, 173);
  let to = color(122, 230, 1245);
colorMode(RGB); // Try changing to HSB.
let A = lerpColor(from, to, 0.33);
let B = lerpColor(from, to, 0.66);
  
  if (x > width){
  rectMode(RADIUS)
  fill(B)
  rect(0,0,width,height)
  rectMode(CENTER);
  fill(0,0,0,100);
  rect(width*.5, height*.5, width/1.8, height);
  vel = -2
  }else if (x<0){
  rectMode(RADIUS)
  fill(A)
  rect(0,0,width,height)
  rectMode(CENTER);
  fill(0,0,0,100);
  rect(width*.5, height*.5, width/1.8, height);
  vel = 2
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}