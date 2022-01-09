function megaSena2442(){
    const resultabela = ""
    /* 2 - terça, 3 - Quarta, 4 - Quinta, 6 - Sábado */
    const resultadoMS =  insereNumeros(2442, "08/01/2022", "6.000.000,00", 2, 7, 9, 25, 41, 49, 6, premiosMegaSena = premiosMS (0, "0", 63, "31.638,77", "4.651", "612,23"), proxSorteio("12/01/2022", "11.000.000,00", 2342));
    
    const palpiteMSCorreto = palpiteProxSorteio("12/01/2022", "11.000.000,00", 2342);

    palpiteMSM.innerHTML = `${palpiteMSCorreto} ${resultadoMS}`;
    tConcurso.innerHTML = `${resultadoMS}`  
    
}
function megaSena2441(){
    const resultabela = ""
    /* 2 - terça, 3 - Quarta, 4 - Quinta, 6 - Sábado */
    const resultadoMS =  insereNumeros(2441, "05/01/2022", "3.000.000,00", 9, 41, 42, 46, 47, 54, 3, premiosMegaSena = premiosMS (0, "0", 18, "83.666,84", "1.588", "1.354,80"), proxSorteio("08/01/2022", "6.000.000,00", 2341));
    
    const palpiteMSCorreto = palpiteProxSorteio("08/01/2022", "6.000.000,00", 2341);

    palpiteMSM.innerHTML = `${palpiteMSCorreto} ${resultadoMS}`;
    tConcurso.innerHTML = `${resultadoMS}`  
    
}
function megaSena2440(){
    const resultabela = ""
    /* 2 - terça, 3 - Quarta, 4 - Quinta, 6 - Sábado */
    const resultadoMS =  insereNumeros(2440, "31/12/2021", "378.124.727,48", 12, 15, 23, 32, 33, 46, 5, premiosMegaSena = premiosMS (2, "189.062.363,74", 1712, "50.861,33", "143494", "866,88"), proxSorteio("05/01/2022", "3.000.000,00", 2341));
    
    const palpiteMSCorreto = palpiteProxSorteio("05/01/2022", "3.000.000,00", 2341);

    palpiteMSM.innerHTML = `${palpiteMSCorreto} ${resultadoMS}`;
    tConcurso.innerHTML = `${resultadoMS}`  
    
}
function megaSena2439(){
    /* 2 - terça, 3 - Quarta, 4 - Quinta, 6 - Sábado */
    const resultadoMS =  insereNumeros(2439, "18/12/2021", "6.500.000,00", 04, 11, 19, 25, 37, 55, 6, premiosMegaSena = premiosMS (0, "0", 46, "40.082,94", "3.008", "875,67"), proxSorteio("31/12/2021", "350.000.000,00", 2340));
    
    const palpiteMSCorreto = palpiteProxSorteio("31/12/2021", "350.000.000,00", 2340);

    palpiteMSM.innerHTML = `${palpiteMSCorreto} ${resultadoMS}`;
    tConcurso.innerHTML = `${resultadoMS}`  
    
}
function megaSena2438(){
    /* 2 - terça, 3 - Quarta, 4 - Quinta, 6 - Sábado */
    const resultadoMS =  insereNumeros(2438, "15/12/2021", "6.549.381,39", 04, 11, 19, 25, 37, 55, 3, premiosMegaSena = premiosMS (1, "6.549.381,39", 99, "19.581,95", "5.073", "545,91"), proxSorteio("18/12/2021", "3.000.000,00", 2339));
    
    const palpiteMSCorreto = palpiteProxSorteio("18/12/2021", "3.000.000,00", 2439);

    palpiteMSM.innerHTML = `${palpiteMSCorreto} ${resultadoMS}`;
    tConcurso.innerHTML = `${resultadoMS}`  
    
}
//04, 11, 19, 25, 37, 55



function megaSena2437(){
    /* 2 - terça, 3 - Quarta, 4 - Quinta, 6 - Sábado */
    const resultadoMS =  insereNumeros(2337, "11/12/2021", "3.000.000,00", 01, 19, 41, 46, 48, 55, 6, premiosMegaSena = premiosMS (0, "Não houve ganhadores", 16, "101.047,85", "1.416", "1.631,11"), proxSorteio("15/12/2021", "6.500.000,00", 2338));
    
    const palpiteMSCorreto = palpiteProxSorteio("15/12/2021", "6.500.000,00", 2338);

    palpiteMSM.innerHTML = `${palpiteMSCorreto} ${resultadoMS}`;
    tConcurso.innerHTML = `${resultadoMS}`  
    
}

































// function palpiteProxSorteio(dataPalpite, ValorPr, nConcursoMS){
    
// }

function proxSorteio(datapSorteio, ValorPSorteio, pSorteio){
    const DSorteio = datapSorteio
    const VPSorteio = ValorPSorteio;
    const pSorteioP = pSorteio; 
    const footerProximo = `<div>Próximo Sorteio: ${datapSorteio} - Prêmio Estimado: R$ ${ValorPSorteio}</div>`
    return footerProximo;   
}
function premiosMS (ganhadorMS, valorPremioMS, ganhadorQU, valorPremioQU, ganhadorQD, valorPremioQD){
    const resultMSEscrito = `Foram <strong>${ganhadorMS}</strong> apostas vencedoras da sena, cada um vai receber o valor de <strong>R$ ${valorPremioMS}</strong> de reais, <strong>${ganhadorQU}</strong> vencedoras que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${valorPremioQU} reais</strong>. Já com 4 acertos (quadra) foram <strong>${ganhadorQD}</strong> apostas ganhadoras, ficando cada um com de <strong>R$ ${valorPremioQD} reais</strong>. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`;
    
    return [resultMSEscrito, ganhadorMS, valorPremioMS, ganhadorQU,valorPremioQU, ganhadorQD, valorPremioQD]
};

function insereNumeros (concurso, dataCMS, valor, bol01, bol02, bol03, bol04, bol05, bol06, diaDaMega, premiosMegaSenaT, pSorteioMS)
{
    
    let diaS = diaDSemana(diaDaMega);
    let premiosResultFinal = premiosMegaSenaT;
    const premioTabelaMS = tabelaResultTotalMS (concurso, dataCMS, valor, bol01, bol02, bol03, bol04, bol05, bol06, diaDaMega, premiosMegaSenaT, pSorteioMS);
    
    
    const titleResultadoMS = `<div class="infodoJava">Resultado Mega-sena ${concurso} dia ${dataCMS} - ${diaS}</div>`

    const subTitleResultadoMS = `<h2 class="subTitleSorteio" style="font-size: 20px;"><strong >${concurso}</strong>. Sorteio da mega-sena aconteceu hoje, ${dataCMS}, com prêmio estimado em R$ ${valor} de reais, confira agora mesmo o resultado da mega-sena <strong>${concurso}</strong>.</h2>`

    const capaFrontMSena = imagemFrontalMS(concurso, dataCMS, valor, diaS);
    const aposteNaMegaSena = `<div class="subtR">
        <h2>Como jogar na Mega-sena</h2>
        <p>A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha). <a href="http://bit.ly/aposte-online" target="_blank"><button class="botaoCliqueAqui">APOSTE ONLINE</button></a></p>
    </div>
    <h2>Descrição para instagram</h2>
    <h3>Resultado</h3>
    <div class="hash">
        <div class="lite">
            Resultado Mega-sena ${concurso} dia ${dataCMS} - ${diaS} </br>
            @megadehoje - Sentimento Milionário para ganhar na mega sena</br>
            https://megadehoje.com</br>
            @megadehoje Link de acesso na bio, resultados e palpites, acesse;</br>
            #ganharnamegasena</br>
            #megasena${concurso}</br>
            #palpitemegasena${concurso+1}</br>
            #${concurso}</br>
            #${concurso+1}</br>
            #ganharnamegasena</br>
            #megadehoje</br>
            #loteria</br>
            #ganharnaloto</br>
            #sentimentos</br>
            #palpitemegasena</br>
            #sentimentosmilionarios</br>
            #megasenavirada</br>
            #megasena</br>
            #lotofacil</br>
            #ficarrico</br>
            #leidaatracao</br>
            #leidaatração</br>
        </div>
        <h3>Front Resultado</h3>
        <div class="lite">
            https://megadehoje.com/resultados/mega-sena/resultado-mega-sena-${concurso}.html</br>
            Sorteio da mega-sena aconteceu hoje, ${dataCMS}, com prêmio estimado em R$ ${valor} de reais, confira agora mesmo o resultado da mega-sena ${concurso}</br>
            @megadehoje - Sentimento Milionário para ganhar na mega sena</br>
            https://megadehoje.com</br>
            @megadehoje Link de acesso na bio, resultados e palpites, acesse;</br>
            #megasena${concurso}</br>
            #palpitemegasena${concurso+1}</br>
            #${concurso}</br>
            #${concurso+1}</br>
            #ganharnamegasena</br>
            #megadehoje</br>
            #loteria</br>
            #ganharnaloto</br>
            #sentimentos</br>
            #palpitemegasena</br>
            #sentimentosmilionarios</br>
            #megasenavirada</br>
            #megasena</br>
            #lotofacil</br>
            #ficarrico</br>
            #leidaatracao</br>
            #leidaatração</br>
        </div>
        <h3>Resultado Final numeros</h3> 
        <div class="lite">
            É isso mesmo, saiu o resultado do concurso ${concurso}, realizado a partir das 20:00 hs, dia ${dataCMS}, ${diaS}, as dezenas sorteadas foram: ${bol01} - ${bol02} - ${bol03} - ${bol04} - ${bol05} - ${bol06}. ${premiosMegaSenaT[0]}. Na imagem mostra os vencedores da sena, o valor foi de R$ ${valor} de reais. Confira agora mesmo o resultado da Mega de Hoje.</br>
            @megadehoje - Sentimento Milionário para ganhar na mega sena</br>
            https://megadehoje.com</br>
            @megadehoje Link de acesso na bio, resultados e palpites, acesse;</br>
            #megasena${concurso}</br>
            #palpitemegasena${concurso+1}</br>
            #${concurso}</br>
            #${concurso+1}</br>
            #ganharnamegasena</br>
            #megadehoje</br>
            #loteria</br>
            #ganharnaloto</br>
            #sentimentos</br>
            #palpitemegasena</br>
            #sentimentosmilionarios</br>
            #megasenavirada</br>
            #megasena</br>
            #lotofacil</br>
            #ficarrico</br>
            #leidaatracao</br>
            #leidaatração</br>
        </div>
        
        <h3>Palpite da mega-sena, concurso ${concurso+1}</h3> 
        <div class="lite">
            https://megadehoje.com/palpites/mega-sena/palpite-da-mega-sena-${concurso+1}.html</br>
            @megadehoje - Sentimento Milionário para ganhar na mega sena</br>
            https://megadehoje.com</br>
            Palpite da mega-sena ${concurso+1}, ${pSorteioMS} de reais,</br>
            @megadehoje Link de acesso na bio, resultados e palpites, acesse;</br>
            #megasena${concurso}</br>
            #palpitemegasena${concurso+1}</br>
            #${concurso}</br>
            #${concurso+1}</br>
            #ganharnamegasena</br>
            #megadehoje</br>
            #loteria</br>
            #ganharnaloto</br>
            #sentimentos</br>
            #palpitemegasena</br>
            #sentimentosmilionarios</br>
            #megasenavirada</br>
            #megasena</br>
            #lotofacil</br>
            #ficarrico</br>
            #leidaatracao</br>
            #leidaatração</br>
        </div>
    </div>`

    const titleSubImagem = `<div class="subtR">
        <h2>Como ficou o resultado da loteria nacional hoje</h2>
        <p>É isso mesmo, saiu o resultado do <strong>concurso ${concurso}</strong>, realizado a partir das 20:00 hs, dia ${dataCMS}, ${diaS}, </strong> as dezenas sorteadas foram:<strong> ${bol01} - ${bol02} - ${bol03} - ${bol04} - ${bol05} - ${bol06}</strong>. ${premiosResultFinal[0]}</p>
        ${premioTabelaMS}
        ${aposteNaMegaSena}
        ${pSorteioMS}
    </div>`  

    

    const resultadoMegasenaCompleto = `${titleResultadoMS}<br>
    ${subTitleResultadoMS}
    ${capaFrontMSena} <br>
    ${titleSubImagem}`

    // const PalpiteConstrutora = ConstruirPalpiteMegaSena (concurso,dataCMS, valor, pSorteioMS)


    

    
    
    
    

    return resultadoMegasenaCompleto;
}


function palpiteProxSorteio (dataPalpite, ValorPr, nConcursoMS){
    
    const mseg1 = Math.floor(Math.random() * 60 + 1);
    const mseg2 = Math.floor(Math.random() * 60 + 1);
    const mseg3 = Math.floor(Math.random() * 60 + 1);
    const mseg4 = Math.floor(Math.random() * 60 + 1);
    const mseg5 = Math.floor(Math.random() * 60 + 1);
    const mseg6 = Math.floor(Math.random() * 60 + 1);

    
   

    const PalpiteConstrutoraMS = `<h1>Palpite da mega-sena ${nConcursoMS}</h1>
    <i>
        <h2 style="font-size: 23px; font-weight: normal;">Palpite da mega-sena ${nConcursoMS}, ${dataPalpite}, com prêmio estimado em R$ ${ValorPr} de reais, <button>APOSTE HOJE MESMO</button>.</h2>
    </i>

    <div class="vis capaPalpiteFora">
    <div class="vis gradeInternaPalpite">
        <div class="vis linhaFlex ">
            <div class="vis logoENomePalpite">
                <div class="logoPalpiteLoteria">
                    <img src="/src/logo-mega-de-hoje.svg" alt="palpite da mega sena">
                    <p id="palpiteLoteria">FAÇA SEU JOGO ONLINE <a href="http://bit.ly/aposte-online" target="_blank" rel="nofollow"><button>jogar</BUtton></p></a>
                </div>

            </div>
            <div class="vis colunaEsquerdaPalpite">
                <h2><div>PALPITE LOTERIA NACIONAL</div></h2>
                <h1 ">Mega Sena <br>${nConcursoMS}</h1>
                
            </div>
           
        </div>
        <div class="vis linhaBolasPalpite">
            <div class="bolaPalpiteLoteria"><p class="numeroPalpiteLoteria" >${mseg1}</p></div>
            <div class="bolaPalpiteLoteria"><p class="numeroPalpiteLoteria" >${mseg2}</p></div>
            <div class="bolaPalpiteLoteria"><p class="numeroPalpiteLoteria" ">${mseg3}</p></div>
            <div class="bolaPalpiteLoteria"><p class="numeroPalpiteLoteria" >${mseg4}</p></div>
            <div class="bolaPalpiteLoteria"><p class="numeroPalpiteLoteria" >${mseg5}</p></div>
            <div class="bolaPalpiteLoteria"><p class="numeroPalpiteLoteria" >${mseg6}</p></div>
            
        </div>
        <div class="vis linhaSorteioEValorPalpite">
            <h1>
                <div >${dataPalpite}</div>
            </h1>
            <h1>
                <div class="valorGeradoPalpite" >Valor estimado R$ ${ValorPr}</div>
            </h1>
        </div>
        <div style="display: flex;">
            <div><button class="descricaoPalpiteLoteriaN" onclick="recarregarPagina()">GERAR NOVOS NÚMEROS</button></div><div><img style="width: 40%;" src="/imagens/capas/mega-sena/Flecha-33.gif" alt=""></div>
        </div>
    </div>
    
</div>`


    return PalpiteConstrutoraMS;
}

function tabelaResultTotalMS (concursot, dataCMSt, valort, bol01t, bol02t, bol03t, bol04t, bol05t, bol06t, diaDaMegat, premiosMegaSenaTt, pSorteioMSt)

{   
    const pSorteioMStP = String(pSorteioMSt).value;
    if (premiosMegaSenaTt[1] > 0 ) {
        var acumulaougan = `<div class="seGanhador">${premiosMegaSenaTt[1]} Ganhador(es)</div>`  
    } else {
        var acumulaougan = `<div class="seGanhador">ACUMULOU</div>`
    }
    const tResultTotalMS = `
    
    <div class="tabelaResultado" >
    <div class="mesmaLinha">
        <div class="cEsquerda">
            <h1 class="concursoms" ><div id="concursoData">CONCURSO ${concursot} - DATA ${dataCMSt}</div></h1>
            <div class="bolasSorteio">
                <div class="bolasms" >
                    <div class="numeros"><div>${bol01t}</div></div>
                </div>
                <div class="bolasms" >
                    <div class="numeros"><div >${bol02t}</div></div>
                </div>
                <div class="bolasms" >
                    <div class="numeros"><div >${bol03t}</div></div>
                </div>
                <div class="bolasms" >
                    <div class="numeros"><div >${bol04t}</div></div>
                </div>
                <div class="bolasms" >
                    <div class="numeros"><div >${bol05t}</div></div>
                </div>
                <div class="bolasms" >
                    <div class="numeros"><div >${bol06t}</div></div>
                </div>
            </div>
            <p>Confira o seu jogo! <button onclick="recarregarPagina()">Estou com sorte</button></p>
        </div>
        <div class="cDireita">
            <table class="resultadoVerde">
                <tr class="linhaResultado">
                    <td class="acertos"></td>
                    <td class="ganhadores">Ganhadores</td>
                    <td class="premio">Prêmio</td>
                </tr>
                <tr class="linhaResultado">
                    <td class="acertos">SENA</td>
                    <td class="ganhadores">${premiosMegaSenaTt[1]} Pessoas</td>
                    <td class="premio"><div id="pSena">R$ ${premiosMegaSenaTt[2]}</div></td>
                </tr>
                <tr class="linhaResultado">
                    <td class="acertos">QUINA</td>
                    <td class="ganhadores"><div id="qtdQuina">${premiosMegaSenaTt[3]} Pessoas</div></td>
                    <td class="premio"><div id="pQuina">R$ ${premiosMegaSenaTt[4]}</div></td>
                </tr>
                <tr class="linhaResultado">
                    <td class="acertos">QUADRA</td>
                    <td class="ganhadores"><div id="qtdQuadra">${premiosMegaSenaTt[5]} Pessoas</div></td>
                    <td class="premio"><div id="pQuadra">R$ ${premiosMegaSenaTt[6]}</div></td>
                </tr>
            </table>
            
                <h1>
                    <div class="seGanhdador">${acumulaougan}</div>
                </h1>
            
        </div>
    </div>
    <div class="proximoSorteio">
        ${pSorteioMSt}
    </div>
</div>
`
    
    return tResultTotalMS;
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