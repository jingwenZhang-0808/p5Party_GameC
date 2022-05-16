// making choice
function choiceScreen1() {
  bedroomBG();
  fill(0, 200);
  rect(0, 0, 600, 600);
  
  push();
  fill(255);
  text("1.Molly left. You need something to protect yourself.", 150, 250);
  text("A. A blade", 150, 300);
  text("B. A bottle of magic potion", 150, 320);
  text("C. A telescope", 150, 340);
  text("D. A crystal ball", 150, 360);
  rect(me.choicePosA, 290, 10, 10);
  rect(me.choicePosB, 310, 10, 10);
  rect(me.choicePosC, 330, 10, 10);
  rect(me.choicePosD, 350, 10, 10);
  pop();
  
  choiceUI1(150);

}

function choiceScreen2() {
  bedroomBG();
  fill(0, 200);
  rect(0, 0, 600, 600);
  
  push();
  fill(255);
  text("2.You take the only card left, and:", 150, 250);
  text("A. Hold it with your hand", 150, 300);
  text("B. Put it in your cloak", 150, 320);
  rect(me.choicePosA, 290, 10, 10);
  rect(me.choicePosB, 310, 10, 10);
  pop();
  
  choiceUI2(150);
}

function choiceScreen3_1() {
  image(forestScene, 0, 0, 600, 600);
  image(kate, 230, 100, 60, 60);
  push();
  fill(0, 200);
  rect(0, 0, 600, 600);
  pop();
  
  push();
  fill(255);
  text("3.A gust of wind blows the card in your hand. Kate: “Wait! The Start!” You: ", 90, 250);
  text("A. Jump off the cliff to get it", 90, 300);
  text("B. Let it go. You can summon it after you get the rest of your tarot.", 90, 320);
  rect(me.choicePosA, 290, 10, 10);
  rect(me.choicePosB, 310, 10, 10);
  pop();
  
  choiceUI1(90);
}

function choiceScreen4_1() {
  image(forestScene, 0, 0, 600, 600);  
  image(kate, 230, 100, 60, 60);
  image(death, 290, 115, 60, 60);

  push();
  fill(0, 200);
  rect(0, 0, 600, 600);
  pop();
  
  push();
  fill(255);
  text("4.You: ", 150, 250);
  text("A. Put your hand on the bones.", 150, 300);
  text("B. Put the Wheel of Fortune on the bones.", 150, 320);
  rect(me.choicePosA, 290, 10, 10);
  rect(me.choicePosB, 310, 10, 10);
  pop();
  
  choiceUI2(150);
}

function choiceScreen3_2() {
  image(forestScene, 0, 0, 600, 600);
  image(kate, 230, 100, 60, 60);
  image(cat, 280, 115, 40, 40);
  image(fool, 240, 160, 75, 75);
  push();
  fill(0, 200);
  rect(0, 0, 600, 600);
  pop();
  
  push();
  fill(255);
  text("3.The Fool shows you the only three things he owns, his dog, his silver coin, and a rose.", 60, 250);
  text("A. Kate: “I want your dog.", 60, 300);
  text("B. Kate: “Can I take that coin?", 60, 320);
  text("C. Kate: “The rose is fine.", 60, 340);
  rect(me.choicePosA, 290, 10, 10);
  rect(me.choicePosB, 310, 10, 10);
  rect(me.choicePosC, 330, 10, 10);
  pop();
  
  choiceUI1(60);
}

function choiceScreen4_2() {
  image(forestScene, 0, 0, 600, 600);
  image(kate, 230, 100, 60, 60);
  image(cat, 280, 115, 40, 40);
  fill(0, 200);
  rect(0, 0, 600, 600);
  
  push();
  fill(255);
  text("4.The fog hides the road as you climb up a steep slope. You can’t see anything through the thick mist. So you: ", 60, 250, 480, 100);
  text("A. Hold your blade in your hand.", 60, 310);
  text("B. Drink your magic potion.", 60, 330);
  rect(me.choicePosA, 300, 10, 10);
  rect(me.choicePosB, 320, 10, 10);
  pop();
  
  choiceUI2(60);
}

function choiceScreen5() {
  image(forestScene, 0, 0, 600, 600);
  image(kate, 230, 100, 60, 60);
  image(cat, 280, 115, 40, 40);
  fill(0, 200);
  rect(0, 0, 600, 600);
  
  push();
  fill(255);
  text("5.The fog lifts. You see a forked road in front of you. Flowers blooming on the right path like smiling faces of children. On the left path, an oak tree stands quietly. You choose: ", 60, 250, 480, 100);
  text("A. The right fork is full of flowers.", 60, 320);
  text("B. The left fork has an oak tree.", 60, 340);
  rect(me.choicePosA, 310, 10, 10);
  rect(me.choicePosB, 330, 10, 10);
  pop();
  
  choiceUI1(60);
}

function choiceScreen6_1() {
  image(castleScene, 0, 0, 600, 600);
  image(kate, 180, 350, 60, 60);
  image(cat, 230, 365, 40, 40);
  image(empress, 60, 250, 60, 60);
  fill(0, 200);
  rect(0, 0, 600, 600);
  
  push();
  fill(255);
  text("6.The knight leads you to your room. Molly jumps on the windowsill.” Molly: “Any plan?”", 60, 250, 480, 100);
  text("A. Kate: “The sun is one of my cards. I will try to get it back.”", 60, 320);
  rect(me.choicePosA, 310, 10, 10);
  rect(me.choicePosB, 330, 10, 10);
  pop();
  
  if(shared.answer3_2 == "A") {
    push();
    fill(255);
    text("B. Kate: “Break the authority… It sounds like The Fool’s job.”", 60, 340);
    pop();
  }
  else {
    push();
    fill(255, 150);
    text("B. Kate: “Break the authority… It sounds like The Fool’s job.”", 60, 340);
    pop();
  }
  
  choiceUI2(60);
}

function choiceScreen6_2() {
  image(nightScene, 0, 0, 600, 600);
  image(kate, 80, 250, 60, 60);
  image(cat, 130, 265, 40, 40);
  image(priest, 200, 350, 60, 60);
  fill(0, 200);
  rect(0, 0, 600, 600);
  
  push();
  fill(255);
  text("6.You think for a while and: ", 150, 250, 480, 100);
  text("A. find out your telescope from your package.", 150, 320);
  text("B. find out your crystal ball from your package.", 150, 340);
  rect(me.choicePosA, 310, 10, 10);
  rect(me.choicePosB, 330, 10, 10);
  pop();
  
  choiceUI2(150);
}

function choiceScreen7() {
  image(castleScene, 0, 0, 600, 600);
  image(kate, 80, 250, 60, 60);
  image(cat, 130, 265, 40, 40);
  fill(0, 200);
  rect(0, 0, 600, 600);
  
  push();
  fill(255);
  text("7.Kate: “She’s not as cold as she looks.” You: ", 90, 250);
  text("A. Put some bread in your package before leaving. ", 90, 300);
  text("B. Fill your bottle with wine before leaving. ", 90, 320);
  text("C. Leave without taking anything.", 90, 340);
  rect(me.choicePosA, 290, 10, 10);
  rect(me.choicePosB, 310, 10, 10);
  rect(me.choicePosC, 330, 10, 10);
  pop();
  
  choiceUI1(90);
}

function choiceScreen8() {
  image(gardenScene, 0, 0, 600, 600);
  image(kate, 200, 360, 60, 60);
  image(cat, 250, 375, 40, 40);
  image(adjust, 300, 300, 50, 50);
  fill(0, 200);
  rect(0, 0, 600, 600)
  
  push();
  fill(255);
  text("8.Molly: “He is dehydrated.” You: ", 90, 250);
  rect(me.choicePosA, 290, 10, 10);
  rect(me.choicePosB, 310, 10, 10);
  pop();
  
  if(shared.answer7 == "A") {
    push();
    fill(255);
    text("A. Find the baguette from your back and hit his head with that stick bread. ", 90, 300);
    pop();
    push();
    fill(255, 150);
    text("B. Share with him some wine you took from The High Priestess’s castle.", 90, 320);
    pop();
  }
  else {
    push();
    fill(255);
    text("B. Share with him some wine you took from The High Priestess’s castle.", 90, 320);
    pop();
    push();
    fill(255, 150);
    text("A. Find the baguette from your back and hit his head with that stick bread. ", 90, 300);
    pop();
  }
  
  choiceUI2(90);
}

function choiceScreen9_1() {
  image(gardenScene, 0, 0, 600, 600);
  image(kate, 200, 360, 60, 60);
  image(cat, 250, 375, 40, 40);
  image(adjust, 300, 300, 50, 50);
  fill(0, 200);
  rect(0, 0, 600, 600);
  
  push();
  fill(255);
  text("9.Molly is stunned by your move. The horse goes crazy, so you:", 90, 250, 480, 100);
  text("A. Knock the horse down using the same baguette.", 90, 320);
  text("B. Get Molly and run away.", 90, 340);
  rect(me.choicePosA, 310, 10, 10);
  rect(me.choicePosB, 330, 10, 10);
  pop();
  
  choiceUI1(90);
}

function choiceScreen10_1() {
  image(palace2Scene, 0, 0, 600, 600);
  image(kate, 60, 360, 80, 80);
  image(cat, 120, 385, 50, 50);
  fill(0, 200);
  rect(0, 0, 600, 600);
  
  push();
  fill(255);
  text("10.The Empress smiles and looks at you.", 150, 250, 480, 100);
  text("A. You show the telescope to The Emperor.", 150, 320);
  text("B. You show the crystal ball to The Emperor.", 150, 340);
  rect(me.choicePosA, 310, 10, 10);
  rect(me.choicePosB, 330, 10, 10);
  pop();
  
  choiceUI2(150);
}

function choiceScreen11() {
  image(palace1Scene, 0, 0, 600, 600);
  image(kate, 60, 360, 80, 80);
  image(cat, 120, 385, 50, 50);
  fill(0, 200);
  rect(0, 0, 600, 600);
  
  push();
  fill(255);
  text("11.The Magician designs the chariot as it looks like on your tarot.", 90, 250, 480, 100);
  text("A. Show the chariot to The Emperor.", 90, 320);
  text("B. Use your mirror to turn it into a tarot card.", 90, 340);
  rect(me.choicePosA, 310, 10, 10);
  rect(me.choicePosB, 330, 10, 10);
  pop();
  
  choiceUI1(90);
}