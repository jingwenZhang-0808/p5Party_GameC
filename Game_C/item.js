function endItem() {
  
  if(shared.answer1 == "A") {
    shared.object1 = "blade";
  }
  else if(shared.answer1 == "B") {
    shared.object1 = "bottle of magic potion";
  }
  else if(shared.answer1 == "C") {
    shared.object1 = "telescope";
  }
  else if(shared.answer1 == "D") {
    shared.object1 = "crystal ball";
  }
  
  if(shared.answer3_2 == "A") {
    shared.object2 = "dog";
  }
  else if(shared.answer3_2 == "B") {
    shared.object2 = "coin";
  }
  else if(shared.answer3_2 == "C") {
    shared.object2 = "rose";
  }
  
  if(shared.answer8 == "B") {
    shared.object3 = "You helped the man and left his sword with him.";
  }
  
  if(shared.answer9_1 == "A") {
    shared.object3 = "You knocked out a stranger and his horse and took his sword, because that is The Justice.";
  }
  
  if(shared.answer11 == "A") {
    shared.object4 = "The Magician made the chariot using reflective metal. As The Emperor and The Hierophant's reflection were made on it, they turned into tarot cards."
  }
  else if(shared.answer11 == "B") {
    shared.object4 = "You didn’t want to give the chariot to The Emperor. You sneaked out with Molly and were caught by the soldiers."
  }
}