let pointsX;
let pointsY;
let s;
function setup() {
  createCanvas(windowWidth, windowHeight);
  s = loadImage('squid.png')
  pointsX = [ ];
  pointsY = [ ];
  angleMode(DEGREES)
}

function draw() {
  background(220);
  //image(s,200,200,130,100)
  beginShape();
  
  for(let draw = 0; draw < pointsX.length; draw = draw +1){
    vertex(pointsX[draw], pointsY[draw])
  }
  fill(255,0,0);
  curveVertex(265,211); 
  curveVertex(264,211); 
  curveVertex(300,260); 
  curveVertex(230,260); 
   
  endShape(CLOSE);
  
  beginShape();
  
  curveVertex(244,265); 
  curveVertex(244,265); 
  curveVertex(242,278); 
  curveVertex(244,284); 
  curveVertex(250,289); 
  curveVertex(255,285); 
  curveVertex(260,291); 
  curveVertex(265,286); 
  curveVertex(270,291); 
  curveVertex(275,285); 
  curveVertex(279,289); 
  curveVertex(287,282); 
  curveVertex(288,275); 
  curveVertex(286,265);
  curveVertex(286,265);
  endShape();
  
  fill(0);
  ellipse(255,250,20,20)
  ellipse(275,250,20,20)
  noStroke();
  fill(255);
  ellipse(255,250,15,15)
  ellipse(275,250,15,15)
  
  //ellipseMode(RADIUS);
  fill(0);
  ellipse(256,248,10,10)
  ellipse(274,248,10,10)
  noFill();
  ellipse(256,248,5,5);
  ellipse(274,248,5,5)

  fill(255,0,0,10)
  ellipse(250,280,7,7)
  ellipse(260,277,9,9)
  ellipse(248,272,5,5)
  ellipse(269,282,8,8)
  ellipse(279,278,10,10)
  ellipse(282,270,6,6)
  
  stroke(10);
 
  
}
  
function mouseClicked() {
  
 pointsX [pointsX.length] = mouseX;
 pointsY [pointsY.length] = mouseY;
 print("curveVertex("+mouseX+","+mouseY+");");

}