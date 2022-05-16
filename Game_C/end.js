function end() {
  if(shared.endNumber == 0) {
    choiceScreen11();
    page = "choice_page11";
  }
  
  if(shared.answer11 == "A") {
    if(shared.endNumber > 0 && shared.endNumber <= 2) {
      prologueScreen165();
      page = "text_page165"
    }
    else if(shared.endNumber > 2 && shared.endNumber <= 4) {
      prologueScreen166();
      page = "text_page166"
    }
    else if(shared.endNumber > 4 && shared.endNumber <= 5) {
      prologueScreen167();
      page = "text_page167"
    }
    else if(shared.endNumber > 5) {
      if(shared.answer5 == "A") {
        endScreen9();
      }
      else if(shared.answer5 == "B") {
        endScreen10();
      }
    }
  }
  
  else if(shared.answer11 == "B") {
    if(shared.endNumber > 0 && shared.endNumber <= 2) {
      prologueScreen168();
      page = "text_page168"
    }
    else if(shared.endNumber > 2 && shared.endNumber <= 4) {
      if(shared.answer5 == "A") {
        endScreen9();
      }
      else if(shared.answer5 == "B") {
        endScree10();
      }
    }
  }

}