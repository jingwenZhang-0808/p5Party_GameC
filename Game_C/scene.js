//choice ui
function choiceUI1(dist) {
  push();
  fill(250);
  textSize(10);
  if (partyIsHost()) {
    textStyle(ITALIC);
    text("Press A or B (C or D if necessary ) key to make a choice first", dist, 400);
    text("After decision press SPACE to submit your choice", dist, 410);
  }
  else if(!partyIsHost()) {
    textStyle(ITALIC);
    text("(Wait for another player to make choice)", dist, 400);
  }
  pop();
}

function choiceUI2(dist) {
  push();
  fill(250);
  textSize(10);
  if (!partyIsHost()) {
    text("Press A or B (C or D if necessary ) key to make a choice first", dist, 400);
    text("After decision press SPACE to submit your choice", dist, 410);
  }
  else if(partyIsHost()) {
    text("(Wait for another player to make choice)", dist, 400);
  }
  pop();
}

//background
function bedroomBG() {
  background(0);
  image(bedroomScene, 150, 150, 300, 300);
  image(kate, 230, 330, 60, 60);
  image(cat, 280, 340, 40, 40);
}

function forestBG() {
  image(forestScene, 0, 0, 600, 600);
  
  push();
  noStroke();
  fill(0, 200);
  rect(0, 450, 600, 160);
  pop();
  
  image(kate, 230, 100, 60, 60);
  image(cat, 280, 115, 40, 40);
}

function deathBG() {
  image(forestScene, 0, 0, 600, 600);
  
  push();
  noStroke();
  fill(0, 200);
  rect(0, 450, 600, 160);
  pop();
  
  image(kate, 230, 100, 60, 60);
  image(death, 290, 115, 60, 60);
}

function foolBG() {
  image(forestScene, 0, 0, 600, 600);
  
  push();
  noStroke();
  fill(0, 200);
  rect(0, 450, 600, 160);
  pop();
  
  image(kate, 230, 100, 60, 60);
  image(cat, 280, 115, 40, 40);
  image(fool, 240, 160, 75, 75);
}

function magicianBG() {
  image(forestScene, 0, 0, 600, 600);
  
  push();
  noStroke();
  fill(0, 200);
  rect(0, 450, 600, 160);
  pop();
  
  image(kate, 230, 200, 60, 60);
  image(cat, 280, 215, 40, 40);
  image(magician, 290, 320, 60, 60);
}

function knightBG() {
  image(outsideScene, 0, 0, 600, 600);
  push();
  noStroke();
  fill(0, 200);
  rect(0, 450, 600, 160);
  pop();
  image(kate, 100, 360, 60, 60);
  image(cat, 140, 380, 40, 40);
  image(knight, 330, 320, 60, 60);
}

function roadBG() {
  image(gardenScene, 0, 0, 600, 600);
  push();
  noStroke();
  fill(0, 200);
  rect(0, 450, 600, 160);
  pop();
  image(kate, 200, 360, 60, 60);
  image(cat, 250, 375, 40, 40);
}

function empressBG() {
  image(castleScene, 0, 0, 600, 600);
  push();
  noStroke();
  fill(0, 200);
  rect(0, 450, 600, 160);
  pop();
  image(kate, 180, 350, 60, 60);
  image(cat, 230, 365, 40, 40);
  image(empress, 60, 250, 60, 60);
}

function nightBG() {
  image(nightScene, 0, 0, 600, 600);
  push();
  noStroke();
  fill(0, 200);
  rect(0, 450, 600, 160);
  pop();
  image(kate, 180, 350, 60, 60);
  image(cat, 230, 365, 40, 40);
}

function fireBG() {
  image(fireScene, 0, 0, 600, 600);
  push();
  noStroke();
  fill(0, 200);
  rect(0, 450, 600, 160);
  pop();
}

function skyBG() {
  image(skyScene, 0, 0, 600, 600);
  push();
  noStroke();
  fill(0, 200);
  rect(0, 450, 600, 160);
  pop();
}

function priestBG() {
  image(nightScene, 0, 0, 600, 600);
  push();
  noStroke();
  fill(0, 200);
  rect(0, 450, 600, 160);
  pop();
  image(kate, 80, 250, 60, 60);
  image(cat, 130, 265, 40, 40);
  image(priest, 200, 350, 60, 60);
}

function castleBG() {
  image(castleScene, 0, 0, 600, 600);
  push();
  noStroke();
  fill(0, 200);
  rect(0, 450, 600, 160);
  pop();
  image(kate, 80, 250, 60, 60);
  image(cat, 130, 265, 40, 40);
}

function justiceBG() {
  image(gardenScene, 0, 0, 600, 600);
  push();
  noStroke();
  fill(0, 200);
  rect(0, 450, 600, 160);
  pop();
  image(kate, 200, 360, 60, 60);
  image(cat, 250, 375, 40, 40);
  image(adjust, 300, 300, 50, 50);
}

function emperorBG() {
  image(palace1Scene, 0, 0, 600, 600);
  push();
  noStroke();
  fill(0, 200);
  rect(0, 450, 600, 160);
  pop();
  image(kate, 60, 360, 80, 80);
  image(cat, 120, 385, 50, 50);
}

function emperorBG2() {
  image(palace2Scene, 0, 0, 600, 600);
  push();
  noStroke();
  fill(0, 200);
  rect(0, 450, 600, 160);
  pop();
  image(kate, 60, 360, 80, 80);
  image(cat, 120, 385, 50, 50);
}

function prisonBG() {
  image(prisonScene, 0, 0, 600, 600);
  push();
  noStroke();
  fill(0, 200);
  rect(0, 450, 600, 160);
  pop();
  image(kate, 160, 360, 80, 80);
  image(cat, 220, 385, 50, 50);
}

function roomBG() {
  image(room1Scene, 0, 0, 600, 600);
  push();
  noStroke();
  fill(0, 200);
  rect(0, 450, 600, 160);
  pop();
}

function foolRoomBG() {
  image(room1Scene, 0, 0, 600, 600);
  push();
  noStroke();
  fill(0, 200);
  rect(0, 450, 600, 160);
  pop();
}

function outsideBG() {
  image(outsideScene, 0, 0, 600, 600);
  push();
  noStroke();
  fill(0, 200);
  rect(0, 450, 600, 160);
  pop();
  image(kate, 100, 360, 60, 60);
  image(cat, 140, 380, 40, 40);
}