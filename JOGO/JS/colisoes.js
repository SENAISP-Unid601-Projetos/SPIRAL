function checkCollisions() {
    dropsH.forEach(coracao => {
        if(!coracao.picked){
          if (player.x < coracao.x + coracao.size &&
            player.x + player.size > coracao.x &&
            player.y < coracao.y + coracao.size &&
            player.y + player.size > coracao.y) {
              coracao.picked=true;
              if(player.health<8){
                somCura.pause();
                somCura.currentTime=0;
                somCura.play();
                player.health+=1;
              }
            }
        }
    });
  
    dropsC.forEach(moeda => {
      if(!moeda.picked){
        if (player.x < moeda.x+moeda.size &&
          player.x + player.size > moeda.x &&
          player.y < moeda.y+moeda.size &&
          player.y + player.size > moeda.y) {
            moeda.picked=true;
              player.denero+=3;
              somColeta.pause();
              somColeta.currentTime=0;
              somColeta.play();
          }
      }
  });


    screens[currentScreen].enemies.forEach(enemy => {
      if (enemy.alive) {
        if (!gameOver&&!player.stun&&player.x < enemy.x + enemy.size &&
            player.x + player.size > enemy.x &&
            player.y < enemy.y + enemy.size &&
            player.y + player.size > enemy.y) {
              somDanosofrido.pause();
              somDanosofrido.currentTime=0;
              somDanosofrido.play();
          player.health -= 1;
          if(player.health==0){
            player.coluna=0;
          }
          player.stun=true;
          player.cooldown=30*multiplicadores.escudo;
        } else if(!gameOver&&!enemy.stunned&&player.attack&&attackX < enemy.x + enemy.size &&
          attackX + attackWidth > enemy.x &&
          attackY < enemy.y + enemy.size &&
          attackY + attackHeight > enemy.y){
            enemy.stunned=true;
            enemy.lifeCooldown=40;
            enemy.stunCooldown=20;
              if(enemy.life>0){
                enemy.life-=player.attackDamage*multiplicadores.dano;
                somDanodado.pause();
                somDanodado.currentTime=0;
                somDanodado.play();
              } if(enemy.life-player.attackDamage<0) {
                enemy.alive=false;
                if(Math.random() < 0.2){
                  dropHeart(enemy.x,enemy.y);
                }
                if(Math.random() < 0.75){
                  dropCoin(enemy.x,enemy.y);
                }
                killCount++; 
                somInimigomorto.pause();
                somInimigomorto.currentTime=0;
                somInimigomorto.play();
              }
          }
      }
    });
  
    projectiles.forEach(proj => {
      if (!gameOver&&proj.display&&!player.stun&& player.x < proj.x + proj.size &&
          player.x + player.size > proj.x &&
          player.y < proj.y + proj.size &&
          player.y + player.size > proj.y) {
            somDanosofrido.pause();
            somDanosofrido.currentTime=0;
            somDanosofrido.play();
        player.health -= 1;
        if(player.health==0){
          player.coluna=0;
        }
        player.stun=true;
        player.cooldown=30*multiplicadores.escudo;
        proj.display = false; 
      } else if(player.attack&&attackX < proj.x + proj.size &&
          attackX + attackWidth > proj.x &&
          attackY < proj.y + proj.size &&
          attackY + attackHeight > proj.y){
              proj.display = false; 
      }
    });
  }


