var cenaAtual=1;
var Partes = 1;

var introimg = new Image();
introimg.src = "IMG/intro2.png";
var introColuna = 0;

var skip = new Image();
skip.src="IMG/enterpra.png";
var logo = new Image();
logo.src="IMG/LPcomeco2.png";
var corteLogo = 0;
var multiplicadorLP = 1;
var transparencia = 0;
var textos = [];
var RecortesCena4 = [];
var pxC4 = [0,0,0,0,0,0];
var pxC1 = 0;
var RecortesCena1 = [];
var c1=new Image();
c1.src="IMG/c11.png";
RecortesCena1[0]=c1;
var TempoCutsene=0;
var transparenciaTexto=0;
var c3 = new Image();
c3.src="IMG/c3.png";
var RecortesCena2 = [];
var pxC2 = 0,pxC3 = 0;;
var TransP1=1,TransP2=2,TransP3=3;
var menuCut = new Image();
menuCut.src="IMG/menu.png";
var menu2Cut = new Image();
menu2Cut.src="IMG/menu2.png"
var TransC4=0;
var TransC42=0;

for(i=0;i<3;i++){
    let imagemC2= new Image();
    imagemC2.src="IMG/c2"+(i+1)+".png";
    RecortesCena2[i]=imagemC2;
}

for(i=0;i<6;i++){
    let imagemC4= new Image();
    imagemC4.src="IMG/c4"+(i+1)+".png";
    RecortesCena4[i]=imagemC4;
}


for(i=0;i<4;i++){
let imagemT= new Image();
imagemT.src="IMG/texto"+(i+1)+".png";
textos[i]=imagemT;
}

var fundoCor = new Image();
fundoCor.src="IMG/fundoC.png";

function CenaCorte(){
    if(Partes==1){
        ctx.globalAlpha=-1/4*transparencia*transparencia+transparencia;
        ctx.drawImage(logo,420*Math.floor(corteLogo),0,420,540,(1500-420*multiplicadorLP)/2,(700-540*multiplicadorLP)/2,420*multiplicadorLP,540*multiplicadorLP);
        corteLogo+=0.15;
        if(corteLogo>=13){
            corteLogo=13;
        }
        if(multiplicadorLP<=1.04){
            multiplicadorLP+=0.0004;
        }
        if(transparencia<4){
            transparencia+=0.01;
        } else if(transparencia>=4){
            Partes=2;
            ctx.globalAlpha=1;
            transparencia = 0;
        }
    } else if(Partes==2){
        ctx.globalAlpha=1;
        ctx.drawImage(fundoCor,0,0);
        ctx.globalAlpha=transparencia;
        if(cenaAtual==1){
            Cena1();
        } else if(cenaAtual==2){
            Cena2();
        } else if (cenaAtual==3){
            Cena3();
        } else if(cenaAtual==4){
            Cena4();
        }
        ctx.globalAlpha=1;
        escrever();
        Tela();



        if(transparencia<2){
            transparencia+=0.015;
        }else{
            ctx.globalAlpha=1;
        }
    }
    ctx.globalAlpha=0.35;
    ctx.drawImage(skip,1500/5,700/5+15,1500*4/5,700*4/5);
}

function Cena1(){
    ctx.drawImage(RecortesCena1[0],0,50-5*Math.floor(pxC1));
    if(pxC1<10){
        pxC1+=0.12;
    }
    if(TempoCutsene<10){
        TempoCutsene+=0.04;
    }else{
        cenaAtual=2;
        TempoCutsene=0;
    }
}

function Cena2(){
    ctx.globalAlpha=TransP1;
    ctx.drawImage(RecortesCena2[0],0,50-5*Math.floor(pxC2));
    ctx.globalAlpha=1;
    ctx.globalAlpha=TransP2;
    ctx.drawImage(RecortesCena2[1],0,50-5*Math.floor(pxC2));
    ctx.globalAlpha=1;
    ctx.globalAlpha=TransP3;
    ctx.drawImage(RecortesCena2[2],0,50-5*Math.floor(pxC2));
    if(pxC2<10){
        pxC2+=0.12;
    }
    if(TempoCutsene<14){
        TempoCutsene+=0.04;
        if (TempoCutsene>8){
            if(TransP1>0){
                TransP1-=0.03;
                if(TransP1<=0.049999999999999684){
                    TransP1=0;
                }
            }
            if(TransP2>0){
                TransP2-=0.03;
                if(TransP2<=0.049999999999998795){
                    TransP2=0;
                }
            }
            if(TransP3>0){
                TransP3-=0.03;
                if(TransP3<=0.05000000000000229){
                    TransP3=0;
                }
            }
        }
    } else if(TempoCutsene>=13){
        TempoCutsene=0;
        cenaAtual=3;
    }
}

function Cena3(){
    ctx.drawImage(c3,0,50-5*Math.floor(pxC3));
    if(pxC3<10){
        pxC3+=0.12;
    }
    if(TempoCutsene<9){
        TempoCutsene+=0.04;
    } else if(TempoCutsene>=9){
        TempoCutsene=0;
        cenaAtual=4;
    }
}

function Cena4(){
    ctx.drawImage(RecortesCena4[0],0,50-5*Math.floor(pxC4[0]));
    ctx.drawImage(RecortesCena4[1],0,70-5*Math.floor(pxC4[1]));
    ctx.drawImage(RecortesCena4[2],0,90-5*Math.floor(pxC4[2]));
    ctx.drawImage(RecortesCena4[3],0,110-5*Math.floor(pxC4[3]));
    ctx.drawImage(RecortesCena4[4],0,130-5*Math.floor(pxC4[4]));
    ctx.drawImage(RecortesCena4[5],0,150-5*Math.floor(pxC4[5]));
    if(pxC4[0]<10){
        pxC4[0]+=0.1;
    }
    if(pxC4[1]<14){
        pxC4[1]+=0.104;
    }
    if(pxC4[2]<18){
        pxC4[2]+=0.108;
    }
    if(pxC4[3]<22){
        pxC4[3]+=0.112;
    }
    if(pxC4[4]<26){
        pxC4[4]+=0.116;
    }
    if(pxC4[5]<30){
        pxC4[5]+=0.12;
    }
    if(pxC4[5]>=30){
        TempoCutsene+=0.03;
    }
}

function Tela(){
    if(cenaAtual==4){
        if(TempoCutsene>3){
            ctx.globalAlpha=TransC4;
            ctx.drawImage(menuCut,0,0,1500,700,0,0,1500,700);
            if(TransC4<=1.5){
                TransC4+=0.006;
            } 
        }
        if(TempoCutsene>14){
            ctx.globalAlpha=TransC42;
            ctx.drawImage(menu2Cut,0,0,1500,700,0,0,1500,700);
            if(TransC42<=1.4){
                TransC42+=0.006;
            }else if (TransC42>=1.4){
                TempoCutsene=0;
                cenaAtual=1;
                iniciou=true;
            }
        }
        ctx.globalAlpha=1;
    }
}

function escrever(){
    ctx.fillStyle="black";
    ctx.fillRect(0,520,1500,700);
    ctx.globalAlpha=transparenciaTexto;
    ctx.drawImage(textos[cenaAtual-1],0,0);
    if(transparenciaTexto<=1){
        transparenciaTexto+=0.01;
    }
}

function Intro(){
    ctx.drawImage(introimg,1500*Math.floor(introColuna),0,1500,700,0,0,1500,700);
    if(introColuna<6){
        introColuna+=0.2;
    } else {
        introColuna=6;
    }
}