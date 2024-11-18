const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
var teclado = new Teclado(document);
const screenWidth = 1000;
const screenHeight = 700;
var fundoI=new Image();
fundoI.src="IMG/chaoFINAL.png";
var fundoRecorte=0;
var aparecer=false;
var tutorial = new Image();
tutorial.src="IMG/tutorial.png";

var playerSpeed=5;

const player = {
  x: screenWidth / 2 - 15+250,
  y: screenHeight / 2 - 15,
  size: 50,
  color: 'blue',
  dx:0,
  dy:0,
  health: 8,
  attack: false,
  attackDamage: 2,
  attackTimer: 0,
  attackCodau:0,
  denero: 50,
  direction: 'right',
  cooldown:0,
  stun: false,
  coluna:0,
  linha:0,
  andando: false
};

const multiplicadores = {
  dano: 1,
  velocidade: 1,
  alcance: 1,
  vida: 0,
  bomba: 0,
  escudo: 0
}



let currentScreen = 0;
let loopCount = 0;
let killCount = 0;
let roomCount = 1;
let enemies = [];
let projectiles = [];
let gameOver = false;
let canProceed = false;
let door = null;
let jogando = false;
let pausado = false;
let iniciou = false;
let parede=75;
let attackX = player.x;
let attackY = player.y;
let attackWidth = 60; 
let attackHeight = 20;


carregarMusicas();
screens.forEach((_, index) => generateEnemies(index));

function resetGame() {
  player.x = screenWidth / 2 - 15+250;
  player.y = screenHeight / 2 - 15;
  player.health = 8;
  player.denero=0;
  player.coluna = 0;
  player.linha = 3;
  ataqueW = 60;
  ataqueH = 60;
  player.direction = "down";
  killCount = 0;
  loopCount = 0;
  roomCount = 1;
  currentScreen = 0;
  gameOver = false;
  projectiles = [];
  canProceed = false;
  dropsH = [];
  dropsC = [];
  multiplicadores.dano=100;
  multiplicadores.vida=1;
  multiplicadores.bomba=0;
  multiplicadores.alcance=1;
  multiplicadores.escudo=0;
  multiplicadores.velocidade=1;
  mercador.item1=true;
  mercador.item2=true;
  mercador.item3=true;
  itensAdquiridos=0;
  itens = [7,7,7,7,7,7,7,7,7];
  YR=680;
  PortaCol=0;
  somGameover.pause();
  M1.currentTime=0;
  M2.currentTime=0;
  M3.currentTime=0;
  M4.currentTime=0;
  musicaMercado.currentTime=0;
  somGameover.currentTime=0;
  jaTocou = [false,false,false];
  door = null; 
  screens.forEach((_, index) => generateEnemies(index));
  volume=100;
  AtualizarVolume();
}

var final=false;

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(!jogando){
      musicaInicial.play();
        if(!iniciou){
            CenaCorte();
        }else if (iniciou){
            ctx.globalAlpha=1;
            Menus();
        }
    }else if(jogando&&!pausado&&!mercador.ativo&&!final){
      musicaInicial.pause();
      

      if(roomCount<4){
        fundoRecorte=0;
      } else if (roomCount==4){
        fundoRecorte=1;
      } else if (roomCount>4&&roomCount<8){
        fundoRecorte=2;
      } else if (roomCount==8){
        fundoRecorte=3;
      } else if (roomCount>8&&roomCount<12){
        fundoRecorte=4;
      } else if (roomCount==12){
        fundoRecorte=5;
      } else if (roomCount>12){
        fundoRecorte=6;
      }
        ctx.drawImage(fundoI,1000*fundoRecorte,0,1000,700,250,0,1000,700);
        if(loopCount==0&&currentScreen==0){
          screens[currentScreen].enemies.forEach(enemy => {
            if (enemy.alive) {
             enemy.alive=false;
            }
          });
          Spawns= [];
          Walls= [];
          SpawnsMercador = [];
        }


        if(loopCount==0&&currentScreen==0){
          ctx.drawImage(tutorial,250,0);
          mercador.apareceu=false;
        } else {
          if(mercador.apareceu){

            mercado();
          }
        }
        DrawTiles();
        
        createDoor();
        drawDrops();
        drawEnemies();
        drawPlayer();


        drawDoor(); 


        if(!gameOver){
          checkCollisions();
        }


        if (player.attack) {
          player.attackTimer--;
          if (player.attackTimer <= 0){player.attack = false};
        }

        if(!player.attack&&player.attackCodau>0){
          player.attackCodau--;
        }
      
        if(!gameOver){
            movePlayer();
            moveEnemies();
            moveProjectiles();
            if(loopCount==0){
              M1.play();
            } else if(loopCount==1){
              M1.pause();
              M2.play();
            } else if (loopCount==2){
              M2.pause();
              M3.play();
            } else if (loopCount==3){
              M3.pause();
              M4.play();
            }
        }


        drawProjectiles();


        canProceed = screens[currentScreen].enemies.every(enemy => !enemy.alive);
        if(canProceed&&!aparecer){
          var rodar = Math.random();
          if(rodar<0.65){
            mercador.apareceu=true;
          }
          aparecer=true;
        }
      
 
        if (canProceed && door &&
            player.x < door.x + door.width &&
            player.x + player.size > door.x &&
            player.y < door.y + door.height &&
            player.y + player.size > door.y) {
              if(YR-40==40){
                //pegarFundo();
                final=true;
              } else{
                somPorta.pause();
                somPorta.currentTime=0;
                jaTocou[1]=false;
          currentScreen = (currentScreen + 1) % screens.length;
          mercador.apareceu=false;
          mercador.rodou=false;
          PortaCol=0;
          dropsH = [];
          dropsC = [];
          roomCount++;
          mercador.item1=true;
          mercador.item2=true;
          mercador.item3=true;
          YR-=40;
          aparecer=false;
          mercador.apareceu=false;
          loopCount=Math.floor((roomCount-1)/4);
          mercador.rodou=false;

      

          switch (currentScreen) {
            case 0: 
              player.x = 250+parede; 
              player.y = screenHeight / 2 - player.size / 2; 
              break;
            case 1: 
              player.x = screenWidth / 2 - player.size / 2+250; 
              player.y = screenHeight - player.size-parede; 
              break;
            case 2: 
              player.x = screenWidth - player.size+250-parede; 
              player.y = screenHeight / 2 - player.size / 2; 
              break;
            case 3: 
              player.x = screenWidth / 2 - player.size / 2+250; 
              player.y = 0+parede; 
              break;
          }
          generateEnemies(currentScreen);
              }
        }

        if(!mercador.ativo){
          musicaMercado.pause();
          musicaMercado.currentTime=0;
        }



   
        if (player.health <= 0) {
            gameOver = true;
          }



    } else if(pausado&&!mercador.ativo&&!final){
      player.dx=0;
      player.dy=0;
        TelaPause();
    } else if (mercador.ativo&&!final){
      M1.pause();
      M2.pause();
      M3.pause();
      M4.pause();
        musicaMercado.play();
        Mercadao();
    } else if (final){
      M4.pause();
      CutsceneFinal();
    }


    if(jogando&&!pausado&&!final){
      Torre();
      setaC();
      barraE();
      moedas();
      DrawItens();
      Intro();
    }
    if(gameOver){
      M1.pause();
      M2.pause();
      M3.pause();
      M4.pause();
      if(Math.floor(player.coluna)==4){
        if(!jaTocou[2]){
          somGameover.play();
          jaTocou[2]=true;
        }
        ctx.drawImage(TelaMorte,0,0);
      }
    }


    if (teclado.pressionada(A)||teclado.pressionada(D)||teclado.pressionada(W)||teclado.pressionada(S)) {
      player.andando = true;
    } else if (!teclado.pressionada(A)&&!teclado.pressionada(D)&&!teclado.pressionada(W)&&!teclado.pressionada(S)){
      player.andando=false;
    }



    if(teclado.pressionada(ENTER)&&!pausado&&jogando&&iniciou&&!final&&!mercador.ativo){
        //pegarFundo();
        somBotao.pause();
        somBotao.currentTime=0;
        somBotao.play();
        pausado=true;
      } 
      if(teclado.pressionada(ENTER)&&!jogando&&!iniciou&&!final){
        TempoCutsene=0;
        cenaAtual=1;
        iniciou=true;
        ctx.globalAlpha=1;
      }
      if(teclado.pressionada(K)&&mercador.apareceu&&!final&&!mercador.ativo&&
    
      player.x < mercador.x-mercador.size + 3*mercador.size &&
      player.x + player.size > mercador.x-mercador.size &&
      player.y < mercador.y-mercador.size + 3*mercador.size &&
      player.y + player.size > mercador.y-mercador.size
    
    ){
      mercador.ativo=true
    }
  requestAnimationFrame(gameLoop);
}



resetGame();
//gameLoop();
//setInterval(gameLoop,1000/60);

function chama(){
  document.getElementById("butao").classList.add("sumiu");
  document.getElementById("voltar").classList.add("sumiu");
  gameLoop();
}