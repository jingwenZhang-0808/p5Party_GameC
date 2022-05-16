//ending
function endScreen1() {
  deathBG();
  push();
  fill(0, 200);
  rect(0, 0, 600, 600);
  pop();
  
  fill(255);
  push();
  textSize(24);
  text("Bad Ending", 50, 50, 500, 30);
  pop();
  
  text("You woke up and noticed that your tarots had gone.", 50, 100, 500, 30);
  text("You packed your luggage and took a " + object1 + " to protect yourself.", 50, 130, 500, 30);
  text("The only two cards left were The Star and The Wheel Of Fortune, you hold it in your hand, but a wind blew it off the cliff.", 50, 160, 500, 30);
  text("You fell off the cliff when you tried to get it.", 50, 190, 500, 30);
  text("You met The Death. ", 50, 220, 500, 30);
  text("The Death took you to the land of death after you put your hand on his. ", 50, 250, 500, 30);
  
  endItem();
}

function endScreen5() {
  forestBG();
  push();
  fill(0, 200);
  rect(0, 0, 600, 600);
  pop();
  
  fill(255);
  push();
  textSize(24);
  text("Bad Ending", 50, 50, 500, 30);
  pop();
  
  text("You woke up and noticed that your tarots had gone. ", 50, 100, 500, 30);
  text("You packed your luggage and took a " + shared.object1 + " to protect yourself.", 50, 130, 500, 30);
  text("You saved The Fool from falling, and he promised you a reward", 50, 160, 500, 30);
  text("You asked for his " + shared.object2, 50, 190, 500, 30);
  text("You lost in the tree", 50, 220, 500, 30);
  
  endItem();
}

function endScreen6() {
  image(fireScene, 0, 0, 600, 600);
  push();
  fill(0, 200);
  rect(0, 0, 600, 600);
  pop();
  
  fill(255);
  push();
  textSize(24);
  text("Bad Ending", 50, 50, 500, 30);
  pop();
  
  text("You woke up and noticed that your tarots had gone. ", 50, 100, 500, 30);
  text("You packed your luggage and took a " + shared.object1 + " to protect yourself.", 50, 130, 500, 30);
  text("You saved The Fool from falling, and he promised you a reward", 50, 160, 500, 30);
  text("You asked for his " + shared.object2, 50, 190, 500, 30);
  text("You showed the Magician your trick, and he decided to go with you.", 50, 220, 500, 30);
  text("You chose the flowers and meet The Empress in her castle.", 50, 250, 500, 30);
  text("The Empress asked you to save her people. You tried to convince the Sun but failed.", 50, 280, 500, 30);
  
  endItem();
}

function endScreen7() {
  priestBG();
  push();
  fill(0, 200);
  rect(0, 0, 600, 600);
  pop();
  
  fill(255);
  push();
  textSize(24);
  text("Bad Ending", 50, 50, 500, 30);
  pop();
  
  text("You woke up and noticed that your tarots had gone. ", 50, 100, 500, 30);
  text("You packed your luggage and took a " + shared.object1 + " to protect yourself.", 50, 130, 500, 30);
  text("You saved The Fool from falling, and he promises you a reward", 50, 160, 500, 30);
  text("You asked for his " + shared.object2, 50, 190, 500, 30);
  text("You showed The Magician your trick, and he decided to go with you.", 50, 220, 500, 30);
  text("You chose the oak tree and met The High Priestess in her castle", 50, 250, 500, 30);
  text("You did not have things that The High Priestess wants, and were sent out from her castle", 50, 280, 500, 30);
  
  endItem();
}

function endScreen8() {
  justiceBG();
  push();
  fill(0, 200);
  rect(0, 0, 600, 600);
  pop();
  
  fill(255);
  push();
  textSize(24);
  text("Bad Ending", 50, 50, 500, 30);
  pop();
  
  text("You woke up and notice that your tarots had gone. ", 50, 100, 500, 30);
  text("You packed your luggage and took a " + shared.object1 + " to protect yourself.", 50, 130, 500, 30);
  text("You saved The Fool from falling, and he promises you a reward", 50, 160, 500, 30);
  text("You asked for his " + shared.object2, 50, 190, 500, 30);
  text("You showed The Magician your trick, and he decided to go with you.", 50, 220, 500, 30);
  text("You chose the oak tree and meet The High Priestess in her castle", 50, 250, 500, 30);
  text("The High Priestess took your telescope and wanted to offer her help in return.", 50, 280, 500, 30);
  text("You knocked out the man and took his sword which is The Justice.", 50, 310, 500, 30);
  text("You run away but were killed by his horse.", 50, 330, 500, 30);
  
  endItem();
}

function endScreen9() {
  if(shared.answer11 == "A") {
    image(palace1Scene, 0, 0, 600, 600);
  }
  else if (shared.answer11 == "B") {
    image(prisonScene, 0, 0, 600, 600);
  }
  push();
  fill(0, 200);
  rect(0, 0, 600, 600);
  pop();
  
  fill(255);
  push();
  textSize(24);
  if(shared.answer11 == "A") {
    text("Good Ending", 50, 50, 500, 30);
  }
  else if (shared.answer11 == "B") {
    text("Bad Ending", 50, 50, 500, 30);
  }
  pop();
  
  text("You woke up and noticed that your tarots had gone. ", 50, 100, 500, 30);
  text("You packed your luggage and took a " + shared.object1 + " to protect yourself.", 50, 130, 500, 30);
  text("You saved The Fool from falling, and he promised you a reward", 50, 160, 500, 30);
  text("You asked for his " + shared.object2, 50, 190, 500, 30);
  text("You showed The Magician your trick, and he decided to go with you.", 50, 220, 500, 30);
  text("You chose the flowers and met The Empress in her castle", 50, 250, 500, 30);
  text("The Empress asked you to save her people. You let The Fool to mock The Sun and defeat it.", 50, 280, 500, 30);
  text("You were arrested by The Emperor because of what you did to the sun.", 50, 310, 500, 30);
  text(shared.object4, 50, 340, 500, 100);
  
  endItem();
}

function endScreen10() {
  priestBG();
  push();
  fill(0, 200);
  rect(0, 0, 600, 600);
  pop();
  
  fill(255);
  push();
  textSize(24);
  if(shared.answer11 == "A") {
    text("Good Ending", 50, 50, 500, 30);
  }
  else if (shared.answer11 == "B") {
    text("Bad Ending", 50, 50, 500, 30);
  }
  pop();
  
  text("You woke up and notice that your tarots had gone. ", 50, 100, 500, 30);
  text("You packed your luggage and took a " + shared.object1 + " to protect yourself.", 50, 130, 500, 30);
  text("You saved The Fool from falling, and he promised you a reward", 50, 160, 500, 30);
  text("You asked for his " + shared.object2, 50, 190, 500, 30);
  text("You showed The Magician your trick, and he decided to go with you.", 50, 220, 500, 30);
  text("You chose the oak tree and met The High Priestess in her castle", 50, 250, 500, 30);
  text("The High Priestess took your telescope and wanted to offer her help in return", 50, 280, 500, 30);
  text(shared.object3, 50, 310, 500, 30);
  text("You were arrested by The Emperor because you helped The High Priestess.", 50, 340, 500, 30);
  text("The Priestess sended a map to help you.", 50, 370, 500, 30);
  text("You presented that map to The Emperor.", 50, 400, 500, 30);
  text("He asked you to make a chariot for him to conquer the world.", 50, 430, 500, 30);
  text(shared.object4, 50, 460, 500, 100);
  
  endItem();
}