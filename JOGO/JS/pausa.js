var PauseFundo = new Image;
var pausa = new Image;
var opcoes = false;
pausa.src="IMG/pause4.png";
var volume = 100;
var pausaVolume = new Image();
pausaVolume.src="IMG/pauseVolume.png";

function pegarFundo(){
    PauseFundo.src=canvas.toDataURL();
}

function TelaPause(){
    ctx.drawImage(PauseFundo,0,0,1500,700);
    ctx.globalAlpha=0.5;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,1500,700);
    ctx.globalAlpha=1;
    if(opcoes==true){
        ctx.drawImage(pausaVolume,0,0);
    } else {
        ctx.drawImage(pausa,0,0);
    }
    if(opcoes==true){
        ctx.fillStyle="white";
        ctx.fillRect(625+volume*28/10,370,15,15);
    }
}