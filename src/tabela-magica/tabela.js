function tabela2440(){
    const tabelReal = calculoTabelaM(02, 08, 34, 38, 47, 51, 2439);
    tabMegaSena.innerHTML = `${tabelReal}`
}
function tabela2439(){
    const tabelReal = calculoTabelaM(15, 18, 30, 32, 42, 70, 2438);
    tabMegaSena.innerHTML = `${tabelReal}`
}
//02 08 34 38 47 51


function calculoTabelaM(n1, n2, n3, n4, n5, n6, sortMSL) {
    const sorTMSL = sortMSL;
    const nSorteio = "2438";
    //[4, 11, 19, 25, 37, 55]
    const nSorteioMS = [n1, n2, n3, n4, n5, n6];
    const pegarl1C1 = nSorteio.split("");
    //04, 11, 19, 25, 37, 55
    
    const par = CPouI(nSorteioMS)[0];
    const impar = CPouI(nSorteioMS)[1];
    const somaP = CPouI(nSorteioMS)[2];
    const somaTotal = CPouI(nSorteioMS)[3];
    const somaTotalS = somaTotal.toString();
    const somaImpares = CPouI(nSorteioMS)[4];
    const primosN = CPouI(nSorteioMS)[5];
    const sprimosNT = CPouI(nSorteioMS)[6];
    
    const pegarArraylinha2 = somaTotalS.split('');
    const soma1n = parseInt(pegarArraylinha2[0]);
    const soma2n = parseInt(pegarArraylinha2[1]);
    const soma3n = parseInt(pegarArraylinha2[2]);
    if (pegarArraylinha2.lenght == null) {
         Somal2c1 = '';
    } else {
         Somal2c1 = soma3n;
    }


    const linha1Col = pegarl1C1[0];
    const linha1Col2 = pegarl1C1[3];
    const linha1Col3 = (somaP - par).toFixed()[0];

    const linha2Col1 = (soma1n + soma2n + Somal2c1)[0];
    const linha2Col2 = (pegarl1C1[3]/2).toFixed()[0];
    const linha2Col3 = ((somaP - par)-1).toFixed()[0];




    const tb = tabMagic(linha1Col,linha1Col2,linha1Col3,linha2Col1,linha2Col2,linha2Col3,3,0,2,1,1,5,6,9,5).toString();
    const arraytbSplit = tb.split(',');
    const arrayOrdemB = arraytbSplit.sort(function(a, b) {
        return a-b;
    })
    const arrayOrdemC = [...new Set(arrayOrdemB)];
    const tamanhoArrayC = arrayOrdemC.length;
    const nSorteioRandom = [Math.floor(tamanhoArrayC * Math.random())]

    // for(i=0; i <= tamanhoArrayC; i++) {
    //     var vams = tamanhoArrayC;
    // }




    //const l1C1T = pegarl1C1[0];


    const resultTab = resultTabela.innerHTML = `<div class="esconde"><a href="http://bit.ly/aposte-online" target="_blank" rel="follow"><button class="botaoMegadaVirada"></button></a></div>
    <h1>Tabela Mágica da Mega-sena</h1>
    <h2>TABELA DA MEGA SENA - PREVISÃO PARA O CONCURSO ${sorTMSL+1}</h2>
    <h2>Contagem e dados do Sorteio ${sorTMSL}</h2>
    <p>RESULTADO ANTERIOR DE <STRONG>NÚMERO ${sorTMSL}</STRONG>:   <class class="fAmarelo"><strong>${nSorteioMS}</strong></class></p>
    <table class="contagemNMS">
        <tr class="tipoN">
            <td class="lEsquerdo">NUMERO DO SORTEIO: </td>
            <td class="lDireito">${sorTMSL}</td>
        </tr>
        <tr class="tipoN">
            <td class="lEsquerdo">IMPARES: </td>
            <td class="lDireito">${impar}</td>
        </tr>
        <tr class="tipoN">
            <td class="lEsquerdo">PARES: </td>
            <td class="lDireito">${par}</td>
        </tr>
        <tr class="tipoN">
            <td class="lEsquerdo">PRIMOS: </td>
            <td class="lDireito">${primosN}</td>
        </tr>
        <tr class="tipoN">
            <td class="lEsquerdo">SOMA PRIMOS: </td>
            <td class="lDireito">${sprimosNT}</td>
        </tr>
        <tr class="tipoN">
            <td class="lEsquerdo">SOMA DOS PARES: </td>
            <td class="lDireito">${somaP}</td>
        </tr>
        <tr class="tipoN">
            <td class="lEsquerdo">SOMA DOS IMPARES: </td>
            <td class="lDireito">${somaImpares}</td>
        </tr>
        <tr class="tipoN">
            <td class="lEsquerdo">SOMA TOTAL: </td>
            <td class="lDireito">${somaTotal}</td>
        </tr>
        <!--<--${tb}!> -->
    </table>
    <h1>Tabela da Mega-sena, Ganhe agora!!</h1>
    <table class="tMagica">
        <tr class="blocsNumber">
            <td class="tdNumber">${linha1Col}</td>
            <td class="tdNumber">${linha1Col2}</td>
            <td class="tdNumber">${linha1Col3}</td>
            
        </tr>
        <tr class="blocsNumber">
            <td class="tdNumber">${linha2Col1}</td>
            <td class="tdNumber">${linha2Col2}</td>
            <td class="tdNumber">${linha2Col3}</td>
            
        </tr>
        <tr class="blocsNumber">
            <td class="tdNumber">3</td>
            <td class="tdNumber cent"></td>
            <td class="tdNumber">2</td>
            
        </tr>
        <tr class="blocsNumber">
            <td class="tdNumber">1</td>
            <td class="tdNumber">1</td>
            <td class="tdNumber">5</td>
            
        </tr>
        <tr class="blocsNumber">
            <td class="tdNumber">6</td>
            <td class="tdNumber">9</td>
            <td class="tdNumber">5</td>
            
        </tr>
        
    </table>
    <!--<div style="margin-top: 20px; width: 500px; border: 1px solid #000;">${tb}</div>-->
    <h2 style="margin: 20px; ">PROBABILIDADE DE GANHAR NA MEGA SENA ${sorTMSL+1}</h2>
    <!--${nSorteioMS}-->
    <div class="fundoOneO">
        <div class="fundoOne"> 
            <table class="probabilidadeS">
                <tr class="Distinto">
                    <td>TODOS OS NÚMEROS GERADOS PELA TABELA: </td>
                    <td class="probDireito">${tb}</td>
                </tr>
                <tr class="Distinto">
                    <td>ORDENANDO AS DEZENAS: </td>
                    <td class="probDireito">${arrayOrdemB}</td>
                </tr>
                <tr class="Distinto">
                    <td>DIMINUINDO AS DEZENAS: </td>
                    <td class="probDireito">${arrayOrdemC}</td>
                </tr>
                <tr class="Distinto">
                    <td>ESCOLHA ENTRE NOSSOS PALPITES - 01:</td>
                    <td class="probDireito"><strong> <class class="bolaPalpite">${arrayOrdemC[3]}</class> <class class="bolaPalpite">${arrayOrdemC[7]}</class> <class class="bolaPalpite">${arrayOrdemC[12]}</class> <class class="bolaPalpite">${arrayOrdemC[18]}</class> <class class="bolaPalpite">${arrayOrdemC[25]}</class> <class class="bolaPalpite">${arrayOrdemC[nSorteioRandom,Math.floor(tamanhoArrayC * Math.random())]}</class> </strong></td>
                </tr>
                <tr class="Distinto">
                    <td></br>02: </br></br></td>
                    <td class="probDireito"><strong> <class class="bolaPalpite">${arrayOrdemC[nSorteioRandom,Math.floor(tamanhoArrayC * Math.random())]}</class> <class class="bolaPalpite">${arrayOrdemC[nSorteioRandom,Math.floor(tamanhoArrayC * Math.random())]}</class> <class class="bolaPalpite">${arrayOrdemC[nSorteioRandom,Math.floor(tamanhoArrayC * Math.random())]}</class> <class class="bolaPalpite">${arrayOrdemC[nSorteioRandom]}</class> <class class="bolaPalpite">${arrayOrdemC[nSorteioRandom,Math.floor(tamanhoArrayC * Math.random())]}</class> <class class="bolaPalpite">${arrayOrdemC[nSorteioRandom,Math.floor(tamanhoArrayC * Math.random())]}</class> </strong></td>
                </tr>
                <tr class="Distinto">
                    <td></br>03: </br></br></td>
                    <td class="probDireito"><strong> <class class="bolaPalpite">${arrayOrdemC[nSorteioRandom,Math.floor(tamanhoArrayC * Math.random())]}</class> <class class="bolaPalpite">${arrayOrdemC[nSorteioRandom,Math.floor(tamanhoArrayC * Math.random())]}</class> <class class="bolaPalpite">${arrayOrdemC[nSorteioRandom,Math.floor(tamanhoArrayC * Math.random())]}</class> <class class="bolaPalpite">${arrayOrdemC[nSorteioRandom]}</class> <class class="bolaPalpite">${arrayOrdemC[nSorteioRandom,Math.floor(tamanhoArrayC * Math.random())]}</class> <class class="bolaPalpite">${arrayOrdemC[nSorteioRandom,Math.floor(tamanhoArrayC * Math.random())]}</class> </strong></td>
                </tr>
                <tr class="Distinto">
                    <td></br>04: </br></br></td>
                    <td class="probDireito"><strong> <class class="bolaPalpite">${arrayOrdemC[nSorteioRandom,Math.floor(tamanhoArrayC * Math.random())]}</class> <class class="bolaPalpite">${arrayOrdemC[nSorteioRandom,Math.floor(tamanhoArrayC * Math.random())]}</class> <class class="bolaPalpite">${arrayOrdemC[nSorteioRandom,Math.floor(tamanhoArrayC * Math.random())]}</class> <class class="bolaPalpite">${arrayOrdemC[nSorteioRandom]}</class> <class class="bolaPalpite">${arrayOrdemC[nSorteioRandom,Math.floor(tamanhoArrayC * Math.random())]}</class> <class class="bolaPalpite">${arrayOrdemC[nSorteioRandom,Math.floor(tamanhoArrayC * Math.random())]}</class> </strong></td>
                </tr>
            </table>
        </div>
    </div>`
    return resultTab;
}
function CPouI(calcImparPar) {
    const R1 = cPOuImpar(calcImparPar[0]);
    const R2 = cPOuImpar(calcImparPar[1]);
    const R3 = cPOuImpar(calcImparPar[2]);
    const R4 = cPOuImpar(calcImparPar[3]);
    const R5 = cPOuImpar(calcImparPar[4]);
    const R6 = cPOuImpar(calcImparPar[5]);

    const S1 = ScPOuImpar(calcImparPar[0]);
    const S2 = ScPOuImpar(calcImparPar[1]);
    const S3 = ScPOuImpar(calcImparPar[2]);
    const S4 = ScPOuImpar(calcImparPar[3]);
    const S5 = ScPOuImpar(calcImparPar[4]);
    const S6 = ScPOuImpar(calcImparPar[5]);

    const P1 = PcPOuImpar(calcImparPar[0]);
    const P2 = PcPOuImpar(calcImparPar[1]);
    const P3 = PcPOuImpar(calcImparPar[2]);
    const P4 = PcPOuImpar(calcImparPar[3]);
    const P5 = PcPOuImpar(calcImparPar[4]);
    const P6 = PcPOuImpar(calcImparPar[5]);

    const sP1 = sPcPOuImpar(calcImparPar[0]);
    const sP2 = sPcPOuImpar(calcImparPar[1]);
    const sP3 = sPcPOuImpar(calcImparPar[2]);
    const sP4 = sPcPOuImpar(calcImparPar[3]);
    const sP5 = sPcPOuImpar(calcImparPar[4]);
    const sP6 = sPcPOuImpar(calcImparPar[5]);

    const primoN = P1 + P2 + P3 + P4 + P5 + P6;
    const sprimoN = sP1 + sP2 + sP3 + sP4 + sP5 + sP6;
    
    const par = R1 + R2 + R3 + R4 + R5 + R6;
    const impar = (6 - par);
    const somaPar = S1 + S2 + S3 + S4 + S5 + S6;
    const somaTotal = calcImparPar[0] + calcImparPar[1] + calcImparPar[2] + calcImparPar[3] + calcImparPar[4] + calcImparPar[5];
    const somaImpar = somaTotal - somaPar;
    //const impar = (6 - par)/*Gleiton Aparecido Soares de Souza*/ ;
    
    return [par, impar, somaPar, somaTotal, somaImpar, primoN, sprimoN];
}

function cPOuImpar(Ncalculo){
    if (Ncalculo%2 === 0) {
        return 1;
    } else {
        if (Ncalculo === 1){
            return 0;
        } else {
        return 0;
        }
    }
}
function ScPOuImpar(SPares){
    if (SPares % 2 === 0) {
        return SPares;
    } else {
        return 0;
    }
    
}
function PcPOuImpar(nPrimo){
    if (nPrimo != 1){
    for (var i=2; i <= nPrimo; i++ ) {
        if (nPrimo%i === 0){
            return 0;
        } else {
            return 1;
        }
    }
    } else {
        return 0;
    }
    
}
function sPcPOuImpar(numbSomaPrimos){
    if (numbSomaPrimos != 1) {
    for (var i=2; i <= numbSomaPrimos; i++ ) {
        if (numbSomaPrimos%i === 0){
            return 0;
        } else {
            return numbSomaPrimos;
        }
    }
    } else {
        return 0;
    }
}


function tabMagic(A1, A2, A3, B1, B2, B3, C1, C2, C3, D1, D2, D3, E1, E2,E3) {
    
    const L1C1 = voltaMenorQ60(`${A1}${A2},${A1}${B1},${A1}${B2},`.split(","));
    const L1C2 = voltaMenorQ60(`${A2}${A1},${A2}${B1},${A2}${B2},${A2}${B3},${A2}${A3}`.split(","));
    const L1C3 = voltaMenorQ60(`${A3}${A2},${A3}${B2},${A3}${B3},`.split(","));
    const L2C1 = voltaMenorQ60(`${B1}${A1},${B1}${A2},${B1}${B2},${B1}${C2},${B1}${C1},`.split(","));
    const L2C2 = voltaMenorQ60(`${B2}${A1},${B2}${A2},${B2}${A3},${B2}${B2},${B2}${B3},${B2}${C3},${B2}${C2},${B2}${C1},${B2}${B1},`.split(","));
    const L2C3 = voltaMenorQ60(`${B3}${A2},${B3}${A3},${B3}${C3},${B3}${C2},${B3}${B2},`.split(","));
    const L3C1 = voltaMenorQ60(`${C1}${B1},${C1}${B2},${C1}${C2},${C1}${D2},${C1}${D1},`.split(","));
    const L3C2 = voltaMenorQ60(`${C2}${B1},${C2}${B2},${C2}${B3},${C2}${C3},${C2}${D3},${C2}${D2},${C2}${D1},${C2}${C1},`.split(","));
    const L3C3 = voltaMenorQ60(`${C3}${B2},${C3}${B3},${C3}${D3},${C3}${D2},${C3}${C2},`.split(","));
    const L4C1 = voltaMenorQ60(`${D1}${C1},${D1}${C2},${D1}${D2},${D1}${E2},${D1}${E1},`.split(","));
    const L4C2 = voltaMenorQ60(`${D2}${C1},${D2}${C2},${D2}${C3},${D2}${D3},${D2}${E3},${D2}${E2},${D2}${E1},${D2}${D1},`.split(","));
    const L4C3 = voltaMenorQ60(`${D3}${C2},${D3}${C3},${D3}${C3},${D3}${E2},${D3}${D2},`.split(","));
    
    const L5C1 = voltaMenorQ60(`${E1}${D1},${E1}${D2},${E1}${E2},`.split(","));
    const L5C2 = voltaMenorQ60(`${E2}${D1},${E2}${D2},${E2}${D2},${E2}${E3},${E2}${E1},`.split(","));
    const L5C3 = voltaMenorQ60(`${E3}${D2},${E3}${D3},${E3}${E2}`.split(","));
       
    return `${L1C1}${L1C2}${L1C3} ${L2C1}${L2C2}${L2C3} ${L3C1} ${L3C2}${L3C3} ${L4C1} ${L4C2} ${L4C3} ${L5C1} ${L5C2} ${L5C3}`;    
}



function  voltaMenorQ60(recebeValorSplit) {
    for(i=0; i< recebeValorSplit[i]; i++)
    if (recebeValorSplit[i]<=60) {
        return recebeValorSplit.toString();
    } else {
        return "";
    }
}
