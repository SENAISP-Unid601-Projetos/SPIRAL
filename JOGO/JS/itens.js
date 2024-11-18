var dropsH = [];
var dropsC = [];
var moedaImg = new Image();
moedaImg.src="IMG/moeda.png";
var Loja = new Image();
Loja.src = "IMG/lojaja.png";
var mercadorDesenho = new Image();
mercadorDesenho.src = "IMG/mercador.png";
var tapete = new Image();
tapete.src="IMG/tapete.png";
var itens = [7,7,7,7,7,7,7,7,7];
var itensAdquiridos = 0;
var ImgItens = new Image();
ImgItens.src = "IMG/vendas.png";
var LinhaItens=0;
var descricoes = new Image();
descricoes.src = "IMG/descricoes.png";

function dropHeart(a,b){
    const coracao = {x:a,y:b,size:27, picked: false};
    dropsH.push(coracao);
}

function dropCoin(a,b){
    const moeda = {x:a+20,y:b+20,size:27, picked: false};
    dropsC.push(moeda);
}

function drawDrops(){
    dropsH.forEach(coracao => {
        if(!coracao.picked){
            ctx.drawImage(heart,coracao.x,coracao.y,coracao.size,coracao.size);
        }
    });

    dropsC.forEach(moeda=> {
        if(!moeda.picked){
            ctx.drawImage(moedaImg,moeda.x,moeda.y,moeda.size,moeda.size);
        }
    });
}

function DrawItens(){
    var contSpeed=0,contDano=0,contAlcance=0,contVida=0,contBomb=0,contEscudo=0; 
    for(c=0;c<itens.length;c++){
        ctx.drawImage(ImgItens,50*itens[c],0,50,50,25+50*LinhaItens,35+50*Math.floor(c/3),50,50);
        LinhaItens++;
        if(LinhaItens==3){
            LinhaItens=0;
        }
        if(itens[c]==0){
            contDano+=1
        }else if (itens[c]==1){
            contVida+=1
        }else if(itens[c]==2){
            contSpeed+=1
        }else if(itens[c]==3){
            contBomb+=1
        }else if(itens[c]==4){
            contAlcance+=1
        }else if(itens[c]==6){
            contEscudo+=1
        }
    }
    multiplicadores.velocidade=1+(contSpeed/10);
    multiplicadores.dano=1+(contDano/10);
    multiplicadores.vida=contVida;
    multiplicadores.bomba=contBomb;
    multiplicadores.alcance=1+(contAlcance/10);
    multiplicadores.escudo=1+(contEscudo/10);
}


const mercador = {
    x: 350,
    y: 350,
    size: 50,
    apareceu: false,
    ativo: false,
    rodou:false,
    coluna:0,
    item1: true,
    item2: true,
    item3: true
  }

const precos = [15,30,10,25,15,5,20];

  const itensVendendo = {
    i1:0,
    i2:0,
    i3:0,
    p1:0,
    p2:0,
    p3:0
  }

function mercado(){
    if(!mercador.rodou){
        var coiso = Math.floor(Math.random()*SpawnsMercador.length);
        mercador.x =250+parede+SpawnsMercador[coiso].x*50;
        mercador.y =parede+SpawnsMercador[coiso].y*50;
        itensVendendo.i1=Math.floor(Math.random()*7);
        itensVendendo.p1=precos[itensVendendo.i1];
        itensVendendo.i2=Math.floor(Math.random()*7);
        itensVendendo.p2=precos[itensVendendo.i2];
        itensVendendo.i3=Math.floor(Math.random()*7);
        itensVendendo.p3=precos[itensVendendo.i3];
        //Walls.push(SpawnsMercador[coiso]);
        mercador.rodou=true;
    }
    ctx.drawImage(tapete,mercador.x-mercador.size,mercador.y-mercador.size,3*mercador.size,3*mercador.size);
    ctx.drawImage(mercadorDesenho,60*Math.floor(mercador.coluna),0,60,60,mercador.x-(60-mercador.size)/2,mercador.y-(60-mercador.size)/2,60,60);
    if(mercador.coluna<1.8){
        mercador.coluna+=0.02;
    } else {
        mercador.coluna=0;
    }

}

function Mercadao(){
    ctx.drawImage(Loja,250,0);

    if(mercador.item1){
        ctx.drawImage(ImgItens,50*itensVendendo.i1,0,50,50,250+565-2.5,455,50,50);
        ctx.drawImage(descricoes,95*itensVendendo.i1,0,95,250,790,200,95,250);
    } else {
        ctx.drawImage(ImgItens,50*7,0,50,50,250+565-2.5,455,50,50);
    }

    if(mercador.item2){
        ctx.drawImage(ImgItens,50*itensVendendo.i2,0,50,50,250+700-2.5,455,50,50);
        ctx.drawImage(descricoes,95*itensVendendo.i2,0,95,250,925,200,95,250);
    } else {
        ctx.drawImage(ImgItens,50*7,0,50,50,250+700-2.5,455,50,50);
    }

    if(mercador.item3){
        ctx.drawImage(ImgItens,50*itensVendendo.i3,0,50,50,250+835-2.5,455,50,50);
        ctx.drawImage(descricoes,95*itensVendendo.i3,0,95,250,1060,200,95,250);
    } else {
        ctx.drawImage(ImgItens,50*7,0,50,50,250+835-2.5,455,50,50);
    }
}