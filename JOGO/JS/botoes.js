canvas.addEventListener("click", (e) => {
    const elRect = e.target.getBoundingClientRect()
    var cliquex = Math.floor(e.clientX - elRect.left);
    var cliquey = Math.floor(e.clientY - elRect.top);


    if(iniciou&&!jogando&&cliquex>40&&cliquex<40+105&&
        cliquey>600&&cliquey<600+45){
            somBotao.pause();
            somBotao.currentTime=0;
            somBotao.play();
            jogando=true;
        }
    if(pausado&&!opcoes&&cliquex>605&&cliquex<605+290&&
        cliquey>310&&cliquey<310+62){
            somBotao.pause();
            somBotao.currentTime=0;
            somBotao.play();
            pausado=false;
        } else if(pausado&&!opcoes&&cliquex>605&&cliquex<605+290&&
        cliquey>415&&cliquey<415+62){
            somBotao.pause();
            somBotao.currentTime=0;
            somBotao.play();
            opcoes=true;
        }

    if(pausado&&opcoes&&cliquex>605&&cliquex<605+290&&
            cliquey>450&&cliquey<450+62){
                opcoes=false;
                somBotao.pause();
                somBotao.currentTime=0;
                somBotao.play();
            }

    if(pausado&&opcoes&&cliquey>350&&cliquey<350+50&&cliquex>625&&cliquex<625+290){
        volume=(cliquex-630)*10/28;
        AtualizarVolume();
    }

    if(mercador.ativo&&cliquex>1060&&cliquex<1060+145&&cliquey>630&&cliquey<630+55){
        mercador.ativo=false;
    }

    if(player.denero>=itensVendendo.p1&&mercador.ativo&&mercador.item1&&cliquex>250+565-2.5&&cliquex<250+565-2.5+50&&cliquey>455&&cliquey<455+50){
        player.denero-=itensVendendo.p1;
        mercador.item1=false;
        somCompra.pause();
        somCompra.currentTime=0;
        somCompra.play();
        if(itensVendendo.i1!=5){
            itens[itensAdquiridos]=itensVendendo.i1;
            itensAdquiridos++;
        }else {
            if(player.health<8){
                somCura.pause();
                somCura.currentTime=0;
                somCura.play();
                player.health++
            }
        }
    }

    if(player.denero>=itensVendendo.p2&&mercador.ativo&&mercador.item2&&cliquex>250+700-2.5&&cliquex<250+700-2.5+50&&cliquey>455&&cliquey<455+50){
        player.denero-=itensVendendo.p2;
        mercador.item2=false;
        somCompra.pause();
        somCompra.currentTime=0;
        somCompra.play();
        if(itensVendendo.i2!=5){
            itens[itensAdquiridos]=itensVendendo.i2;
            itensAdquiridos++;
        }else {
            if(player.health<8){
                somCura.pause();
                somCura.currentTime=0;
                somCura.play();
                player.health++
            }
        }
    }

    if(player.denero>=itensVendendo.p3&&mercador.ativo&&mercador.item3&&cliquex>250+835-2.5&&cliquex<250+835-2.5+50&&cliquey>455&&cliquey<455+50){
        player.denero-=itensVendendo.p3;
        mercador.item3=false;
        somCompra.pause();
        somCompra.currentTime=0;
        somCompra.play();
        if(itensVendendo.i3!=5){
            itens[itensAdquiridos]=itensVendendo.i3;
            itensAdquiridos++;
        } else {
            if(player.health<8){
                somCura.pause();
                somCura.currentTime=0;
                somCura.play();
                player.health++
            }
        }
    }





    if(gameOver&&cliquex>0&&cliquey>0){
        resetGame();
        jogando=false;
        iniciou=true;
    }

});