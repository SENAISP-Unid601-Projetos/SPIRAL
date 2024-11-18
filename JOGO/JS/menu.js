var menu = new Image();
menu.src="IMG/menu2.png"
var tic = 0;

var jogar=new Image();
jogar.src="IMG/jogar7.png";

function Menus(){
    var ponto = Math.floor(tic);
    ctx.drawImage(menu,1500*ponto,0,1500,700,0,0,1500,700);
    tic+=0.02;
    if(tic>2){
        tic=0;
    }
    ctx.drawImage(jogar,40,600);
}