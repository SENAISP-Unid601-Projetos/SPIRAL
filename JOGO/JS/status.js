var stats=new Image();
stats.src="IMG/status.png";
var heart=new Image();
heart.src="IMG/coracao.png";
var contagemDinheiro = new Image();
contagemDinheiro.src = "IMG/contagem2.png"
var vivo=true;
var TelaMorte = new Image();
TelaMorte.src="IMG/telamorte.png";

function barraE(){
    ctx.drawImage(stats,0,0);
    for(i=0;i<player.health;i++){
        ctx.drawImage(heart,15+25*i,275);
    }
}

function moedas(){
    ctx.drawImage(contagemDinheiro,45*Math.floor(player.denero/10),0,45,45,60,215,45,45);
    ctx.drawImage(contagemDinheiro,45*(player.denero-(Math.floor(player.denero/10)*10)),0,45,45,105,215,45,45);
}