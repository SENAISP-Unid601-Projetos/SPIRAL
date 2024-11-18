var transparenciaFinal = 0;
var partesFinal=1;
var Final1 = [];
var Final2 = [];
var Final3 = [];
var sumir = 0;
var creditos = new Image();
creditos.src="IMG/creditos.png";
var creditosX = 750;
var creditosY = 700;
var creditosPoderVir = false;
var temporizador = 0;
var imagem = new Image();
const diferencasY = [{y1:25,y2:20},{y1:25,y2:20},{y1:0,y2:5,y3:10,y4:20,y5:25,y6:25,y7:30,y8:0}]
const textosFinal = ["IMG/tf1.png","IMG/tf2.png","IMG/tf3.png"];



for(i=0;i<2;i++){
    let imagemC1= new Image();
    imagemC1.src="IMG/cf1"+(i+1)+".png";
    Final1[i]=imagemC1;
}

for(i=0;i<2;i++){
    let imagemC2= new Image();
    imagemC2.src="IMG/cf2"+(i+1)+".png";
    Final2[i]=imagemC2;
}

for(i=0;i<8;i++){
    let imagemC3= new Image();
    imagemC3.src="IMG/cf3"+(i+1)+".png";
    Final3[i]=imagemC3;
}

function CutsceneFinal(){
    if(!jaTocou[0]){
        musicaCreditos.play();
        jaTocou[0]=true;
    }

    if(partesFinal==1){
        //ctx.drawImage(PauseFundo,0,0,1500,700);
        if(transparenciaFinal<2){
            ctx.globalAlpha=transparenciaFinal;
            transparenciaFinal+=0.01;
        } else {
            partesFinal=2;
        }
        ctx.fillStyle="white";
        ctx.fillRect(0,0,1500,700);
    } else if (partesFinal==2){
        ctx.globalAlpha=1;
        ctx.drawImage(fundoCor,0,0);
        ctx.drawImage(Final1[1],0,0+5*Math.floor(diferencasY[0].y1));
        if(diferencasY[0].y1>0){
            diferencasY[0].y1-=0.2;
        }

        ctx.drawImage(Final1[0],0,0+5*Math.floor(diferencasY[0].y2));
        if(diferencasY[0].y2>0){
            diferencasY[0].y2-=0.2;
        }
        imagem.src=textosFinal[0]
        ctx.drawImage(imagem,0,0);
        ctx.fillStyle="white";
        if(transparenciaFinal>0){
            ctx.globalAlpha=transparenciaFinal;
            transparenciaFinal-=0.02;
        } else if (transparenciaFinal<=0){
            ctx.globalAlpha=0;
        }
        ctx.fillRect(0,0,1500,700);
        temporizador++;
        console.log(temporizador)
        if(temporizador==375){
            partesFinal=3;
            temporizador=0;
            transparenciaFinal=0;
            ctx.globalAlpha=1;
        }
    } else if (partesFinal==3){

        ctx.drawImage(fundoCor,0,0);
        imagem.src=textosFinal[1]

        ctx.drawImage(Final2[0],0,0+5*Math.floor(diferencasY[1].y1));
        if(diferencasY[1].y1>0){
            diferencasY[1].y1-=0.2;
        }

        ctx.drawImage(Final2[1],0,0+5*Math.floor(diferencasY[1].y2));
        if(diferencasY[1].y2>0){
            diferencasY[1].y2-=0.2;
        }
        temporizador++;
        if(temporizador==400){
            partesFinal=4;
            temporizador=0;
        }
        ctx.fillStyle="black";
        ctx.fillRect(0,520,1500,700-520);
        ctx.drawImage(imagem,0,0);
    }else if (partesFinal==4){
        ctx.globalAlpha=1;
        ctx.drawImage(fundoCor,0,0);
        imagem.src=textosFinal[2];

        ctx.drawImage(Final3[0],0,0+5*Math.floor(diferencasY[2].y1));
        if(diferencasY[2].y1>0){
            diferencasY[2].y1-=0.2;
        }

        ctx.drawImage(Final3[1],0,0+5*Math.floor(diferencasY[2].y2)+5);
        if(diferencasY[2].y2>0){
            diferencasY[2].y2-=0.02;
        }

        ctx.drawImage(Final3[2],0,0+5*Math.floor(diferencasY[2].y3)+5);
        if(diferencasY[2].y3>0){
            diferencasY[2].y3-=0.05;
        }

        ctx.drawImage(Final3[3],0,0+5*Math.floor(diferencasY[2].y4)+5);
        if(diferencasY[2].y4>0){
            diferencasY[2].y4-=0.07;
        }

        ctx.drawImage(Final3[4],0,0+5*Math.floor(diferencasY[2].y5)+5);
        if(diferencasY[2].y5>0){
            diferencasY[2].y5-=0.08;
        }

        ctx.drawImage(Final3[5],0,0+5*Math.floor(diferencasY[2].y6)+5);
        if(diferencasY[2].y6>0){
            diferencasY[2].y6-=0.1;
        }

        ctx.drawImage(Final3[6],0,0+5*Math.floor(diferencasY[2].y7)+5);
        if(diferencasY[2].y7>0){
            diferencasY[2].y7-=0.12;
        }



        temporizador++
        if(temporizador>200){
            ctx.globalAlpha=transparenciaFinal;
            ctx.drawImage(Final3[7],0,0+5*Math.floor(diferencasY[2].y8));
            ctx.globalAlpha=1;
            transparenciaFinal+=0.002;

        }
        if(transparenciaFinal>1){
            transparenciaFinal=1;
            creditosPoderVir=true
        }
        ctx.globalAlpha=1-transparenciaFinal;
        ctx.fillStyle="black";
        ctx.fillRect(0,520,1500,700-520);
        ctx.drawImage(imagem,0,0);
        ctx.globalAlpha=1;
        if(creditosPoderVir){
            ctx.drawImage(creditos,creditosX,creditosY);
            creditosY-=1;
            console.log(creditosY);
        }
        if(creditosY<-3600){
            ctx.globalAlpha=sumir;
            ctx.fillStyle="black";
            ctx.fillRect(0,0,1500,700);
            sumir+=0.005;
            if(sumir>1.5){
                location.reload();
            }
        }
    }
 
}