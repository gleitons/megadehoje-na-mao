/*var numerosMegadaTabela = document.getElementById('div#numerosMegaSTabela');
var numerosEscolhidos = [];
var botaojogar = document.getElementById('gerarnumerosT')
numerosMegadaTabela.addEventListener('click', function(cordefundo){
        cordefundo.target.style.background = "#4af050";
        numerosEscolhidos.push(cordefundo.target.innerHTML);
        if (numerosEscolhidos.length > 6){
            alert('Escolha somente 06 numeros');
            cordefundo.target.style.background = "#6f6f6f";
            botaojogar.disabled = false;
            return;
        }
        validanumerosescolhidos();
})
function validanumerosescolhidos() {
    if(numerosEscolhidos.length == 6){
        botaojogar.disabled = false;
    }
}*/









const btnMobileM = document.querySelector('button#botaoMobileP')
    

function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}
btnMobileM.addEventListener('click', toggleMenu)



function voltar(){
    window.history.back()
}

