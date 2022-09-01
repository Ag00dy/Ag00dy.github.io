let capture;

function setup() {
  createCanvas(480, 640);
  capture = createCapture(VIDEO)
  capture.size(400,400)
  capture.hide();
}

function draw() {
  //background(220);
  capture.loadPixels();
  for(let number = 0; number < 100; number = number + 1){
  let x = random(0,width)
  let y = random(0,height)
    let index = int(x) + capture.width * int(y);
    let r = capture.pixels[index*4]
    let g = capture.pixels[index*4 + 1]
    let b = capture.pixels[index*4 + 2]
    fill(r,g,b);
    squid(x,y,r,g,b)
    
    print(mouseX,mouseY)
}  
}
 
  
function squid(x,y,r,g,b) {
  
  push();
  translate(x-67, y -65);
  beginShape();
  
  fill(r,g,b);
  curveVertex(265/4,211/4); 
  curveVertex(264/4,211/4); 
  curveVertex(300/4,260/4); 
  curveVertex(230/4,260/4); 
   
  endShape(CLOSE);
  
  beginShape();
  
  curveVertex(244/4,265/4); 
  curveVertex(244/4,265/4); 
  curveVertex(242/4,278/4); 
  curveVertex(244/4,284/4); 
  curveVertex(250/4,289/4); 
  curveVertex(255/4,285/4); 
  curveVertex(260/4,291/4); 
  curveVertex(265/4,286/4); 
  curveVertex(270/4,291/4); 
  curveVertex(275/4,285/4); 
  curveVertex(279/4,289/4); 
  curveVertex(287/4,282/4); 
  curveVertex(288/4,275/4); 
  curveVertex(286/4,265/4);
  curveVertex(286/4,265/4);
  endShape();
  
  fill(0);
  ellipse(255/4,250/4,20/4,20/4)
  ellipse(275/4,250/4,20/4,20/4)
  noStroke();
  fill(255);
  ellipse(255/4,250/4,15/4,15/4)
  ellipse(275/4,250/4,15/4,15/4)
  
  fill(0);
  ellipse(256/4,248/4,10/4,10/4)
  ellipse(274/4,248/4,10/4,10/4)
  noFill();
  ellipse(256/4,248/4,5/4,5/4);
  ellipse(274/4,248/4,5/4,5/4)

  fill(r,g,b)
  ellipse(250/4,280/4,07/4,07/4)
  ellipse(260/4,277/4,09/4,09/4)
  ellipse(248/4,272/4,05/4,05/4)
  ellipse(269/4,282/4,08/4,08/4)
  ellipse(279/4,278/4,10/4,10/4)
  ellipse(282/4,270/4,06/4,06/4)
  
  stroke(10);
  pop();
}