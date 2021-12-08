function mostrarMcais(){
    var verMais = document.getElementById('verMais');

    
    if(verMais == false){
        document.getElementById("verMais").style.display = "block";
        var agoraFecha = false;
    }else {
        document.getElementById("verMais").style.display = "none";
        var agoraFecha = true;
    }
    


}


var visibilidade = true; //Variável que vai manipular o botão Exibir/ocultar

function exibir() {
    document.getElementById("verMais").style.display = "block";
}

function ocultar() {
    document.getElementById("verMais").style.display = "none";
}

function mostrarMais() { // Quando clicar no botão.

    if (visibilidade) {//Se a variável visibilidade for igual a true, então...
        document.getElementById("verMais").style.display = "none";//Ocultamos a div
        visibilidade = false;//alteramos o valor da variável para falso.
    } else {//ou se a variável estiver com o valor false..
        document.getElementById("verMais").style.display = "block";//Exibimos a div..
        visibilidade = true;//Alteramos o valor da variável para true.
    }
}