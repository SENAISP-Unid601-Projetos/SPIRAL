var cavaleiro= new Image();
cavaleiro.src = "IMG/cavaleiro.png";
var pisca = 0;

var ataque = new Image();
ataque.src = "IMG/ataque.png";
var ataqueLinha = 0;
var ataqueX=0;
var ataqueY =0;
var ataqueW = 60;
var ataqueH = 60;

function drawPlayer() {
    //ctx.fillStyle = player.color;
    //ctx.fillRect(player.x, player.y, player.size, player.size);
    if(player.stun){
      if(pisca<4){
        ctx.drawImage(cavaleiro,0,85*13,70,85,player.x-(70-player.size)/2,player.y-(85-player.size),70,85);
      }
      pisca++;
      if(pisca==8){
        pisca=0;
      }
      } else if (!player.stun){
        ctx.drawImage(cavaleiro,70*Math.floor(player.coluna),85*player.linha,70,85,player.x-(70-player.size)/2,player.y-(85-player.size),70,85);
        if(!player.andando&&!player.attack&&player.health>0){
          if(player.direction=='right'){
            player.linha=0;
          } else if (player.direction=='left'){
            player.linha=1;
          } else if (player.direction=='up'){
            player.linha=3;
          } else {
            player.linha=2;
          }
          if(player.coluna<3.9){
            player.coluna+=0.05;
          } else {
            player.coluna=0;
          }
        }else  if(player.andando&&!player.attack&&player.health>0){
          if(player.direction=='right'){
            player.linha=4;
          } else if (player.direction=='left'){
            player.linha=5;
          } else if (player.direction=='up'){
            player.linha=7;
          } else {
            player.linha=6;
          }
          if(player.coluna<5.9){
            player.coluna+=0.1;
          } else {
            player.coluna=0;
          }
        } else if (player.health==0){
          player.linha=12;
          if(player.coluna<4.9){
            player.coluna+=0.1;
          } else {
            player.coluna=4;
          }
        }
      
        if (player.attack) {
          if(player.direction=='right'){
            player.linha=8;
          } else if (player.direction=='left'){
            player.linha=9;
          } else if (player.direction=='up'){
            player.linha=11;
          } else {
            player.linha=10;
          }
          if(player.coluna<4.9){
            player.coluna+=0.2;
          }
          //ctx.fillStyle = "yellow";
          attackWidth = 60*multiplicadores.alcance; 
          ataqueW=attackWidth;
          attackHeight = 20; 
          attackX = player.x;
          attackY = player.y;
    
      
          switch (player.direction) {
            case 'right':
              attackX += player.size;
              attackY+=player.size/2-attackHeight/2;
              ataqueLinha=0;
              ataqueW=attackWidth;
              ataqueH=60;
              ataqueX=player.x+player.size;
              ataqueY=player.y-15;
              break;
            case 'left':
              attackX -= attackWidth;
              attackY+=player.size/2-attackHeight/2;
              ataqueLinha=1;
              ataqueW=attackWidth;
              ataqueH=60;
              ataqueX=player.x-ataqueW;
              ataqueY=player.y-15;
              break;
            case 'up':
              attackWidth = 20; 
              attackHeight = 60*multiplicadores.alcance; 
              ataqueH=attackHeight;
              ataqueW=60;
              attackY -= attackHeight;
              attackX+=player.size/2-attackWidth/2;
              ataqueLinha=3;
              ataqueX=player.x-5;
              ataqueY=player.y-15-ataqueH;
              break;
            case 'down':
              attackWidth = 20;
              attackHeight = 60*multiplicadores.alcance; 
              ataqueH=attackHeight;
              ataqueW=60;
              attackY += player.size;
              attackX+=player.size/2-attackWidth/2;
              ataqueLinha=2;
              ataqueX=player.x-5;
              ataqueY=player.y+player.size;
              break;
          }
          //ctx.fillRect(attackX, attackY, attackWidth, attackHeight);
          ctx.drawImage(ataque,60*Math.floor((20-player.attackTimer)/(20/9)),60*ataqueLinha,60,60,ataqueX,ataqueY,ataqueW,ataqueH)
        }
      }
      if(player.cooldown>0){
        player.cooldown--;
      } else if (player.cooldown==0){
        player.stun=false;
      }
  }

  function movePlayer() {
    if (teclado.pressionada(A)&&player.x>250+parede) {
      player.dx =-playerSpeed*multiplicadores.velocidade;
      player.direction = 'left';
    } 

    if (teclado.pressionada(D)&&player.x<1250-parede-player.size) {
      player.dx =playerSpeed*multiplicadores.velocidade;
      player.direction = 'right';
    } 

    if (teclado.pressionada(W)&&player.y>parede) {
      player.dy= -playerSpeed*multiplicadores.velocidade;
      player.direction = 'up';
    } 

    if (teclado.pressionada(S)&&player.y<700-parede-player.size) {
      player.dy =playerSpeed*multiplicadores.velocidade;
      player.direction = 'down';
    }

    const newX = player.x+player.dx;
    const newY = player.y+player.dy;

    if (!isWall(newX, player.y)) {
      if(player.dx!=0){
        somPassos.play();
      }
      player.x = newX;
  }
  if (!isWall(player.x, newY)) {
    if(player.dy!=0){
      somPassos.play();
    }
      player.y = newY;
  }
    player.dx=0;
    player.dy=0;

    if(teclado.pressionada(J)&&player.attackCodau==0){
      player.coluna=0;
      player.attack = true;
      player.attackTimer = 20;
      player.attackCodau=30;
    }
  }