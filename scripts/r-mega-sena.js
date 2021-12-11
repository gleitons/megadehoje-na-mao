function megaSena24xx(){
    /* 2 - terça, 3 - Quarta, 4 - Quinta, 6 - Sábado */
    const resultadoMS =  insereNumeros(2359, "10/09/2021", "7.000.000,00", 10, 20, 30, 40, 50, 60, 3, premiosMegaSena = premiosMS (0, "50.000.000,00", 500, "32.000,00", 1500, "1.200") );
    ;
    
    
    tConcurso.innerHTML = `${resultadoMS}`
    
    

}
function premiosMS (ganhadorMS, valorPremioMS, ganhadorQU, valorPremioQU, ganhadorQD, valorPremioQD){
    return `Foram <strong>${ganhadorMS}</strong> apostas vencedoras da sena, o valor é de ${valorPremioMS}, <strong>${ganhadorQU}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${valorPremioQU} de reais</strong>. Já com 4 acertos (quadra) foram <strong>${ganhadorQD}</strong> apostas ganhadoras, ficando cada um com de <strong>R$ ${valorPremioQD}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`;
};

function insereNumeros (concurso, dataCMS, valor, bol01, bol02, bol03, bol04, bol05, bol06, diaDaMega, premiosMegaSenaT)
{
    
    let diaS = diaDSemana(diaDaMega);
    let premiosResultFinal = premiosMegaSenaT;
    
    
    const titleResultadoMS = `<div class="infodoJava">Resultado Mega-sena ${concurso} dia ${dataCMS} - ${diaS}</div>`

    const subTitleResultadoMS = `<h2 class="subTitleSorteio" style="font-size: 25px;"><strong >${concurso}</strong>. Sorteio da mega-sena aconteceu hoje, ${dataCMS}, com prêmio estimado em R$ ${valor} de reais, confira agora mesmo o resultado da mega-sena <strong>${concurso}</strong>.</h2>`

    const capaFrontMSena = imagemFrontalMS(concurso, dataCMS, valor, diaS);


    const titleSubImagem = `<h2>Como ficou o resultado da loteria nacional hoje</h2><br>
    É isso mesmo, saiu o resultado, o <strong>concurso ${concurso}</strong>, <strong>},</strong> as dezenas sorteadas foram:<strong> ${bol01} - ${bol02} - ${bol03} - ${bol04} - ${bol05} - ${bol06}</strong>. ${premiosResultFinal} `  
    

    const resultadoMegasenaCompleto = `${titleResultadoMS}<br>
    ${subTitleResultadoMS}
    ${capaFrontMSena} <br>
    ${titleSubImagem}`
    
    
    
    
    

    return resultadoMegasenaCompleto;
}

function imagemFrontalMS(concursoCF, dataCMSCF, valorCF, diaR){
    const imagemFrontResultMS = `<div class="vizu bordasImagemFora">
    <div class="bordaInterna">
        <div class="ladoEsquerdo">
            <div class="logoResult">
                <img src="/src/logo-mega-de-hoje.svg" alt="">
            </div>
            <div class="logoResultD">
                <img src="/imagens/capas/mega-sena/imagem-resultado-megasena.png" alt="">
                
            </div>
        </div>
        <div class="vizu ladoDireito">
            <div >
                <div ><p class="marcaDaguaMegaDeHoje">megadehoje.com</p></div>
                <div class="centralizarAltura">
                    <h3>Mega Sena</h3>
                </div>
                <div class="resultadoDoDia">
                    <h3 >Sorteio ${concursoCF}</h3>
                </div>
                <div class="diaEDataSorteio" >
                    <p >${diaR}, ${dataCMSCF}</p>
                </div>
                <div class="valorEstimadoSorteio">
                    <h3 >Valor Estimado R$ ${valorCF}</h3>          
                </div>     
                
            </div>
        </div>

    </div>
   
</div>
<div class="fonteDeInformacoes"> 
    <p><i>Fonte: Reprodução </i><a  href="megadehoje.com" target="_blank" rel="follow">megadehoje.com</a></p>
</div>`    
    return imagemFrontResultMS;
}

function ProxResult(acu, concursoP, dataProx, valorP) {

    if (acu == "s") {
        var acoug = `ACUMULOU!!`   
    } else {
        var acoug = `Ganhadores`        
    }

    let InfoPConcurso = `${acoug}, proximo sorteio da mega-sena ${concursoP} vai pagar ${valorP}, será realizado no dia ${dataProx}`

    return InfoPConcurso;
}

function anuncioslocal() {
    const anu = "<script async src=";
    const nci = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8921692840146247"
    const o = "crossorigin=anonymous>\"</script>";
    anuncios.innerHTML = `${anu}${nci}${o}`
}



function diaDSemana(diaDaSemana){
    
    dataMega = ''
    if (diaDaSemana == "3") {
        dataMega = "quarta-feira"
    } 
    else if (diaDaSemana == "4") {
        dataMega = "quinta-feira"
    } 
    else if (diaDaSemana == "5") {
        dataMega = "sexta-feira"
    } 
    else if (diaDaSemana == "6") {
        dataMega = "sábado"
    } 
    else if (diaDaSemana == "7") {
        dataMega = "domingo"
    } 
    else if (diaDaSemana == "1") {
        dataMega = "terça-feira"
    } 
    else if (diaDaSemana == "2") {
        dataMega = "terça-feira"
    } 
    else {
        dataMega = "Dia não encontrado"
    } 
    return dataMega;
}