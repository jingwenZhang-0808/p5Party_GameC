let shared;
let me;
let participants;

let page = "text_page1";
let text_dist = 35;
let text_start = 480;
let choice_start1 = 150;

let forestScene;

function preload() {
  partyConnect(
    "wss://joan-p5-game.herokuapp.com",
    "Game_Jammmmmmmmmm",
    "main"
  ); 
  shared = partyLoadShared("globals");
  me = partyLoadMyShared();
  participants = partyLoadParticipantShareds();
  
  //scene
  bedroomScene = loadImage('assets/bg_bedroom.jpg');
  forestScene = loadImage('assets/bg_forest.jpg');
  castleScene = loadImage('assets/bg_castle.png');
  gardenScene = loadImage('assets/bg_garden.png');
  fireScene = loadImage('assets/bg_fire.png');
  skyScene = loadImage('assets/bg_sky.jpg');
  nightScene = loadImage('assets/bg_night.png');
  prisonScene = loadImage('assets/bg_prison.png');
  roomScene = loadImage('assets/bg_room.png');
  outsideScene = loadImage('assets/bg_outside.jpg');
  room1Scene = loadImage('assets/bg_room1.jpg');
  palace1Scene = loadImage('assets/bg_palace1.jpg');
  palace2Scene = loadImage('assets/bg_palace2.jpg');
  palace3Scene = loadImage('assets/bg_palace3.jpg');
  
  //character
  kate = loadImage('assets/kate.jpg');
  cat = loadImage('assets/cat.jpg');
  death = loadImage('assets/death.png');
  fool = loadImage('assets/fool.png');
  magician = loadImage('assets/magician.png');
  knight = loadImage('assets/knight.png');
  empress = loadImage('assets/empress.png');
  priest = loadImage('assets/priest.png');
  emperor = loadImage('assets/emperor.png');
  hierophant = loadImage('assets/hierophant.png');
  adjust = loadImage('assets/adjust.png');
  
  //sound
  bgm = loadSound('assets/sound/bgm.mp3')
  bedroom = loadSound('assets/sound/1.mp3')
  
  //font
  font = loadFont('assets/font.ttf');
}

function setup() {
  bgm.loop();
  
  createCanvas(600, 600);
  background(0);
  
  shared.page = "title"
  shared.textNumber = 0;
  shared.finalNumber = 0;
  shared.endNumber = 0;
  
  me.choicePosA = -100;
  me.choicePosB = -100;
  me.choicePosC = -100;
  me.choicePosD = -100;
  shared.answer1 = "none";
  shared.answer2 = "none";
  shared.answer3_1 = "none";
  shared.answer3_2 = "none";
  shared.answer4_1 = "none";
  shared.answer4_2 = "none";
  shared.answer5 = "none";
  shared.answer6_1 = "none";
  shared.answer6_2 = "none";
  shared.answer7 = "none";
  shared.answer8 = "none";
  shared.answer9_1 = "none";
  shared.answer10_1 = "none";
  shared.answer11 = "none";
  shared.answer2Change = false;
  shared.answer8Change = false;
  
  shared.object1 = "none";
  shared.object2 = "none";
  shared.object3 = "none";
  shared.object4 = "none";
   
}

function draw() {
   endScreen10();
  if(shared.page == "title") {
    titleScreen();
  }
  
if(shared.page == "game") {
    
  if(shared.textNumber < 4) {
    prologueScreen0();
    page = "text_page0"
  }
  if(shared.textNumber == 4) {
    prologueScreen1();
    page = "text_page1"
  }
  else if(shared.textNumber > 4 && shared.textNumber <= 6) {
    prologueScreen2_1();
    page = "text_page2_1"
  }
  else if(shared.textNumber > 6 && shared.textNumber <= 8) {
    prologueScreen2_2();
    page = "text_page2_2"
  }
  else if(shared.textNumber > 8 && shared.textNumber <= 10) {
    prologueScreen2_3();
    page = "text_page2_3"
  }
  else if(shared.textNumber > 10 && shared.textNumber <= 12) {
    prologueScreen2_4();
    page = "text_page2_4"
  }
  else if(shared.textNumber > 12 && shared.textNumber <= 14) {
    prologueScreen2_5();
    page = "text_page2_5"
  }
  else if(shared.textNumber > 14 && shared.textNumber <= 16) {
    prologueScreen2_6();
    page = "text_page2_6"
  }
  else if(shared.textNumber > 16 && shared.textNumber <= 18) {
    prologueScreen2_7();
    page = "text_page2_7"
  }
  else if(shared.textNumber > 18 && shared.textNumber <= 20) {
    prologueScreen2_8();
    page = "text_page2_8"
  }
  else if(shared.textNumber > 20 && shared.textNumber <= 22) {
    prologueScreen2_9();
    page = "text_page2_9"
  }
  else if(shared.textNumber == 23) {
    choiceScreen1();
    page = "choice_page1";
  }
  else if(shared.textNumber == 24) {
    choiceScreen2();
    page = "choice_page2";
  }
  else if(shared.textNumber > 24 && shared.textNumber <= 26) {
    prologueScreen3();
    page = "text_page3";
  }
  else if(shared.textNumber > 26 && shared.textNumber <= 29) {
    prologueScreen4();
    page = "text_page4";
  }
  else if(shared.textNumber == 30) {
    prologueScreen5();
    page = "text_page5";
  }
  else if(shared.textNumber > 30 && shared.textNumber <= 32) {
    prologueScreen6();
    page = "text_page6";
  }
  else if(shared.textNumber > 32 && shared.textNumber <= 34) {
    prologueScreen7();
    page = "text_page7";
  }
  else if(shared.textNumber > 34 && shared.textNumber <= 36) {
    prologueScreen8();
    page = "text_page8";
  }
  
  if(shared.answer2 == "A") {
    if(shared.textNumber == 37) {
      choiceScreen3_1();
      page = "choice_page3_1";
    }
    if(shared.answer3_1 == "A") {
      if(shared.textNumber > 37 && shared.textNumber <= 40) {
        prologueScreen9();
        page = "text_page9";
      }
      if(shared.textNumber > 40 && shared.textNumber <= 43) {
        prologueScreen10();
        page = "text_page10";
      }
      if(shared.textNumber == 44) {
        choiceScreen4_1();
        page = "choice_page4_1";
      }
      if(shared.answer4_1 == "A") {
        if(shared.textNumber == 45) {
          endScreen1();
          page = "end_page1";
        }
      }
      else if(shared.answer4_1 == "B") {
        if(shared.textNumber > 44 && shared.textNumber <= 46) {
          prologueScreen163();
          page = "text_page163";
        }
        if(shared.textNumber > 46) {
          shared.textNumber = 37;
          shared.answer2 = "B";
          shared.answer2Change = true;
        }
      }      
    }
    
    if(shared.answer3_1 == "B") {
      if(shared.textNumber > 37) {
        shared.textNumber = 37;
          shared.answer2 = "B";
          shared.answer2Change = true;
      }
    }
    
  }
  
  if(shared.answer2 == "B") {
    if(shared.textNumber == 37) {
      prologueScreen11();
      page = "text_page11";
    }
    else if(shared.textNumber > 37 && shared.textNumber <= 39) {
      prologueScreen12();
      page = "text_page12";
    }
    else if(shared.textNumber > 39 && shared.textNumber <= 41) {
      prologueScreen13();
      page = "text_page13";
    }
    else if(shared.textNumber > 41 && shared.textNumber <= 43) {
      prologueScreen14();
      page = "text_page14";
    }
    else if(shared.textNumber == 44) {
      choiceScreen3_2();
      page = "choice_page3_2";
    }
    
    if(shared.answer3_2 == "A" && shared.textNumber > 44) {
      if(shared.textNumber > 44 && shared.textNumber <= 46) {
        prologueScreen15();
        page = "text_page15";
      }
      if(shared.textNumber > 46 && shared.textNumber <= 48) {
        prologueScreen16();
        page = "text_page16";
      }
      if(shared.textNumber == 49) {
        choiceScreen4_2();
        page = "choice_page4_2";
      }
    }
    
    if(shared.answer3_2 == "B" && shared.textNumber > 44) {
      if(shared.textNumber > 44 && shared.textNumber <= 46) {
        prologueScreen17();
        page = "text_page17";
      }
      if(shared.textNumber > 46 && shared.textNumber <= 48) {
        prologueScreen18();
        page = "text_page18";
      }
      if(shared.textNumber == 49) {
        choiceScreen4_2();
        page = "choice_page4_2";
      }
    }
    
    if(shared.answer3_2 == "C" && shared.textNumber > 44) {
      if(shared.textNumber > 44 && shared.textNumber <= 46) {
        prologueScreen19();
        page = "text_page19";
      }
      if(shared.textNumber > 46 && shared.textNumber <= 48) {
        prologueScreen20();
        page = "text_page20";
      }
      if(shared.textNumber == 49) {
        choiceScreen4_2();
        page = "choice_page4_2";
      }
    }
    
    if(shared.answer4_2 == "A" && shared.textNumber == 50) {
      endScreen5();
    }
    
    if(shared.answer4_2 == "B") {
      if(shared.textNumber == 50) {
        prologueScreen21();
        page = "text_page21";
      }
      else if(shared.textNumber > 50 && shared.textNumber <= 52) {
        prologueScreen22();
        page = "text_page22";
      }
      else if(shared.textNumber > 52 && shared.textNumber <= 54) {
        prologueScreen23();
        page = "text_page23";
      }
      else if(shared.textNumber > 54 && shared.textNumber <= 56) {
        prologueScreen24();
        page = "text_page24";
      }
      else if(shared.textNumber > 56 && shared.textNumber <= 58) {
        prologueScreen25();
        page = "text_page25";
      }
      else if(shared.textNumber > 58 && shared.textNumber <= 60) {
        prologueScreen26();
        page = "text_page26";
      }
      else if(shared.textNumber == 61) {
        choiceScreen5();
        page = "choice_page5";
      }
      
      if(shared.answer5 == "B") {
        if(shared.textNumber > 61 && shared.textNumber <= 63) {
          prologueScreen51();
          page = "text_page51";
        }
        else if(shared.textNumber > 63 && shared.textNumber <= 65) {
          prologueScreen52();
          page = "text_page52";
        }
        else if(shared.textNumber > 65 && shared.textNumber <= 67) {
          prologueScreen53();
          page = "text_page53";
        }
        else if(shared.textNumber > 67 && shared.textNumber <= 69) {
          prologueScreen54();
          page = "text_page54";
        }
        else if(shared.textNumber > 69 && shared.textNumber <= 71) {
          prologueScreen55();
          page = "text_page55";
        }
        else if(shared.textNumber > 71 && shared.textNumber <= 73) {
          prologueScreen56();
          page = "text_page56";
        }
        else if(shared.textNumber > 73 && shared.textNumber <= 75) {
          prologueScreen57();
          page = "text_page57";
        }
        else if(shared.textNumber > 75 && shared.textNumber <= 77) {
          prologueScreen58();
          page = "text_page58";
        }
        else if(shared.textNumber > 77 && shared.textNumber <= 79) {
          prologueScreen59();
          page = "text_page59";
        }
        else if(shared.textNumber > 79 && shared.textNumber <= 81) {
          prologueScreen60();
          page = "text_page60";
        }
        else if(shared.textNumber > 81 && shared.textNumber <= 83) {
          prologueScreen61();
          page = "text_page61";
        }
        else if(shared.textNumber > 83 && shared.textNumber <= 85) {
          prologueScreen62();
          page = "text_page62";
        }
        else if(shared.textNumber == 86) {
          choiceScreen6_2();
          page = "choice_page6_2";
        }
        
        if(shared.answer6_2 == "B") {
          if(shared.textNumber > 86 && shared.textNumber <= 88) {
            prologueScreen71();
            page = "text_page71";
          }
          if(shared.textNumber > 88 && shared.textNumber <= 90) {
            prologueScreen72();
            page = "text_page72";
          }
          if(shared.textNumber > 90) {
            endScreen7();
          }
        }
        if(shared.answer6_2 == "A"){
          if(shared.textNumber > 86 && shared.textNumber <= 88) {
            prologueScreen63();
            page = "text_page63";
          }
          else if(shared.textNumber > 88 && shared.textNumber <= 90) {
            prologueScreen64();
            page = "text_page64";
          }
          else if(shared.textNumber > 90 && shared.textNumber <= 92) {
            prologueScreen65();
            page = "text_page65";
          }
          else if(shared.textNumber > 92 && shared.textNumber <= 94) {
            prologueScreen66();
            page = "text_page66";
          }
          else if(shared.textNumber > 94 && shared.textNumber <= 96) {
            prologueScreen67();
            page = "text_page67";
          }
          else if(shared.textNumber > 96 && shared.textNumber <= 98) {
            prologueScreen68();
            page = "text_page68";
          }
          else if(shared.textNumber > 98 && shared.textNumber <= 100) {
            prologueScreen69();
            page = "text_page69";
          }
          else if(shared.textNumber > 100 && shared.textNumber <= 102) {
            prologueScreen70();
            page = "text_page70";
          }
          else if(shared.textNumber > 102 && shared.textNumber <= 104) {
            prologueScreen73();
            page = "text_page73";
          }
          else if(shared.textNumber > 104 && shared.textNumber <= 106) {
            prologueScreen74();
            page = "text_page74";
          }
          else if(shared.textNumber == 107) {
            choiceScreen7();
            page = "choice_page7";
          }
          else if(shared.textNumber > 107 && shared.textNumber <= 109) {
            prologueScreen75();
            page = "text_page75";
          }
          else if(shared.textNumber > 109 && shared.textNumber <= 111) {
            prologueScreen76();
            page = "text_page76";
          }
          else if(shared.textNumber == 112) {
            choiceScreen8();
            page = "choice_page8";
          }
          
          if(shared.answer8 == "B") {
            if(shared.textNumber > 112 && shared.textNumber <= 114) {
              prologueScreen79();
              page = "text_page79";
            }
            if(shared.textNumber > 114 && shared.textNumber <= 116) {
              prologueScreen80();
              page = "text_page80";
            }
            if(shared.textNumber > 116 && shared.textNumber <= 118) {
              prologueScreen81();
              page = "text_page81";
            }
            if(shared.textNumber > 118 && shared.textNumber <= 120) {
              prologueScreen82();
              page = "text_page82";
            }
            if(shared.textNumber > 120 && shared.textNumber <= 122) {
              prologueScreen83();
              page = "text_page83";
            }
            if(shared.textNumber > 122 && shared.textNumber <= 124) {
              prologueScreen84();
              page = "text_page84";
            }
            if(shared.textNumber > 124 && shared.textNumber <= 126) {
              prologueScreen85();
              page = "text_page85";
            }
            if(shared.textNumber > 126 && shared.textNumber <= 128) {
              prologueScreen86();
              page = "text_page86";
            }
            if(shared.textNumber > 128) {
              finalStage();
            }
          }
          else if(shared.answer8 == "A") {
            if(shared.textNumber == 113) {
              choiceScreen9_1();
              page = "choice_page9_1";
            }
            if(shared.answer9_1 == "B") {
              if(shared.textNumber == 114) {
                prologueScreen164();
                page = "text_page164";
              }
              if(shared.textNumber > 114) {
                endScreen8();
              }
            }
            if(shared.answer9_1 == "A") {
              if(shared.textNumber > 113 && shared.textNumber <= 115) {
                prologueScreen77();
                page = "text_page77";
              }
              else if(shared.textNumber > 115 && shared.textNumber <= 117) {
                prologueScreen78();
                page = "text_page78";
              }
              else if(shared.textNumber > 117) {
                shared.textNumber = 127;
                shared.answer8 = "B";
                shared.answer8Change = true;
              }
            }
            
          }
          
        }
      }
      
      else if(shared.answer5 == "A") {
        if(shared.textNumber == 62) {
          prologueScreen27();
          page = "text_page27";
        }
        else if(shared.textNumber > 62 && shared.textNumber <= 64) {
          prologueScreen28();
          page = "text_page28";
        }
        else if(shared.textNumber > 64 && shared.textNumber <= 66) {
          prologueScreen29();
          page = "text_page29";
        }
        else if(shared.textNumber > 66 && shared.textNumber <= 66) {
          prologueScreen30();
          page = "text_page30";
        }
        else if(shared.textNumber == 67) {
          prologueScreen31();
          page = "text_page31";
        }
        else if(shared.textNumber > 67 && shared.textNumber <= 69) {
          prologueScreen32();
          page = "text_page32";
        }
        else if(shared.textNumber > 69 && shared.textNumber <= 71) {
          prologueScreen33();
          page = "text_page33";
        }
        else if(shared.textNumber > 71 && shared.textNumber <= 73) {
          prologueScreen34();
          page = "text_page34";
        }
        else if(shared.textNumber > 73 && shared.textNumber <= 75) {
          prologueScreen35();
          page = "text_page35";
        }
        else if(shared.textNumber == 76) {
          choiceScreen6_1();
          page = "choice_page6_1";
        }
        
        if(shared.answer6_1 == "A") {
          if (shared.textNumber == 77) {
            endScreen6();
          }
        }
        else if(shared.answer6_1 == "B") {
          if (shared.textNumber > 76 && shared.textNumber <= 78) {
            prologueScreen36();
            page = "text_page36";
          }
          if (shared.textNumber > 78 && shared.textNumber <= 80) {
            prologueScreen37();
            page = "text_page37";
          }
          if (shared.textNumber > 80 && shared.textNumber <= 82) {
            prologueScreen38();
            page = "text_page38";
          }
          if (shared.textNumber > 82 && shared.textNumber <= 84) {
            prologueScreen39();
            page = "text_page39";
          }
          if (shared.textNumber > 84 && shared.textNumber <= 86) {
            prologueScreen40();
            page = "text_page40";
          }
          if (shared.textNumber > 86 && shared.textNumber <= 88) {
            prologueScreen41();
            page = "text_page41";
          }
          if (shared.textNumber > 88 && shared.textNumber <= 90) {
            prologueScreen42();
            page = "text_page42";
          }
          if (shared.textNumber > 90 && shared.textNumber <= 92) {
            prologueScreen43();
            page = "text_page43";
          }
          if (shared.textNumber > 92 && shared.textNumber <= 94) {
            prologueScreen44();
            page = "text_page44";
          }
          if (shared.textNumber > 94 && shared.textNumber <= 96) {
            prologueScreen45();
            page = "text_page45";
          }
          if (shared.textNumber > 96 && shared.textNumber <= 98) {
            prologueScreen46();
            page = "text_page46";
          }
          if (shared.textNumber > 98 && shared.textNumber <= 100) {
            prologueScreen47();
            page = "text_page47";
          }
          if (shared.textNumber > 100 && shared.textNumber <= 102) {
            prologueScreen48();
            page = "text_page48";
          }
          if (shared.textNumber > 102 && shared.textNumber <= 104) {
            prologueScreen49();
            page = "text_page49";
          }
          if (shared.textNumber > 104 && shared.textNumber <= 106) {
            prologueScreen50();
            page = "text_page50";
          }
          if (shared.textNumber > 106) {
            finalStage();
          }
        }
      }
    }
    
    
    
  }
  if (page == "choice_page1" || page == "choice_page2" || page == "choice_page3_1" || page == "choice_page3_2" ||
     page == "choice_page4_1" || page == "choice_page4_2" || page == "choice_page5" || page == "choice_page6_1" ||
     page == "choice_page6_2" || page == "choice_page7" || page == "choice_page8" || page == "choice_page9_1" ||
     page == "choice_page10_1" || page == "choice_page11") {

  }
  else {
    push();
    fill(255);
    text("Next Sentence: Press SPACE", 415, 585);
    pop();
  }
  
}
  
   // console.log(mouseY);
}