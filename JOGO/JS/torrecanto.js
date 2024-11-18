var TorreM = new Image();
TorreM.src="IMG/TORRE.png";
var seta = new Image();
seta.src="IMG/SU3.png";
var YR=680;
var mato=new Image();
mato.src="IMG/NA3.png";

function setaC(){
   ctx.drawImage(seta,1400,YR);
   ctx.drawImage(mato,1250,0);
}

function Torre(){
    ctx.drawImage(TorreM,1250,0);
}