const portas = ["IMG/portaCima.png","IMG/portaEsquerda.png","IMG/portaBaixo.png","IMG/portaDireita.png"];
var imgPorta = new Image();
var PortaCol=0;

function drawDoor() {
    if (door) {
      if(!jaTocou[1]){
        somPorta.play();
        jaTocou[1]=true;
      }

      if(PortaCol<6){
        PortaCol+=0.25;
      }
    }
  }
  
  function createDoor() {
    imgPorta.src=portas[currentScreen];
    ctx.drawImage(imgPorta,1000*Math.floor(PortaCol),0,1000,700,250,0,1000,700);
    if (screens[currentScreen].enemies.every(enemy => !enemy.alive)) {
      door = { width: 110, height: 80 };
      switch (currentScreen) {
        case 0: 
          door.x = screenWidth / 2 - door.width / 2+250; 
          door.y = 0; 

          break;
        case 1: 
          door.height=110;
          door.width=80;
          door.x = 250; 
          door.y = screenHeight / 2 - door.height / 2; 

          break;
        case 2: 
          door.x = screenWidth / 2 - door.width / 2+250; 
          door.y = screenHeight - door.height;

          break;
        case 3: 
          door.height=110;
          door.width=80;
          door.x = screenWidth - door.width+250; 
          door.y = screenHeight / 2 - door.height / 2; 

          break;
      }
    } else {
      door = null; 
    }
  }