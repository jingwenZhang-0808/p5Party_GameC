function titleScreen() {
  
  image(forestScene, 0, 0, 600, 600);
  image(kate, 240, 80, 60, 60);
  image(cat, 290, 95, 40, 40);
  
  push();
  fill(255,105,30);
  textSize(65);
  strokeWeight(80)
  textFont("VT323");
  textStyle(BOLD)
  text("Take One,", 175, 240);
  text("Leave The Rest", 115, 320);
  pop();
  
  push();
  fill(255);
  textSize(65);
  textFont("VT323");
  //textStyle(BOLD)
  text("Take One,", 180, 240);
  text("Leave The Rest", 120, 320);
  pop();
  
  push();
  fill(255, 105, 30);
  textSize(40);
  textFont("VT323");
  textStyle(BOLD)
  text("START", 250, 400);
  pop();
}