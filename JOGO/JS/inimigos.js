var projetil = new Image();
projetil.src="IMG/fogo.png";

var slime = new Image();
slime.src = "IMG/slime.png";

var mago = new Image();
mago.src = "IMG/mago2.png";

var fantasma = new Image();
fantasma.src = "IMG/fantasma2.png";

var livro = new Image();
livro.src = "IMG/livro.png";

const fantasminha = {valor: 0};

const screens = [
    { enemies: [] },
    { enemies: [] },
    { enemies: [] },
    { enemies: [] }
  ];
  
  function generateEnemies(screenIndex) {
    Barreiras();
    var numberOfEnemies = screenIndex + 3 + loopCount-multiplicadores.bomba; 
    if (numberOfEnemies<0){numberOfEnemies=0}
    screens[screenIndex].enemies = [];
    for (let i = 0; i < numberOfEnemies; i++) {
      const type = Math.random() < 0.5 ? 'follower' : 'shooter';
      const posicao = Math.floor(Math.random() *Spawns.length);
      const enemy = {
        x: 250+parede+Spawns[posicao].x*50,
        y: parede+Spawns[posicao].y*50,
        size: 50,
        color: type === 'follower' ? 'red' : 'purple',
        speed:type === 'follower' ? 1.5 : 1,
        type: type,
        alive: true,
        life:10+loopCount*2-multiplicadores.vida,
        lifeCooldown:0,
        shootingDistance: type === 'shooter' ? 150 : 0,
        canShoot: false,
        stunned: false,
        stunCooldown:0,
        shootCooldown: 0, 
        coluna:0,
        linha:0,
        valor: 0
      };
      screens[screenIndex].enemies.push(enemy);
      Spawns.slice(posicao,1);
    }
  }


function drawEnemies() {
    screens[currentScreen].enemies.forEach(enemy => {
      if(enemy.life<=0){
        enemy.alive=false;
      }
      if (enemy.alive) {
        //ctx.fillStyle = enemy.color;
        //ctx.fillRect(enemy.x, enemy.y, enemy.size, enemy.size);
        if(enemy.type==='follower'){
          if(loopCount>1){
            if(enemy.desce){
              enemy.valor-=0.02;
              if(enemy.valor<0.04){
                enemy.valor=0;
                enemy.desce=false;
              }
            } else {
              if(enemy.valor<1){
                enemy.valor+=0.02;
              } else if (enemy.valor>=1){
                enemy.desce=true;
                enemy.valor=1;
              }
            }
            ctx.globalAlpha=enemy.valor;
            ctx.drawImage(fantasma,60*Math.floor(enemy.coluna)+0.2,60*enemy.linha+0.2,60-0.2,60-0.2,enemy.x-(60-enemy.size)/2,enemy.y-(60-enemy.size)/2,60,60);
            if(enemy.coluna<1.9){
              enemy.coluna+=0.02;
            } else {
              enemy.coluna=0;
            }
            ctx.globalAlpha=1;
          } else {
            ctx.drawImage(slime,60*Math.floor(enemy.coluna),0,60,60,enemy.x-(60-enemy.size)/2,enemy.y-(60-enemy.size)/2,60,60);
            if(enemy.coluna<1.9){
              enemy.coluna+=0.02;
            } else {
              enemy.coluna=0;
            }
          }

        } else {
          if(loopCount<3){
            if(enemy.shootCooldown<20&&enemy.shootCooldown>=0&&enemy.canShoot){
              ctx.drawImage(mago,60*2+0.2,60*enemy.linha+0.3,60-0.2,60-0.4,enemy.x-(60-enemy.size)/2,enemy.y-(60-enemy.size)/2,60,60);
            } else{
              ctx.drawImage(mago,60*Math.floor(enemy.coluna)+0.2,60*enemy.linha+0.3,60-0.2,60-0.4,enemy.x-(60-enemy.size)/2,enemy.y-(60-enemy.size)/2,60,60);
              if(enemy.coluna<1.9){
                enemy.coluna+=0.02;
              } else {
                enemy.coluna=0;
              }
            }
          } else {
            ctx.drawImage(livro,60*Math.floor(enemy.coluna),0,60,60,enemy.x-(60-enemy.size)/2,enemy.y-(60-enemy.size)/2,60,60);
            if(enemy.coluna<3.9){
              enemy.coluna+=0.02;
            } else {
              enemy.coluna=0;
            }
          }

        }
        if(enemy.lifeCooldown>0){
          drawLifeBar(enemy.x,enemy.y,enemy.life);
          enemy.lifeCooldown--;
        }
      }
    });
  }
  
  function drawProjectiles() {
    projectiles.forEach(proj => {if(proj.display){
      //ctx.fillStyle = 'yellow';
      //ctx.fillRect(proj.x, proj.y, proj.size, proj.size);
      ctx.drawImage(projetil,30*Math.floor(proj.coluna),0,30,30,proj.x-(30-proj.size)/2,proj.y-(30-proj.size),30,30);
      if(proj.coluna<1.9){
        proj.coluna+=0.2;
      }else {
        proj.coluna=0;
      }
      }
    });
  }

  function moveEnemies() {
    screens[currentScreen].enemies.forEach(enemy => {
      if (!enemy.alive) return;
  
      const dx = player.x - enemy.x;
      const dy = player.y - enemy.y;
      const distance = Math.sqrt(dx **2+ dy**2);
      if(dx>=0){
        enemy.linha=0;
      } else {
        enemy.linha=1;
      }


      if(!enemy.stunned){
        if (enemy.type === 'follower') {
          const moveX = (dx / distance) * enemy.speed;
          const moveY = (dy / distance) * enemy.speed;
          const newEnemyX = enemy.x+moveX;
          const newEnemyY = enemy.y+moveY;

          if(loopCount>1){
            enemy.x = newEnemyX;
            enemy.y = newEnemyY;
          } else {
            if (!isWall(newEnemyX, enemy.y)) {
              enemy.x = newEnemyX;
          }
          if (!isWall(enemy.x, newEnemyY)) {
              enemy.y = newEnemyY;
          }  
          }
        
        } else if (enemy.type === 'shooter') {
          if (distance < enemy.shootingDistance) {
            enemy.canShoot = true; 
            enemy.shootCooldown--; 
            if (enemy.shootCooldown <= 0) {
              shootProjectile(enemy);
              somProjetil.pause();
              somProjetil.currentTime=0.2;
              somProjetil.play();
              enemy.shootCooldown = 50; 
            }
          } else {
            enemy.canShoot=false;
            const moveX = (dx / distance) * enemy.speed;
            const moveY = (dy / distance) * enemy.speed;
            const newEnemyX = enemy.x+moveX;
            const newEnemyY = enemy.y+moveY;
            if (!isWall(newEnemyX, enemy.y)) {
                    enemy.x = newEnemyX;
                }
                if (!isWall(enemy.x, newEnemyY)) {
                    enemy.y = newEnemyY;
                }
          }
        }
      } else {
        if(enemy.stunCooldown>0){
          enemy.stunCooldown--;
          if(enemy.stunCooldown>10){
            newEnemyX =enemy.x-dx/10*(enemy.stunCooldown/20)**2;
            newEnemyY =enemy.y-dy/10*(enemy.stunCooldown/20)**2;

            if (!isWall(newEnemyX, enemy.y)&&enemy.x>250+parede&&enemy.x<1250-parede-enemy.size) {
              enemy.x = newEnemyX;
          }
          if (!isWall(enemy.x, newEnemyY)&&enemy.y>parede&&enemy.y<700-parede-enemy.size) {
              enemy.y = newEnemyY;
          }
          }
        } else {
          enemy.stunned=false;
        }
      }
    });
  }

  function shootProjectile(enemy) {
    const proj = {
      x: enemy.x + enemy.size / 2,
      y: enemy.y + enemy.size / 2,
      size: 10,
      speed: loopCount > 2 ? 4:3,
      direction: Math.atan2(player.y - enemy.y, player.x - enemy.x),
      display: true,
      coluna:0
    };
    projectiles.push(proj);
  }
  
  function moveProjectiles() {
    projectiles.forEach(proj => {if(proj.display){
      proj.x += Math.cos(proj.direction) * proj.speed;
      proj.y += Math.sin(proj.direction) * proj.speed;
      }
    });
  }
  
  function drawLifeBar(a,b,c){
    ctx.fillStyle="white";
    ctx.fillRect(a-25,b-40,c*8+20,25);
    ctx.fillStyle="black";
    ctx.fillRect(a-20,b-35,c*8+10,15);
    ctx.fillStyle="red";
    ctx.fillRect(a-15,b-30,c*8,5);
  }