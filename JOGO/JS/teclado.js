var SETA_ESQUERDA = 37;
var SETA_CIMA = 38;
var SETA_DIREITA = 39;
var SETA_ABAIXO = 40;
var ESPACO = 32;

var A = 65;
var S = 83;
var D = 68;
var J = 74;
var Q = 81;
var W = 87;
var K =75;
var ENTER = 13;



function Teclado(elemento){
    this.elemento = elemento;
    this.pressionadas = [];
    this.anda = false;

    var teclado = this;
    elemento.addEventListener('keydown', function(evento){
        var tecla = evento.keyCode;
        teclado.pressionadas[tecla] = true;
    });
    elemento.addEventListener('keyup', function(evento){
        teclado.pressionadas[evento.keyCode] = false;
    });
}

Teclado.prototype = {
    pressionada: function(tecla){
        return this.pressionadas[tecla];
    }
}


