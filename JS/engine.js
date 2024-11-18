window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i<reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
    }
}

function enviar(){
    var x=document.getElementById("critica").value;
    if(x==""){
        alert("Escreva algo para enviar");
    } else {
        alert("Obrigado pelo feedback!");
    }
    console.log(x);
}

function aparecer(){
    document.getElementById("conteudo").classList.add("apareceu");
}