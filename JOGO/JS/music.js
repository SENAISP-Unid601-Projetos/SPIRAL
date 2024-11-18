var musicaCreditos,musicaInicial,
somBotao,somColeta,somPorta,somCompra,
somCura,musicaMercado,somProjetil,somGameover,
somInimigomorto,somDanodado,somDanosofrido,somPassos,
M1,M2,M3,M4;
var jaTocou = [false,false,false];
var som = 0.5

function carregarMusicas(){
    M1 = new Audio();
    M1.src = 'SND/M1.mp3';
    M1.load();
    M1.volume = 0.2*volume/100;
    M1.loop=true;

    M2 = new Audio();
    M2.src = 'SND/M2.ogg';
    M2.load();
    M2.volume = 0.1*volume/100;
    M2.loop=true;

    M3 = new Audio();
    M3.src = 'SND/M3.mp3';
    M3.load();
    M3.volume = 0.2*volume/100;
    M3.loop=true;

    M4 = new Audio();
    M4.src = 'SND/M4.mp3';
    M4.load();
    M4.volume = 0.2*volume/100;
    M4.loop=true;


    musicaCreditos = new Audio();
    musicaCreditos.src = 'SND/Credits.mp3';
    musicaCreditos.load();
    musicaCreditos.volume = 0.2*volume/100;
    //musicaCreditos.loop = false;
    musicaMercado = new Audio();
    musicaMercado.src = 'SND/Mercador.mp3';
    musicaMercado.load();
    musicaMercado.volume = 0.2*volume/100;
    musicaMercado.loop=true;

    somInimigomorto = new Audio();
    somInimigomorto.src = 'SND/Inimigo Morto.flac';
    somInimigomorto.load();
    somInimigomorto.volume = 0.1*volume/100;
    somInimigomorto.loop=false;

    somGameover = new Audio();
    somGameover.src = 'SND/GameOver.wav';
    somGameover.load();
    somGameover.volume = 0.5*volume/100;
    somGameover.loop=false;

    somPassos = new Audio();
    somPassos.src = 'SND/Passos.mp3';
    somPassos.load();
    somPassos.volume = 0.02*volume/100;
    somPassos.loop=false;

    somDanosofrido = new Audio();
    somDanosofrido.src ='SND/danodado.mp3';
    somDanosofrido.load();
    somDanosofrido.volume = 0.2*volume/100;
    somDanosofrido.loop=false;

    somDanodado = new Audio();
    somDanodado.src ='SND/danosofrido.wav';
    somDanodado.load();
    somDanodado.volume = 0.1*volume/100;
    somDanodado.loop=false;


    somProjetil = new Audio();
    somProjetil.src = 'SND/Projetil.mp3';
    somProjetil.load();
    somProjetil.volume = 0.3*volume/100;
    somProjetil.loop=false;

    musicaInicial = new Audio();
    musicaInicial.src = 'SND/Menu-Cutscene.mp3';
    musicaInicial.load();
    musicaInicial.volume = 0.1*volume/100;
    musicaInicial.loop=true;

    
    somBotao = new Audio();
    somBotao.src = 'SND/Botao.ogg';
    somBotao.load();
    somBotao.volume = 0.5*volume/100;
    somBotao.loop=false;

    somColeta = new Audio();
    somColeta.src = 'SND/Coleta.ogg';
    somColeta.load();
    somColeta.volume = 0.5*volume/100;
    somColeta.loop=false;

    somPorta = new Audio();
    somPorta.src = 'SND/Door.mp3';
    somPorta.load();
    somPorta.volume = 0.5*volume/100;
    somPorta.loop=false;

    somCompra = new Audio();
    somCompra.src = 'SND/Compra.ogg';
    somCompra.load();
    somCompra.volume = 0.2*volume/100;
    somCompra.loop=false;

    somCura = new Audio();
    somCura.src = 'SND/Cura.mp3';
    somCura.load();
    somCura.volume = 0.2*volume/100;
    somCura.loop=false;

/*
    passos = new Audio();
    passos.src = 'SND/PASSOS.mp3';
    passos.load();
    passos.volume = 0.5;
    passos.loop = true;

    respirando = new Audio();
    respirando.src = 'SND/respirando.mp3';
    respirando.load();
    respirando.volume = 0.2;
    respirando.loop = true;
*/
 };

 function AtualizarVolume(){
    M1.volume = 0.2*volume/100;
    M2.volume = 0.1*volume/100;
    M3.volume = 0.2*volume/100;
    M4.volume = 0.2*volume/100;
    musicaCreditos.volume = 0.2*volume/100;
    musicaMercado.volume = 0.2*volume/100;
    somInimigomorto.volume = 0.1*volume/100;
    somGameover.volume = 0.5*volume/100;
    somPassos.volume = 0.02*volume/100;
    somDanosofrido.volume = 0.2*volume/100;
    somDanodado.volume = 0.1*volume/100;
    somProjetil.volume = 0.3*volume/100;
    musicaInicial.volume = 0.1*volume/100;
    somBotao.volume = 0.5*volume/100;
    somColeta.volume = 0.5*volume/100;
    somPorta.volume = 0.5*volume/100;
    somCompra.volume = 0.2*volume/100;
    somCura.volume = 0.2*volume/100;
 }