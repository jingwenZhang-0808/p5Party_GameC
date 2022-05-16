function mouseReleased() {
  if(shared.page == "title") {
    if(mouseX > 250 && mouseX < 330 && mouseY > 375 && mouseY < 400) {
      shared.page = "game"
    }
  }
}

function keyPressed() { 
  //just text
  if (page == "text_page1" || page == "text_page2" || page == "text_page3" || page == "text_page4" ||
      page == "text_page5" || page == "text_page6" || page == "text_page7" || page == "text_page8" ||
      page == "text_page9" || page == "text_page10" || page == "text_page11" || page == "text_page12" ||
      page == "text_page13" || page == "text_page14" || page == "text_page15" || page == "text_page16" ||
      page == "text_page17" || page == "text_page18" || page == "text_page19" || page == "text_page20" ||
      page == "text_page21" || page == "text_page22" || page == "text_page23" || page == "text_page24" ||
      page == "text_page25" || page == "text_page26" || page == "text_page27" || page == "text_page28" ||
      page == "text_page29" || page == "text_page30" || page == "text_page31" || page == "text_page32" ||
      page == "text_page33" || page == "text_page34" || page == "text_page35" || page == "text_page36" ||
      page == "text_page37" || page == "text_page38" || page == "text_page39" || page == "text_page40" ||
      page == "text_page41" || page == "text_page42" || page == "text_page43" || page == "text_page44" ||
      page == "text_page45" || page == "text_page45" || page == "text_page46" || page == "text_page47" ||
      page == "text_page48" || page == "text_page49" || page == "text_page50" || page == "text_page51" ||
      page == "text_page52" || page == "text_page53" || page == "text_page54" || page == "text_page55" ||
      page == "text_page56" || page == "text_page57" || page == "text_page58" || page == "text_page59" ||
      page == "text_page60" || page == "text_page61" || page == "text_page62" || page == "text_page63" ||
      page == "text_page64" || page == "text_page65" || page == "text_page66" || page == "text_page67" ||
      page == "text_page68" || page == "text_page69" || page == "text_page70" || page == "text_page71" ||
      page == "text_page72" || page == "text_page73" || page == "text_page74" || page == "text_page75" ||
      page == "text_page76" || page == "text_page77" || page == "text_page78" || page == "text_page79" ||
      page == "text_page80" || page == "text_page81" || page == "text_page82" || page == "text_page83" ||
      page == "text_page84" || page == "text_page85" || page == "text_page86" || page == "text_page0" ||
      page == "text_page2_1" || page == "text_page2_2" || page == "text_page2_3" || page == "text_page2_4" ||
      page == "text_page2_5" || page == "text_page2_6" || page == "text_page2_7" || page == "text_page2_8" ||
      page == "text_page2_9" || page == "text_page163" || page == "text_page164") {
    if (keyCode == 32) {
      shared.textNumber ++;
    }
  }
  if (page == "text_page87" || page == "text_page88" || page == "text_page89" || page == "text_page90" ||
      page == "text_page91" || page == "text_page92" || page == "text_page93" || page == "text_page94" ||
      page == "text_page95" || page == "text_page96" || page == "text_page97" || page == "text_page98" ||
      page == "text_page99" || page == "text_page100" || page == "text_page101" || page == "text_page102" ||
      page == "text_page103" || page == "text_page104" || page == "text_page105" || page == "text_page106" ||
      page == "text_page107" || page == "text_page108" || page == "text_page109" || page == "text_page110" ||
      page == "text_page111" || page == "text_page112" || page == "text_page113" || page == "text_page114" ||
      page == "text_page115" || page == "text_page116" || page == "text_page117" || page == "text_page118" ||
      page == "text_page119" || page == "text_page120" || page == "text_page121" || page == "text_page122" ||
      page == "text_page123" || page == "text_page124" || page == "text_page125" || page == "text_page126" ||
      page == "text_page127" || page == "text_page128" || page == "text_page129" || page == "text_page130" ||
      page == "text_page131" || page == "text_page132" || page == "text_page133" || page == "text_page134" ||
      page == "text_page135" || page == "text_page136" || page == "text_page137" || page == "text_page138" ||
      page == "text_page139" || page == "text_page140" || page == "text_page141" || page == "text_page142" ||
      page == "text_page143" || page == "text_page144" || page == "text_page145" || page == "text_page146" ||
      page == "text_page147" || page == "text_page148" || page == "text_page149" || page == "text_page150" ||
      page == "text_page151" || page == "text_page152" || page == "text_page153" || page == "text_page154" ||
      page == "text_page155" || page == "text_page156" || page == "text_page157" || page == "text_page158" ||
      page == "text_page159") {
    if (keyCode == 32) {
      shared.finalNumber ++;
    }
  }
  if (page == "text_page165" || page == "text_page166" || page == "text_page167" || page == "text_page168") {
    if (keyCode == 32) {
      shared.endNumber ++;
    }
  }
  
  // host choice
  if (partyIsHost()) {
    if (page == "choice_page1") {
      //choice A
      if (keyCode == 65) {
        me.choicePosA = 130;
        me.choicePosB = -130;
        me.choicePosC = -130;
        me.choicePosD = -130;
        shared.answer1 = "A";
      }
      //choice B
      else if (keyCode == 66) {
        me.choicePosA = -130;
        me.choicePosB = 130;
        me.choicePosC = -130;
        me.choicePosD = -130;
        shared.answer1 = "B";
      }
      //choice C
      else if (keyCode == 67) {
        me.choicePosA = -130;
        me.choicePosB = -130;
        me.choicePosC = 130;
        me.choicePosD = -130;
        shared.answer1 = "C";
      }
      //choice D
      else if (keyCode == 68) {
        me.choicePosA = -130;
        me.choicePosB = -130;
        me.choicePosC = -130;
        me.choicePosD = 130;
        shared.answer1 = "D";
      }
      //turn page
      else if(shared.answer1 == "A" || shared.answer1 == "B" || shared.answer1 == "C" || shared.answer1 == "D") {
        if (keyCode == 32) {
          shared.textNumber ++;
          me.choicePosA = -130;
          me.choicePosB = -130;
          me.choicePosC = -130;
          me.choicePosD = -130;
        }
      }      
    }
    
    if (page == "choice_page3_1") {
      //choice A
      if (keyCode == 65) {
        me.choicePosA = 70;
        me.choicePosB = -130;
        shared.answer3_1 = "A";
      }
      //choice B
      else if (keyCode == 66) {
        me.choicePosA = -130;
        me.choicePosB = 70;
        shared.answer3_1 = "B";
      }
      //turn page
      else if(shared.answer3_1 == "A" || shared.answer3_1 == "B") {
        if (keyCode == 32) {
          shared.textNumber ++;
          me.choicePosA = -130;
          me.choicePosB = -130;
        }
      }      
    }
    
    if (page == "choice_page3_2") {
      //choice A
      if (keyCode == 65) {
        me.choicePosA =40;
        me.choicePosB = -130;
        me.choicePosC = -130;
        shared.answer3_2 = "A";
      }
      //choice B
      else if (keyCode == 66) {
        me.choicePosA = -130;
        me.choicePosB = 40;
        me.choicePosC = -130;
        shared.answer3_2 = "B";
      }
      //choice C
      else if (keyCode == 67) {
        me.choicePosA = -130;
        me.choicePosB = -130;
        me.choicePosC = 40;
        shared.answer3_2 = "C";
      }
      //turn page
      else if(shared.answer3_2 == "A" || shared.answer3_2 == "B" || shared.answer3_2 == "C") {
        if (keyCode == 32) {
          shared.textNumber ++;
          me.choicePosA = -130;
          me.choicePosB = -130;
          me.choicePosC = -130;
        }
      }      
    }
    
    if (page == "choice_page5") {
      //choice A
      if (keyCode == 65) {
        me.choicePosA = 40;
        me.choicePosB = -130;
        shared.answer5 = "A";
      }
      //choice B
      else if (keyCode == 66) {
        me.choicePosA = -130;
        me.choicePosB = 40;
        shared.answer5 = "B";
      }
      //turn page
      else if(shared.answer5 == "A" || shared.answer5 == "B") {
        if (keyCode == 32) {
          shared.textNumber ++;
          me.choicePosA = -130;
          me.choicePosB = -130;
        }
      }      
    }
    
    if (page == "choice_page7") {
      //choice A
      if (keyCode == 65) {
        me.choicePosA = 70;
        me.choicePosB = -130;
        me.choicePosC = -130;
        shared.answer7= "A";
      }
      //choice B
      else if (keyCode == 66) {
        me.choicePosA = -130;
        me.choicePosB = 70;
        me.choicePosC = -130;
        shared.answer7 = "B";
      }
      //choice C
      else if (keyCode == 67) {
        me.choicePosA = -130;
        me.choicePosB = -130;
        me.choicePosC = 70;
        shared.answer7 = "C";
      }
      //turn page
      else if(shared.answer7 == "A" || shared.answer7 == "B" || shared.answer7 == "C") {
        if (keyCode == 32) {
          shared.textNumber ++;
          me.choicePosA = -130;
          me.choicePosB = -130;
          me.choicePosC = -130;
        }
      }      
    }
    
    if (page == "choice_page9_1") {
      //choice A
      if (keyCode == 65) {
        me.choicePosA = 70;
        me.choicePosB = -130;
        shared.answer9_1 = "A";
      }
      //choice B
      else if (keyCode == 66) {
        me.choicePosA = -130;
        me.choicePosB = 70;
        shared.answer9_1 = "B";
      }
      //turn page
      else if(shared.answer9_1 == "A" || shared.answer9_1 == "B") {
        if (keyCode == 32) {
          shared.textNumber ++;
          me.choicePosA = -130;
          me.choicePosB = -130;
        }
      }      
    }
    
    if (page == "choice_page11") {
      //choice A
      if (keyCode == 65) {
        me.choicePosA = 70;
        me.choicePosB = -130;
        shared.answer11 = "A";
      }
      //choice B
      else if (keyCode == 66) {
        me.choicePosA = -130;
        me.choicePosB = 70;
        shared.answer11 = "B";
      }
      //turn page
      else if(shared.answer11 == "A" || shared.answer11 == "B") {
        if (keyCode == 32) {
          shared.endNumber ++;
          me.choicePosA = -130;
          me.choicePosB = -130;
        }
      }      
    }
    
  }
  
  // non-host choice
  else if (!partyIsHost()) {
    if (page == "choice_page2") {
      //choice A
      if (keyCode == 65) {
        me.choicePosA = 130;
        me.choicePosB = -130;
        shared.answer2 = "A";
      }
      //choice B
      else if (keyCode == 66) {
        me.choicePosA = -130;
        me.choicePosB = 130;
        shared.answer2 = "B";
      }
      //turn page
      else if(shared.answer2 == "A" || shared.answer2 == "B") {
        if (keyCode == 32) {
          shared.textNumber ++;
          me.choicePosA = -130;
          me.choicePosB = -130;
        }
      }      
    }
    
    if (page == "choice_page4_1") {
      //choice A
      if (keyCode == 65) {
        me.choicePosA = 130;
        me.choicePosB = -130;
        shared.answer4_1 = "A";
      }
      //choice B
      else if (keyCode == 66) {
        me.choicePosA = -130;
        me.choicePosB = 130;
        shared.answer4_1 = "B";
      }
      //turn page
      else if(shared.answer4_1 == "A" || shared.answer4_1 == "B") {
        if (keyCode == 32) {
          shared.textNumber ++;
          me.choicePosA = -130;
          me.choicePosB = -130;
        }
      }      
    }
    
    if (page == "choice_page4_2") {
      //choice A
      if (keyCode == 65) {
        me.choicePosA = 40;
        me.choicePosB = -130;
        shared.answer4_2 = "A";
      }
      //choice B
      else if (keyCode == 66) {
        me.choicePosA = -130;
        me.choicePosB = 40;
        shared.answer4_2 = "B";
      }
      //turn page
      else if(shared.answer4_2 == "A" || shared.answer4_2 == "B") {
        if (keyCode == 32) {
          shared.textNumber ++;
          me.choicePosA = -130;
          me.choicePosB = -130;
        }
      }      
    }
    
    if (page == "choice_page6_1") {
      //choice A
      if (keyCode == 65) {
        me.choicePosA = 40;
        me.choicePosB = -130;
        shared.answer6_1 = "A";
      }
      //choice B
      else if (keyCode == 66 && shared.answer3_2 == "A") {
        me.choicePosA = -130;
        me.choicePosB = 40;
        shared.answer6_1 = "B";
      }
      //turn page
      else if(shared.answer6_1 == "A" || shared.answer6_1 == "B") {
        if (keyCode == 32) {
          shared.textNumber ++;
          me.choicePosA = -130;
          me.choicePosB = -130;
        }
      }      
    }
    
    if (page == "choice_page6_2") {
      //choice A
      if (keyCode == 65) {
        me.choicePosA = 130;
        me.choicePosB = -130;
        shared.answer6_2 = "A";
      }
      //choice B
      else if (keyCode == 66) {
        me.choicePosA = -130;
        me.choicePosB = 130;
        shared.answer6_2 = "B";
      }
      //turn page
      else if(shared.answer6_2 == "A" || shared.answer6_2 == "B") {
        if (keyCode == 32) {
          shared.textNumber ++;
          me.choicePosA = -130;
          me.choicePosB = -130;
        }
      }      
    }
    
    if (page == "choice_page8") {
      //choice A
      if (keyCode == 65 && shared.answer7 == "A") {
        me.choicePosA = 70;
        me.choicePosB = -130;
        shared.answer8= "A";
      }
      //choice B
      else if (keyCode == 66 && shared.answer7 == "B") {
        me.choicePosA = -130;
        me.choicePosB = 70;
        shared.answer8 = "B";
      }
      //turn page
      else if(shared.answer8 == "A" || shared.answer8 == "B") {
        if (keyCode == 32) {
          shared.textNumber ++;
          me.choicePosA = -130;
          me.choicePosB = -130;
        }
      }      
    }
    
    if (page == "choice_page10_1") {
      //choice A
      if (keyCode == 65) {
        me.choicePosA = 130;
        me.choicePosB = -130;
        shared.answer10_1 = "A";
      }
      //choice B
      else if (keyCode == 66) {
        me.choicePosA = -130;
        me.choicePosB = 130;
        shared.answer10_1 = "B";
      }
      //turn page
      else if(shared.answer10_1 == "A" || shared.answer10_1 == "B") {
        if (keyCode == 32) {
          shared.finalNumber ++;
          me.choicePosA = -130;
          me.choicePosB = -130;
        }
      }      
    }
    
    
  }
  

}