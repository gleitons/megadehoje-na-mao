function megaSena24xx(){
    
    let resultadoMS =  insereNumeros(2359, "10/09/2021", "7.000.000,00", 10, 20, 30, 40, 50, 60);
    let proxresultado = ProxResult("s", 2355, "23/05/2021", "8.000.000,00");
    tConcurso.innerHTML = `${resultadoMS}`
    proxR.innerHTML = `${proxresultado}`

}


function insereNumeros (concurso, valor, bol01, bol02){
    
    
    let subT = `ACUMULOU!!. Sorteio da mega-sena aconteceu hoje, sábado, com prêmio estimado em R$ ${valor} de reais, confira agora mesmo o resultado da mega-sena ${concurso}.Numeros da mega-sena ${bol01}, ${bol02}`  
    

    return subT;
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













function megaSena2436() {
    
    /* 
    1 - Segunda
    2 - terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
    7 - Domingo */
    loteria = "Mega Sena"
    siteImage = "https://megadehoje.com"
    
    diaDaSemana = "4"  
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
    //08 53 09 57 32 52
    //01 02 14 28 40 51
    ////051528323854
    concurso = 2436
    data = "09/12/2021"
    bola01 = "05"
    nS1 = bola01
    bola02 = "15"
    nS2 = bola02
    bola03 = "28"
    nS3 = bola03
    bola04 = "32"
    nS4 = bola04
    bola05 = "38"
    nS5 = bola05
    bola06 = "54"
    nS6 = bola06  
    cMegaPassado = concurso
    concursoP = concurso
    dataP = data
    concursoEmNumber = Number(concurso.value)
    pConcursoPalpite = concurso + 1
    
    let premioSenaEstimado = "39.405.657,46"
    let ganhadorSena = "1"
    let premioSena = "39.405.657,46"
    let ganhadorQuina = "65"
    const premioQuina = "41.464,82"
    const ganhadorQuadra = "4.285"
    const premioQuadra = "898,55"
    let acumulaOuGanhaP = ""
    let premioSenaEstimadoP = premioSenaEstimado
    /*Premio Estimado e data Proximo Concurso */
    if (ganhadorSena != "0") {
        acumulaOuGanhaP = `${ganhadorSena} sortudos(as)`
        acumulaOuGanha.innerHTML = `<div class="seGanhador" id="acumulaOuGanha">${ganhadorSena} Ganhador(es)</div>`
        
        
    } else {
        acumulaOuGanhaP = "ACUMULOU!!"
        respostaPalpiteAcumulado = "como ninguém acertou as 06 dezenas, o prêmio estimado vai para"
        acumulaOuGanha.innerHTML = `<div class="seAcumula" id="acumulaOuGanha">ACUMULOU!!</div>`
    }

    
    rAcumulouPassado = acumulaOuGanhaP

    
    

    /* Proximo Sorteio - Inserir Valores */

    pSorteio = " 11/12/2021"
    valorEstimado = "3.000.000,00"
    
    
    concursoData.innerHTML = `CONCURSO ${concurso} - DATA ${data}`
    qtdSena.innerHTML = `${ganhadorSena} Pessoas`
    pSena.innerHTML = `R$ ${premioSena}`

    qtdQuina.innerHTML = `${ganhadorQuina} Pessoas`
    pQuina.innerHTML = `R$ ${premioQuina}`

    qtdQuadra.innerHTML = `${ganhadorQuadra} Pessoas`
    pQuadra.innerHTML = `R$ ${premioQuadra}`
   



    
    /* Novas variaveis para descrever concurso anterior */
    ms01.innerHTML = `${bola01}`
    ms02.innerHTML = `${bola02}`
    ms03.innerHTML = `${bola03}`
    ms04.innerHTML = `${bola04}`
    ms05.innerHTML = `${bola05}`
    ms06.innerHTML = `${bola06}`
    proximoSorteio.innerHTML = `Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`

    
    TimeRanges.innerHTML = ` `

    tConcurso.innerHTML = `Resultado Mega-sena ${concurso} dia ${data} - ${dataMega}`
    sTConcuros.innerHTML = `<strong >${acumulaOuGanhaP}</strong>. Sorteio da mega-sena aconteceu hoje, ${dataMega}, com prêmio estimado em R$ ${premioSenaEstimado} de reais, confira agora mesmo o resultado da mega-sena <strong>${concurso}</strong>.`
    
    siteNaImagem.innerHTML = `<a href="megadehoje.com" target="_blank" rel="follow">megadehoje.com</a>`
    nomeDoSorteioImage.innerHTML = `${loteria}`
    numeroDoSorteioImage.innerHTML = `Concurso ${concurso}`
    diaEDataSorteioImage.innerHTML = `${dataMega}, ${data}`
    valorEstimadoImage.innerHTML = `Estimado em R$ ${premioSenaEstimado}`

    rMegaA.innerHTML = `É isso mesmo, saiu o resultado, o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram <strong>${ganhadorQuadra}</strong> apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`
    titleVejaOResultado.innerHTML = `Concurso ${concurso} da mega-sena: Veja o resultado final.`
    

    comoJogarNaMegaSena.innerHTML = `A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha). <a href="http://bit.ly/aposte-online" target="_blank"><button>APOSTE ONLINE</button></a>`

    /*palpite da mega-sena */
    mseg1 = Math.floor(Math.random() * 60 + 1)
    mseg2 = Math.floor(Math.random() * 60 + 1)
    mseg3 = Math.floor(Math.random() * 60 + 1)
    mseg4 = Math.floor(Math.random() * 60 + 1)
    mseg5 = Math.floor(Math.random() * 60 + 1)
    mseg6 = Math.floor(Math.random() * 60 + 1)

    loteriaM = loteria.toUpperCase()
    titleLoteriaNacional.innerHTML = `PALPITE DA ${loteriaM}`
    nConcursoPalpite.innerHTML = `CONCURSO ${concurso + 1}`
    diaSorteioPalpite.innerHTML = `SORTEIO DIA ${pSorteio}`
    pEstimadoPalpite.innerHTML =  `R$ ${valorEstimado}`

    palpiteN1.innerHTML = `${mseg1}`
    palpiteN2.innerHTML = `${mseg2}`
    palpiteN3.innerHTML = `${mseg3}`
    palpiteN4.innerHTML = `${mseg4}`
    palpiteN5.innerHTML = `${mseg5}`
    palpiteN6.innerHTML = `${mseg6}`
    loteriaMinusc = loteriaM.toLowerCase()

    rPalpiteMega.innerHTML = `Os nossos palpites da <strong>${loteriaMinusc}</strong> são baseado no horário atual, a previsão não é certo, mas recebemos depoimentos de acerto na quadra, se aparecer um jogo do palpite da <strong>${loteriaMinusc}</strong> que faça sentir confiança, não perca a oportunidade e aposte, lembre-se que, com apenas um jogo, de seis números, você pode ser o vencedor e faturar os <strong>R$ ${valorEstimado}</strong> de reais da mega-sena <strong>${concursoP+1}</strong> do dia <strong>${pSorteio}</strong>.`
    /*FIM palpite da mega sena */
    pConcursoP.innerHTML = `Palpite da Mega-sena ${pConcursoPalpite} dia ${pSorteio} - APOSTE`

    

    descAbaixoPalpite.innerHTML = `<p style="text-align: center; margin: 0px;"><i>Veja os números gerados pra você, caso não goste, clique em </i><strong>"GERAR NOVOS NÚMEROS"</strong></p>`
    titleVejaOPalpite.innerHTML = `Palpite da da <strong>${loteriaMinusc}</strong>: Critérios.`

    ImagemFundoP.innerHTML = `<a href="/resultados/mega-sena/resultado-mega-sena-${concurso}.html" target="_blank" rel="follow"><img class="imagemDoPalpite" src="/imagens/palpites/mega-sena/sorteio-mega-sena-${concurso}.jpeg" alt="sorteio da mega sena ${concurso}"></a>`

    tiraStrong = sTPalpite.innerHTML.replace(/<strong>/gi, "")
    tiraStrongComplete = tiraStrong.replace(/</gi, "")
    contentSite = `Palpite da ${loteriaMinusc}, concurso ${concursoP+1}, prêmio estimado em R$ ${valorEstimado} de reais, quem sabe a sorte não bate em sua porta, veja os palpites.`
    sTPalpite.innerHTML = `Sorteio da mega-sena anterior <strong>${concurso}</strong>, ${acumulaOuGanhaP}, próximo sorteio da mega sena, o valor estimado é <strong>R$ ${valorEstimado}</strong> de reais. Quem sabe a sorte não bate em sua porte: <a href="http://bit.ly/aposte-online" target="_blank" rel="nofollow">APOSTE ONLINE</a> hoje mesmo.`


    enderecoLink = window.location.href
    titleTwitterEFacebook = pConcursoP.innerHTML
    descricaoTwitterEFacebook = sTPalpite.innerHTML
    titleContent = `Mega de Hoje - Resultados da Loteria Nacional`
    metadesc.innerHTML = `<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  
    
    <link rel="canonical" href="${enderecoLink}" />
    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${titleTwitterEFacebook}">
    <meta name="twitter:description" content="${tiraStrongComplete}">
    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${titleContent}">
    <meta property="og:title" content="${contentSite}">
    <meta property="og:description" content="${contentSite}">
    <meta property="og:url" content="${enderecoLink}"> 
    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">`
    carregarMeta.innerHTML = `<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  
    
    <link rel="canonical" href="${enderecoLink}" />
    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${titleTwitterEFacebook}">
    <meta name="twitter:description" content="${tiraStrongComplete}">
    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${titleContent}">
    <meta property="og:title" content="${contentSite}">
    <meta property="og:description" content="${contentSite}">
    <meta property="og:url" content="${enderecoLink}"> 
    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    `
    
    
    
    
    /* Produção de MetaTag mega-sena */


    
    

    var enviarResultAnterior = rMegaA.innerHTML

    res.innerHTML = `${enviarResultAnterior}`

    return enviarResultAnterior

    

    
    
    /*Para o blog */
    
    
}

function megaSena2435() {
    
    /* 
    1 - Segunda
    2 - terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
    7 - Domingo */
    loteria = "Mega Sena"
    siteImage = "https://megadehoje.com"

    diaDaSemana = "3"  
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
    //08 53 09 57 32 52
    //01 02 14 28 40 51
    concurso = 2435
    data = "07/12/2021"
    bola01 = "05"
    nS1 = bola01
    bola02 = "22"
    nS2 = bola02
    bola03 = "30"
    nS3 = bola03
    bola04 = "32"
    nS4 = bola04
    bola05 = "33"
    nS5 = bola05
    bola06 = "36"
    nS6 = bola06  
    cMegaPassado = concurso
    concursoP = concurso
    dataP = data
    concursoEmNumber = Number(concurso.value)
    pConcursoPalpite = concurso + 1
    
    let premioSenaEstimado = "37.000.000,00"
    let ganhadorSena = "0"
    let premioSena = "Não Houve"
    let ganhadorQuina = "46"
    const premioQuina = "46.912,51"
    const ganhadorQuadra = "3.051"
    const premioQuadra = "1.010,43"
    let acumulaOuGanhaP = ""
    let premioSenaEstimadoP = premioSenaEstimado
    /*Premio Estimado e data Proximo Concurso */
    if (ganhadorSena != "0") {
        acumulaOuGanhaP = `${ganhadorSena} sortudos(as)`
        acumulaOuGanha.innerHTML = `<div class="seGanhador" id="acumulaOuGanha">${ganhadorSena} Ganhador(es)</div>`
        
        
    } else {
        acumulaOuGanhaP = "ACUMULOU!!"
        respostaPalpiteAcumulado = "como ninguém acertou as 06 dezenas, o prêmio estimado vai para"
        acumulaOuGanha.innerHTML = `<div class="seAcumula" id="acumulaOuGanha">ACUMULOU!!</div>`
    }

    
    rAcumulouPassado = acumulaOuGanhaP

    
    

    /* Proximo Sorteio - Inserir Valores */

    pSorteio = " 09/12/2021"
    valorEstimado = "40.000.000,00"
    
    
    concursoData.innerHTML = `CONCURSO ${concurso} - DATA ${data}`
    qtdSena.innerHTML = `${ganhadorSena} Pessoas`
    pSena.innerHTML = `R$ ${premioSena}`

    qtdQuina.innerHTML = `${ganhadorQuina} Pessoas`
    pQuina.innerHTML = `R$ ${premioQuina}`

    qtdQuadra.innerHTML = `${ganhadorQuadra} Pessoas`
    pQuadra.innerHTML = `R$ ${premioQuadra}`
   



    
    /* Novas variaveis para descrever concurso anterior */
    ms01.innerHTML = `${bola01}`
    ms02.innerHTML = `${bola02}`
    ms03.innerHTML = `${bola03}`
    ms04.innerHTML = `${bola04}`
    ms05.innerHTML = `${bola05}`
    ms06.innerHTML = `${bola06}`
    proximoSorteio.innerHTML = `Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`

    
    TimeRanges.innerHTML = ` `

    tConcurso.innerHTML = `Resultado Mega-sena ${concurso} dia ${data} - ${dataMega}`
    sTConcuros.innerHTML = `<strong >${acumulaOuGanhaP}</strong>. Sorteio da mega-sena aconteceu hoje, ${dataMega}, com prêmio estimado em R$ ${premioSenaEstimado} de reais, confira agora mesmo o resultado da mega-sena <strong>${concurso}</strong>.`
    
    siteNaImagem.innerHTML = `<a href="megadehoje.com" target="_blank" rel="follow">megadehoje.com</a>`
    nomeDoSorteioImage.innerHTML = `${loteria}`
    numeroDoSorteioImage.innerHTML = `Concurso ${concurso}`
    diaEDataSorteioImage.innerHTML = `${dataMega}, ${data}`
    valorEstimadoImage.innerHTML = `Estimado em R$ ${premioSenaEstimado}`

    rMegaA.innerHTML = `É isso mesmo, saiu o resultado, o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram <strong>${ganhadorQuadra}</strong> apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`
    titleVejaOResultado.innerHTML = `Concurso ${concurso} da mega-sena: Veja o resultado final.`
    

    comoJogarNaMegaSena.innerHTML = `A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha). <a href="http://bit.ly/aposte-online" target="_blank"><button>APOSTE ONLINE</button></a>`

    /*palpite da mega-sena */
    mseg1 = Math.floor(Math.random() * 60 + 1)
    mseg2 = Math.floor(Math.random() * 60 + 1)
    mseg3 = Math.floor(Math.random() * 60 + 1)
    mseg4 = Math.floor(Math.random() * 60 + 1)
    mseg5 = Math.floor(Math.random() * 60 + 1)
    mseg6 = Math.floor(Math.random() * 60 + 1)

    loteriaM = loteria.toUpperCase()
    titleLoteriaNacional.innerHTML = `PALPITE DA ${loteriaM}`
    nConcursoPalpite.innerHTML = `CONCURSO ${concurso + 1}`
    diaSorteioPalpite.innerHTML = `SORTEIO DIA ${pSorteio}`
    pEstimadoPalpite.innerHTML =  `R$ ${valorEstimado}`

    palpiteN1.innerHTML = `${mseg1}`
    palpiteN2.innerHTML = `${mseg2}`
    palpiteN3.innerHTML = `${mseg3}`
    palpiteN4.innerHTML = `${mseg4}`
    palpiteN5.innerHTML = `${mseg5}`
    palpiteN6.innerHTML = `${mseg6}`
    loteriaMinusc = loteriaM.toLowerCase()

    rPalpiteMega.innerHTML = `Os nossos palpites da <strong>${loteriaMinusc}</strong> são baseado no horário atual, a previsão não é certo, mas recebemos depoimentos de acerto na quadra, se aparecer um jogo do palpite da <strong>${loteriaMinusc}</strong> que faça sentir confiança, não perca a oportunidade e aposte, lembre-se que, com apenas um jogo, de seis números, você pode ser o vencedor e faturar os <strong>R$ ${valorEstimado}</strong> de reais da mega-sena <strong>${concursoP+1}</strong> do dia <strong>${pSorteio}</strong>.`
    /*FIM palpite da mega sena */
    pConcursoP.innerHTML = `Palpite da Mega-sena ${pConcursoPalpite} dia ${pSorteio} - APOSTE`

    

    descAbaixoPalpite.innerHTML = `<p style="text-align: center; margin: 0px;"><i>Veja os números gerados pra você, caso não goste, clique em </i><strong>"GERAR NOVOS NÚMEROS"</strong></p>`
    titleVejaOPalpite.innerHTML = `Palpite da da <strong>${loteriaMinusc}</strong>: Critérios.`

    ImagemFundoP.innerHTML = `<a href="/resultados/mega-sena/resultado-mega-sena-${concurso}.html" target="_blank" rel="follow"><img class="imagemDoPalpite" src="/imagens/palpites/mega-sena/sorteio-mega-sena-${concurso}.jpeg" alt="sorteio da mega sena ${concurso}"></a>`

    tiraStrong = sTPalpite.innerHTML.replace(/<strong>/gi, "")
    tiraStrongComplete = tiraStrong.replace(/</gi, "")
    contentSite = `Palpite da ${loteriaMinusc}, concurso ${concursoP+1}, prêmio estimado em R$ ${valorEstimado} de reais, quem sabe a sorte não bate em sua porta, veja os palpites.`
    sTPalpite.innerHTML = `Sorteio da mega-sena anterior <strong>${concurso}</strong>, ${acumulaOuGanhaP}, próximo sorteio da mega sena, o valor estimado é <strong>R$ ${valorEstimado}</strong> de reais. Quem sabe a sorte não bate em sua porte: <a href="http://bit.ly/aposte-online" target="_blank" rel="nofollow">APOSTE ONLINE</a> hoje mesmo.`


    enderecoLink = window.location.href
    titleTwitterEFacebook = pConcursoP.innerHTML
    descricaoTwitterEFacebook = sTPalpite.innerHTML
    titleContent = `Mega de Hoje - Resultados da Loteria Nacional`
    metadesc.innerHTML = `<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  
    
    <link rel="canonical" href="${enderecoLink}" />
    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${titleTwitterEFacebook}">
    <meta name="twitter:description" content="${tiraStrongComplete}">
    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${titleContent}">
    <meta property="og:title" content="${contentSite}">
    <meta property="og:description" content="${contentSite}">
    <meta property="og:url" content="${enderecoLink}"> 
    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">`
    carregarMeta.innerHTML = `<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  
    
    <link rel="canonical" href="${enderecoLink}" />
    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${titleTwitterEFacebook}">
    <meta name="twitter:description" content="${tiraStrongComplete}">
    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${titleContent}">
    <meta property="og:title" content="${contentSite}">
    <meta property="og:description" content="${contentSite}">
    <meta property="og:url" content="${enderecoLink}"> 
    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    `
    
    
    
    
    /* Produção de MetaTag mega-sena */


    
    

    var enviarResultAnterior = rMegaA.innerHTML

    res.innerHTML = `${enviarResultAnterior}`

    return enviarResultAnterior

    

    
    
    /*Para o blog */
    
    
}



function megaSena2434() {
    
    /* 
    1 - Segunda
    2 - terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
    7 - Domingo */
    loteria = "Mega Sena"
    siteImage = "https://megadehoje.com"

    diaDaSemana = "6"  
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
    //08 53 09 57 32 52
    //01 02 14 28 40 51
    concurso = 2434
    data = "04/12/2021"
    bola01 = "01"
    nS1 = bola01
    bola02 = "02"
    nS2 = bola02
    bola03 = "14"
    nS3 = bola03
    bola04 = "28"
    nS4 = bola04
    bola05 = "40"
    nS5 = bola05
    bola06 = "51"
    nS6 = bola06  
    cMegaPassado = concurso
    concursoP = concurso
    dataP = data
    concursoEmNumber = Number(concurso.value)
    pConcursoPalpite = concurso + 1
    
    let premioSenaEstimado = "16.000.000,00"
    let ganhadorSena = "0"
    let premioSena = "Não Houve"
    let ganhadorQuina = "37"
    const premioQuina = "75.710,54"
    const ganhadorQuadra = "3.663"
    const premioQuadra = "1.092,50"
    let acumulaOuGanhaP = ""
    let premioSenaEstimadoP = premioSenaEstimado
    /*Premio Estimado e data Proximo Concurso */
    if (ganhadorSena != "0") {
        acumulaOuGanhaP = `${ganhadorSena} sortudos(as)`
        acumulaOuGanha.innerHTML = `<div class="seGanhador" id="acumulaOuGanha">${ganhadorSena} Ganhador(es)</div>`
        
        
    } else {
        acumulaOuGanhaP = "ACUMULOU!!"
        respostaPalpiteAcumulado = "como ninguém acertou as 06 dezenas, o prêmio estimado vai para"
        acumulaOuGanha.innerHTML = `<div class="seAcumula" id="acumulaOuGanha">ACUMULOU!!</div>`
    }

    
    rAcumulouPassado = acumulaOuGanhaP

    
    

    /* Proximo Sorteio - Inserir Valores */

    pSorteio = " 07/12/2021"
    valorEstimado = "37.000.000,00"
    
    
    concursoData.innerHTML = `CONCURSO ${concurso} - DATA ${data}`
    qtdSena.innerHTML = `${ganhadorSena} Pessoas`
    pSena.innerHTML = `R$ ${premioSena}`

    qtdQuina.innerHTML = `${ganhadorQuina} Pessoas`
    pQuina.innerHTML = `R$ ${premioQuina}`

    qtdQuadra.innerHTML = `${ganhadorQuadra} Pessoas`
    pQuadra.innerHTML = `R$ ${premioQuadra}`
   



    
    /* Novas variaveis para descrever concurso anterior */
    ms01.innerHTML = `${bola01}`
    ms02.innerHTML = `${bola02}`
    ms03.innerHTML = `${bola03}`
    ms04.innerHTML = `${bola04}`
    ms05.innerHTML = `${bola05}`
    ms06.innerHTML = `${bola06}`
    proximoSorteio.innerHTML = `Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`

    
    TimeRanges.innerHTML = ` `

    tConcurso.innerHTML = `Resultado Mega-sena ${concurso} dia ${data} - ${dataMega}`
    sTConcuros.innerHTML = `<strong >${acumulaOuGanhaP}</strong>. Sorteio da mega-sena aconteceu hoje, ${dataMega}, com prêmio estimado em R$ ${premioSenaEstimado} de reais, confira agora mesmo o resultado da mega-sena <strong>${concurso}</strong>.`
    
    siteNaImagem.innerHTML = `<a href="megadehoje.com" target="_blank" rel="follow">megadehoje.com</a>`
    nomeDoSorteioImage.innerHTML = `${loteria}`
    numeroDoSorteioImage.innerHTML = `Concurso ${concurso}`
    diaEDataSorteioImage.innerHTML = `${dataMega}, ${data}`
    valorEstimadoImage.innerHTML = `Estimado em R$ ${premioSenaEstimado}`

    rMegaA.innerHTML = `É isso mesmo, saiu o resultado, o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram <strong>${ganhadorQuadra}</strong> apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`
    titleVejaOResultado.innerHTML = `Concurso ${concurso} da mega-sena: Veja o resultado final.`
    

    comoJogarNaMegaSena.innerHTML = `A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha). <a href="http://bit.ly/aposte-online" target="_blank"><button>APOSTE ONLINE</button></a>`

    /*palpite da mega-sena */
    mseg1 = Math.floor(Math.random() * 60 + 1)
    mseg2 = Math.floor(Math.random() * 60 + 1)
    mseg3 = Math.floor(Math.random() * 60 + 1)
    mseg4 = Math.floor(Math.random() * 60 + 1)
    mseg5 = Math.floor(Math.random() * 60 + 1)
    mseg6 = Math.floor(Math.random() * 60 + 1)

    loteriaM = loteria.toUpperCase()
    titleLoteriaNacional.innerHTML = `PALPITE DA ${loteriaM}`
    nConcursoPalpite.innerHTML = `CONCURSO ${concurso + 1}`
    diaSorteioPalpite.innerHTML = `SORTEIO DIA ${pSorteio}`
    pEstimadoPalpite.innerHTML =  `R$ ${valorEstimado}`

    palpiteN1.innerHTML = `${mseg1}`
    palpiteN2.innerHTML = `${mseg2}`
    palpiteN3.innerHTML = `${mseg3}`
    palpiteN4.innerHTML = `${mseg4}`
    palpiteN5.innerHTML = `${mseg5}`
    palpiteN6.innerHTML = `${mseg6}`
    loteriaMinusc = loteriaM.toLowerCase()

    rPalpiteMega.innerHTML = `Os nossos palpites da <strong>${loteriaMinusc}</strong> são baseado no horário atual, a previsão não é certo, mas recebemos depoimentos de acerto na quadra, se aparecer um jogo do palpite da <strong>${loteriaMinusc}</strong> que faça sentir confiança, não perca a oportunidade e aposte, lembre-se que, com apenas um jogo, de seis números, você pode ser o vencedor e faturar os <strong>R$ ${valorEstimado}</strong> de reais da mega-sena <strong>${concursoP+1}</strong> do dia <strong>${pSorteio}</strong>.`
    /*FIM palpite da mega sena */
    pConcursoP.innerHTML = `Palpite da Mega-sena ${pConcursoPalpite} dia ${pSorteio} - APOSTE`

    

    descAbaixoPalpite.innerHTML = `<p style="text-align: center; margin: 0px;"><i>Veja os números gerados pra você, caso não goste, clique em </i><strong>"GERAR NOVOS NÚMEROS"</strong></p>`
    titleVejaOPalpite.innerHTML = `Palpite da da <strong>${loteriaMinusc}</strong>: Critérios.`

    ImagemFundoP.innerHTML = `<a href="/resultados/mega-sena/resultado-mega-sena-${concurso}.html" target="_blank" rel="follow"><img class="imagemDoPalpite" src="/imagens/palpites/mega-sena/sorteio-mega-sena-${concurso}.jpeg" alt="sorteio da mega sena ${concurso}"></a>`

    tiraStrong = sTPalpite.innerHTML.replace(/<strong>/gi, "")
    tiraStrongComplete = tiraStrong.replace(/</gi, "")
    contentSite = `Palpite da ${loteriaMinusc}, concurso ${concursoP+1}, prêmio estimado em R$ ${valorEstimado} de reais, quem sabe a sorte não bate em sua porta, veja os palpites.`
    sTPalpite.innerHTML = `Sorteio da mega-sena anterior <strong>${concurso}</strong>, ${acumulaOuGanhaP}, próximo sorteio da mega sena, o valor estimado é <strong>R$ ${valorEstimado}</strong> de reais. Quem sabe a sorte não bate em sua porte: <a href="http://bit.ly/aposte-online" target="_blank" rel="nofollow">APOSTE ONLINE</a> hoje mesmo.`


    enderecoLink = window.location.href
    titleTwitterEFacebook = pConcursoP.innerHTML
    descricaoTwitterEFacebook = sTPalpite.innerHTML
    titleContent = `Mega de Hoje - Resultados da Loteria Nacional`
    metadesc.innerHTML = `<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  
    
    <link rel="canonical" href="${enderecoLink}" />
    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${titleTwitterEFacebook}">
    <meta name="twitter:description" content="${tiraStrongComplete}">
    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${titleContent}">
    <meta property="og:title" content="${contentSite}">
    <meta property="og:description" content="${contentSite}">
    <meta property="og:url" content="${enderecoLink}"> 
    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">`
    carregarMeta.innerHTML = `<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  
    
    <link rel="canonical" href="${enderecoLink}" />
    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${titleTwitterEFacebook}">
    <meta name="twitter:description" content="${tiraStrongComplete}">
    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${titleContent}">
    <meta property="og:title" content="${contentSite}">
    <meta property="og:description" content="${contentSite}">
    <meta property="og:url" content="${enderecoLink}"> 
    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    `
    
    
    
    
    /* Produção de MetaTag mega-sena */


    
    

    var enviarResultAnterior = rMegaA.innerHTML

    res.innerHTML = `${enviarResultAnterior}`

    return enviarResultAnterior

    

    
    
    /*Para o blog */
    
    
}


function megaSena2433() {
    
    /* 
    1 - Segunda
    2 - terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
    7 - Domingo */
    loteria = "Mega Sena"
    siteImage = "https://megadehoje.com"

    diaDaSemana = "3"  
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
    //08 53 09 57 32 52
    concurso = 2433
    data = "01/12/2021"
    bola01 = "08"
    nS1 = bola01
    bola02 = "09"
    nS2 = bola02
    bola03 = "32"
    nS3 = bola03
    bola04 = "52"
    nS4 = bola04
    bola05 = "53"
    nS5 = bola05
    bola06 = "57"
    nS6 = bola06  
    cMegaPassado = concurso
    concursoP = concurso
    dataP = data
    concursoEmNumber = Number(concurso.value)
    pConcursoPalpite = concurso + 1
    
    let premioSenaEstimado = "11.008.240,88"
    let ganhadorSena = "0"
    let premioSena = "11.008.240,88"
    let ganhadorQuina = "31"
    const premioQuina = "71.625,00"
    const ganhadorQuadra = "2.625"
    const premioQuadra = "1.208,36"
    let acumulaOuGanhaP = ""
    let premioSenaEstimadoP = premioSenaEstimado
    /*Premio Estimado e data Proximo Concurso */
    if (ganhadorSena != "0") {
        acumulaOuGanhaP = `${ganhadorSena} sortudos(as)`
        acumulaOuGanha.innerHTML = `<div class="seGanhador" id="acumulaOuGanha">${ganhadorSena} Ganhador(es)</div>`
        
        
    } else {
        acumulaOuGanhaP = "ACUMULOU!!"
        respostaPalpiteAcumulado = "como ninguém acertou as 06 dezenas, o prêmio estimado vai para"
        acumulaOuGanha.innerHTML = `<div class="seAcumula" id="acumulaOuGanha">ACUMULOU!!</div>`
    }

    
    rAcumulouPassado = acumulaOuGanhaP

    
    

    /* Proximo Sorteio - Inserir Valores */

    pSorteio = " 04/12/2021"
    valorEstimado = "16.000.000,00"
    
    
    concursoData.innerHTML = `CONCURSO ${concurso} - DATA ${data}`
    qtdSena.innerHTML = `${ganhadorSena} Pessoas`
    pSena.innerHTML = `R$ ${premioSena}`

    qtdQuina.innerHTML = `${ganhadorQuina} Pessoas`
    pQuina.innerHTML = `R$ ${premioQuina}`

    qtdQuadra.innerHTML = `${ganhadorQuadra} Pessoas`
    pQuadra.innerHTML = `R$ ${premioQuadra}`
   



    
    /* Novas variaveis para descrever concurso anterior */
    ms01.innerHTML = `${bola01}`
    ms02.innerHTML = `${bola02}`
    ms03.innerHTML = `${bola03}`
    ms04.innerHTML = `${bola04}`
    ms05.innerHTML = `${bola05}`
    ms06.innerHTML = `${bola06}`
    proximoSorteio.innerHTML = `Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`

    
    TimeRanges.innerHTML = ` `

    tConcurso.innerHTML = `Resultado Mega-sena ${concurso} dia ${data} - ${dataMega}`
    sTConcuros.innerHTML = `<strong >${acumulaOuGanhaP}</strong>. Sorteio da mega-sena aconteceu hoje, ${dataMega}, com prêmio estimado em R$ ${premioSenaEstimado} de reais, confira agora mesmo o resultado da mega-sena <strong>${concurso}</strong>.`
    
    siteNaImagem.innerHTML = `<a href="megadehoje.com" target="_blank" rel="follow">megadehoje.com</a>`
    nomeDoSorteioImage.innerHTML = `${loteria}`
    numeroDoSorteioImage.innerHTML = `Concurso ${concurso}`
    diaEDataSorteioImage.innerHTML = `${dataMega}, ${data}`
    valorEstimadoImage.innerHTML = `Estimado em R$ ${premioSenaEstimado}`

    rMegaA.innerHTML = `É isso mesmo, saiu o resultado, o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram ${ganhadorQuadra} apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`
    titleVejaOResultado.innerHTML = `Concurso ${concurso} da mega-sena: Veja o resultado final.`
    

    comoJogarNaMegaSena.innerHTML = `A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha). <a href="http://bit.ly/aposte-online" target="_blank"><button>APOSTE ONLINE</button></a>`

    /*palpite da mega-sena */
    mseg1 = Math.floor(Math.random() * 60 + 1)
    mseg2 = Math.floor(Math.random() * 60 + 1)
    mseg3 = Math.floor(Math.random() * 60 + 1)
    mseg4 = Math.floor(Math.random() * 60 + 1)
    mseg5 = Math.floor(Math.random() * 60 + 1)
    mseg6 = Math.floor(Math.random() * 60 + 1)

    loteriaM = loteria.toUpperCase()
    titleLoteriaNacional.innerHTML = `PALPITE DA ${loteriaM}`
    nConcursoPalpite.innerHTML = `CONCURSO ${concurso + 1}`
    diaSorteioPalpite.innerHTML = `SORTEIO DIA ${pSorteio}`
    pEstimadoPalpite.innerHTML =  `R$ ${valorEstimado}`

    palpiteN1.innerHTML = `${mseg1}`
    palpiteN2.innerHTML = `${mseg2}`
    palpiteN3.innerHTML = `${mseg3}`
    palpiteN4.innerHTML = `${mseg4}`
    palpiteN5.innerHTML = `${mseg5}`
    palpiteN6.innerHTML = `${mseg6}`
    loteriaMinusc = loteriaM.toLowerCase()

    rPalpiteMega.innerHTML = `Os nossos palpites da <strong>${loteriaMinusc}</strong> são baseado no horário atual, a previsão não é certo, mas recebemos depoimentos de acerto na quadra, se aparecer um jogo do palpite da <strong>${loteriaMinusc}</strong> que faça sentir confiança, não perca a oportunidade e aposte, lembre-se que, com apenas um jogo, de seis números, você pode ser o vencedor e faturar os <strong>R$ ${valorEstimado}</strong> de reais da mega-sena <strong>${concursoP+1}</strong> do dia <strong>${pSorteio}</strong>.`
    /*FIM palpite da mega sena */
    pConcursoP.innerHTML = `Palpite da Mega-sena ${pConcursoPalpite} dia ${pSorteio} - APOSTE`

    

    descAbaixoPalpite.innerHTML = `<p style="text-align: center; margin: 0px;"><i>Veja os números gerados pra você, caso não goste, clique em </i><strong>"GERAR NOVOS NÚMEROS"</strong></p>`
    titleVejaOPalpite.innerHTML = `Palpite da da <strong>${loteriaMinusc}</strong>: Critérios.`

    ImagemFundoP.innerHTML = `<a href="/resultados/mega-sena/resultado-mega-sena-${concurso}.html" target="_blank" rel="follow"><img class="imagemDoPalpite" src="/imagens/palpites/mega-sena/sorteio-mega-sena-${concurso}.jpeg" alt="sorteio da mega sena ${concurso}"></a>`

    tiraStrong = sTPalpite.innerHTML.replace(/<strong>/gi, "")
    tiraStrongComplete = tiraStrong.replace(/</gi, "")
    contentSite = `Palpite da ${loteriaMinusc}, concurso ${concursoP+1}, prêmio estimado em R$ ${valorEstimado} de reais, quem sabe a sorte não bate em sua porta, veja os palpites.`
    sTPalpite.innerHTML = `Sorteio da mega-sena anterior <strong>${concurso}</strong>, ${acumulaOuGanhaP}, próximo sorteio da mega sena, o valor estimado é <strong>R$ ${valorEstimado}</strong> de reais. Quem sabe a sorte não bate em sua porte: <a href="http://bit.ly/aposte-online" target="_blank" rel="nofollow">APOSTE ONLINE</a> hoje mesmo.`


    enderecoLink = window.location.href
    titleTwitterEFacebook = pConcursoP.innerHTML
    descricaoTwitterEFacebook = sTPalpite.innerHTML
    titleContent = `Mega de Hoje - Resultados da Loteria Nacional`
    metadesc.innerHTML = `<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  
    
    <link rel="canonical" href="${enderecoLink}" />
    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${titleTwitterEFacebook}">
    <meta name="twitter:description" content="${tiraStrongComplete}">
    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${titleContent}">
    <meta property="og:title" content="${contentSite}">
    <meta property="og:description" content="${contentSite}">
    <meta property="og:url" content="${enderecoLink}"> 
    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">`
    carregarMeta.innerHTML = `<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  
    
    <link rel="canonical" href="${enderecoLink}" />
    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${titleTwitterEFacebook}">
    <meta name="twitter:description" content="${tiraStrongComplete}">
    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${titleContent}">
    <meta property="og:title" content="${contentSite}">
    <meta property="og:description" content="${contentSite}">
    <meta property="og:url" content="${enderecoLink}"> 
    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    `
    
    
    
    
    /* Produção de MetaTag mega-sena */


    
    

    var enviarResultAnterior = rMegaA.innerHTML

    res.innerHTML = `${enviarResultAnterior}`

    return enviarResultAnterior

    

    
    
    /*Para o blog */
    
    
}


function megaSena2432() {
    
    /* 
    1 - Segunda
    2 - terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
    7 - Domingo */
    loteria = "Mega Sena"
    siteImage = "https://megadehoje.com"

    diaDaSemana = "6"  
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
    
    concurso = 2432
    data = "28/11/2021"
    bola01 = "07"
    nS1 = bola01
    bola02 = "29"
    nS2 = bola02
    bola03 = "38"
    nS3 = bola03
    bola04 = "40"
    nS4 = bola04
    bola05 = "44"
    nS5 = bola05
    bola06 = "52"
    nS6 = bola06  
    cMegaPassado = concurso
    concursoP = concurso
    dataP = data
    concursoEmNumber = Number(concurso.value)
    pConcursoPalpite = concurso + 1
    
    let premioSenaEstimado = "6.918.076,69"
    let ganhadorSena = "0"
    let premioSena = "6.918.076,69"
    let ganhadorQuina = "21"
    const premioQuina = "100.863,31"
    const ganhadorQuadra = "2.572"
    const premioQuadra = "1.176,47"
    let acumulaOuGanhaP = ""
    let premioSenaEstimadoP = premioSenaEstimado
    /*Premio Estimado e data Proximo Concurso */
    if (ganhadorSena != "0") {
        acumulaOuGanhaP = `${ganhadorSena} sortudos(as)`
        acumulaOuGanha.innerHTML = `<div class="seGanhador" id="acumulaOuGanha">${ganhadorSena} Ganhador(es)</div>`
        
        
    } else {
        acumulaOuGanhaP = "ACUMULOU!!"
        respostaPalpiteAcumulado = "como ninguém acertou as 06 dezenas, o prêmio estimado vai para"
        acumulaOuGanha.innerHTML = `<div class="seAcumula" id="acumulaOuGanha">ACUMULOU!!</div>`
    }

    
    rAcumulouPassado = acumulaOuGanhaP

    
    

    /* Proximo Sorteio - Inserir Valores */

    pSorteio = " 01/12/2021"
    valorEstimado = "12.000.000,00"
    
    
    concursoData.innerHTML = `CONCURSO ${concurso} - DATA ${data}`
    qtdSena.innerHTML = `${ganhadorSena} Pessoas`
    pSena.innerHTML = `R$ ${premioSena}`

    qtdQuina.innerHTML = `${ganhadorQuina} Pessoas`
    pQuina.innerHTML = `R$ ${premioQuina}`

    qtdQuadra.innerHTML = `${ganhadorQuadra} Pessoas`
    pQuadra.innerHTML = `R$ ${premioQuadra}`
   



    
    /* Novas variaveis para descrever concurso anterior */
    ms01.innerHTML = `${bola01}`
    ms02.innerHTML = `${bola02}`
    ms03.innerHTML = `${bola03}`
    ms04.innerHTML = `${bola04}`
    ms05.innerHTML = `${bola05}`
    ms06.innerHTML = `${bola06}`
    proximoSorteio.innerHTML = `Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`

    
    TimeRanges.innerHTML = ` `

    tConcurso.innerHTML = `Resultado Mega-sena ${concurso} dia ${data} - ${dataMega}`
    sTConcuros.innerHTML = `<strong >${acumulaOuGanhaP}</strong>. Sorteio da mega-sena aconteceu hoje, ${dataMega}, com prêmio estimado em R$ ${premioSenaEstimado} de reais, confira agora mesmo o resultado da mega-sena <strong>${concurso}</strong>.`
    
    siteNaImagem.innerHTML = `<a href="megadehoje.com" target="_blank" rel="follow">megadehoje.com</a>`
    nomeDoSorteioImage.innerHTML = `${loteria}`
    numeroDoSorteioImage.innerHTML = `Concurso ${concurso}`
    diaEDataSorteioImage.innerHTML = `${dataMega}, ${data}`
    valorEstimadoImage.innerHTML = `Estimado em R$ ${premioSenaEstimado}`

    rMegaA.innerHTML = `É isso mesmo, saiu o resultado, o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram ${ganhadorQuadra} apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`
    titleVejaOResultado.innerHTML = `Concurso ${concurso} da mega-sena: Veja o resultado final.`
    

    comoJogarNaMegaSena.innerHTML = `A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha). <a href="http://bit.ly/aposte-online" target="_blank"><button>APOSTE ONLINE</button></a>`

    /*palpite da mega-sena */
    mseg1 = Math.floor(Math.random() * 60 + 1)
    mseg2 = Math.floor(Math.random() * 60 + 1)
    mseg3 = Math.floor(Math.random() * 60 + 1)
    mseg4 = Math.floor(Math.random() * 60 + 1)
    mseg5 = Math.floor(Math.random() * 60 + 1)
    mseg6 = Math.floor(Math.random() * 60 + 1)

    loteriaM = loteria.toUpperCase()
    titleLoteriaNacional.innerHTML = `PALPITE DA ${loteriaM}`
    nConcursoPalpite.innerHTML = `CONCURSO ${concurso + 1}`
    diaSorteioPalpite.innerHTML = `SORTEIO DIA ${pSorteio}`
    pEstimadoPalpite.innerHTML =  `R$ ${valorEstimado}`

    palpiteN1.innerHTML = `${mseg1}`
    palpiteN2.innerHTML = `${mseg2}`
    palpiteN3.innerHTML = `${mseg3}`
    palpiteN4.innerHTML = `${mseg4}`
    palpiteN5.innerHTML = `${mseg5}`
    palpiteN6.innerHTML = `${mseg6}`
    loteriaMinusc = loteriaM.toLowerCase()

    rPalpiteMega.innerHTML = `Os nossos palpites da <strong>${loteriaMinusc}</strong> são baseado no horário atual, a previsão não é certo, mas recebemos depoimentos de acerto na quadra, se aparecer um jogo do palpite da <strong>${loteriaMinusc}</strong> que faça sentir confiança, não perca a oportunidade e aposte, lembre-se que, com apenas um jogo, de seis números, você pode ser o vencedor e faturar os <strong>R$ ${valorEstimado}</strong> de reais da mega-sena <strong>${concursoP+1}</strong> do dia <strong>${pSorteio}</strong>.`
    /*FIM palpite da mega sena */
    pConcursoP.innerHTML = `Palpite da Mega-sena ${pConcursoPalpite} dia ${pSorteio} - APOSTE`

    

    descAbaixoPalpite.innerHTML = `<p style="text-align: center; margin: 0px;"><i>Veja os números gerados pra você, caso não goste, clique em </i><strong>"GERAR NOVOS NÚMEROS"</strong></p>`
    titleVejaOPalpite.innerHTML = `Palpite da da <strong>${loteriaMinusc}</strong>: Critérios.`

    ImagemFundoP.innerHTML = `<a href="/resultados/mega-sena/resultado-mega-sena-${concurso}.html" target="_blank" rel="follow"><img class="imagemDoPalpite" src="/imagens/palpites/mega-sena/sorteio-mega-sena-${concurso}.jpeg" alt="sorteio da mega sena ${concurso}"></a>`

    tiraStrong = sTPalpite.innerHTML.replace(/<strong>/gi, "")
    tiraStrongComplete = tiraStrong.replace(/</gi, "")
    contentSite = `Palpite da ${loteriaMinusc}, concurso ${concursoP+1}, prêmio estimado em R$ ${valorEstimado} de reais, quem sabe a sorte não bate em sua porta, veja os palpites.`
    sTPalpite.innerHTML = `Sorteio da mega-sena anterior <strong>${concurso}</strong>, ${acumulaOuGanhaP}, próximo sorteio da mega sena, o valor estimado é <strong>R$ ${valorEstimado}</strong> de reais. Quem sabe a sorte não bate em sua porte: <a href="http://bit.ly/aposte-online" target="_blank" rel="nofollow">APOSTE ONLINE</a> hoje mesmo.`


    enderecoLink = window.location.href
    titleTwitterEFacebook = pConcursoP.innerHTML
    descricaoTwitterEFacebook = sTPalpite.innerHTML
    titleContent = `Mega de Hoje - Resultados da Loteria Nacional`
    metadesc.innerHTML = `<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  
    
    <link rel="canonical" href="${enderecoLink}" />
    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${titleTwitterEFacebook}">
    <meta name="twitter:description" content="${tiraStrongComplete}">
    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${titleContent}">
    <meta property="og:title" content="${contentSite}">
    <meta property="og:description" content="${contentSite}">
    <meta property="og:url" content="${enderecoLink}"> 
    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">`
    carregarMeta.innerHTML = `<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  
    
    <link rel="canonical" href="${enderecoLink}" />
    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${titleTwitterEFacebook}">
    <meta name="twitter:description" content="${tiraStrongComplete}">
    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${titleContent}">
    <meta property="og:title" content="${contentSite}">
    <meta property="og:description" content="${contentSite}">
    <meta property="og:url" content="${enderecoLink}"> 
    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    `
    
    
    
    
    /* Produção de MetaTag mega-sena */


    
    

    var enviarResultAnterior = rMegaA.innerHTML

    res.innerHTML = `${enviarResultAnterior}`

    return enviarResultAnterior

    

    
    
    /*Para o blog */
    
    
}


function megaSena2431() {
    
    /* 
    1 - Segunda
    2 - terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
    7 - Domingo */
    loteria = "Mega Sena"
    siteImage = "https://megadehoje.com"

    diaDaSemana = "3"  
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
    081122252636
    concurso = 2431
    data = "22/11/2021"
    bola01 = "08"
    nS1 = bola01
    bola02 = "11"
    nS2 = bola02
    bola03 = "22"
    nS3 = bola03
    bola04 = "25"
    nS4 = bola04
    bola05 = "26"
    nS5 = bola05
    bola06 = "36"
    nS6 = bola06  
    cMegaPassado = concurso
    concursoP = concurso
    dataP = data
    concursoEmNumber = Number(concurso.value)
    pConcursoPalpite = concurso + 1
    
    let premioSenaEstimado = "3.000.000,00"
    let ganhadorSena = "0"
    let premioSena = "0"
    let ganhadorQuina = "46"
    const premioQuina = "35.595,61"
    const ganhadorQuadra = "2.988"
    const premioQuadra = "782,84"
    let acumulaOuGanhaP = ""
    let premioSenaEstimadoP = premioSenaEstimado
    /*Premio Estimado e data Proximo Concurso */
    if (ganhadorSena != "0") {
        acumulaOuGanhaP = `${ganhadorSena} sortudos(as)`
        acumulaOuGanha.innerHTML = `<div class="seGanhador" id="acumulaOuGanha">${ganhadorSena} Ganhador(es)</div>`
        
        
    } else {
        acumulaOuGanhaP = "ACUMULOU!!"
        respostaPalpiteAcumulado = "como ninguém acertou as 06 dezenas, o prêmio estimado vai para"
        acumulaOuGanha.innerHTML = `<div class="seAcumula" id="acumulaOuGanha">ACUMULOU!!</div>`
    }

    
    rAcumulouPassado = acumulaOuGanhaP

    
    

    /* Proximo Sorteio - Inserir Valores */

    pSorteio = " 27/11/2021"
    valorEstimado = "7.000.000,00"
    
    
    concursoData.innerHTML = `CONCURSO ${concurso} - DATA ${data}`
    qtdSena.innerHTML = `${ganhadorSena} Pessoas`
    pSena.innerHTML = `R$ ${premioSena}`

    qtdQuina.innerHTML = `${ganhadorQuina} Pessoas`
    pQuina.innerHTML = `R$ ${premioQuina}`

    qtdQuadra.innerHTML = `${ganhadorQuadra} Pessoas`
    pQuadra.innerHTML = `R$ ${premioQuadra}`
   



    
    /* Novas variaveis para descrever concurso anterior */
    ms01.innerHTML = `${bola01}`
    ms02.innerHTML = `${bola02}`
    ms03.innerHTML = `${bola03}`
    ms04.innerHTML = `${bola04}`
    ms05.innerHTML = `${bola05}`
    ms06.innerHTML = `${bola06}`
    proximoSorteio.innerHTML = `Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`

    
    TimeRanges.innerHTML = ` `

    tConcurso.innerHTML = `Resultado Mega-sena ${concurso} dia ${data} - ${dataMega}`
    sTConcuros.innerHTML = `<strong >${acumulaOuGanhaP}</strong>. Sorteio da mega-sena aconteceu hoje, ${dataMega}, com prêmio estimado em R$ ${premioSenaEstimado} de reais, confira agora mesmo o resultado da mega-sena <strong>${concurso}</strong>.`
    
    siteNaImagem.innerHTML = `<a href="megadehoje.com" target="_blank" rel="follow">megadehoje.com</a>`
    nomeDoSorteioImage.innerHTML = `${loteria}`
    numeroDoSorteioImage.innerHTML = `Concurso ${concurso}`
    diaEDataSorteioImage.innerHTML = `${dataMega}, ${data}`
    valorEstimadoImage.innerHTML = `Estimado em R$ ${premioSenaEstimado}`

    rMegaA.innerHTML = `É isso mesmo, saiu o resultado, o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram ${ganhadorQuadra} apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`
    titleVejaOResultado.innerHTML = `Concurso ${concurso} da mega-sena: Veja o resultado final.`
    

    comoJogarNaMegaSena.innerHTML = `A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha). <a href="http://bit.ly/aposte-online" target="_blank"><button>APOSTE ONLINE</button></a>`

    /*palpite da mega-sena */
    mseg1 = Math.floor(Math.random() * 60 + 1)
    mseg2 = Math.floor(Math.random() * 60 + 1)
    mseg3 = Math.floor(Math.random() * 60 + 1)
    mseg4 = Math.floor(Math.random() * 60 + 1)
    mseg5 = Math.floor(Math.random() * 60 + 1)
    mseg6 = Math.floor(Math.random() * 60 + 1)

    loteriaM = loteria.toUpperCase()
    titleLoteriaNacional.innerHTML = `PALPITE DA ${loteriaM}`
    nConcursoPalpite.innerHTML = `CONCURSO ${concurso + 1}`
    diaSorteioPalpite.innerHTML = `SORTEIO DIA ${pSorteio}`
    pEstimadoPalpite.innerHTML =  `R$ ${valorEstimado}`

    palpiteN1.innerHTML = `${mseg1}`
    palpiteN2.innerHTML = `${mseg2}`
    palpiteN3.innerHTML = `${mseg3}`
    palpiteN4.innerHTML = `${mseg4}`
    palpiteN5.innerHTML = `${mseg5}`
    palpiteN6.innerHTML = `${mseg6}`
    loteriaMinusc = loteriaM.toLowerCase()

    rPalpiteMega.innerHTML = `Os nossos palpites da <strong>${loteriaMinusc}</strong> são baseado no horário atual, a previsão não é certo, mas recebemos depoimentos de acerto na quadra, se aparecer um jogo do palpite da <strong>${loteriaMinusc}</strong> que faça sentir confiança, não perca a oportunidade e aposte, lembre-se que, com apenas um jogo, de seis números, você pode ser o vencedor e faturar os <strong>R$ ${valorEstimado}</strong> de reais da mega-sena <strong>${concursoP+1}</strong> do dia <strong>${pSorteio}</strong>.`
    /*FIM palpite da mega sena */
    pConcursoP.innerHTML = `Palpite da Mega-sena ${pConcursoPalpite} dia ${pSorteio} - APOSTE`

    

    descAbaixoPalpite.innerHTML = `<p style="text-align: center; margin: 0px;"><i>Veja os números gerados pra você, caso não goste, clique em </i><strong>"GERAR NOVOS NÚMEROS"</strong></p>`
    titleVejaOPalpite.innerHTML = `Palpite da da <strong>${loteriaMinusc}</strong>: Critérios.`

    ImagemFundoP.innerHTML = `<a href="/resultados/mega-sena/resultado-mega-sena-${concurso}.html" target="_blank" rel="follow"><img class="imagemDoPalpite" src="/imagens/palpites/mega-sena/sorteio-mega-sena-${concurso}.jpeg" alt="sorteio da mega sena ${concurso}"></a>`

    tiraStrong = sTPalpite.innerHTML.replace(/<strong>/gi, "")
    tiraStrongComplete = tiraStrong.replace(/</gi, "")
    contentSite = `Palpite da ${loteriaMinusc}, concurso ${concursoP+1}, prêmio estimado em R$ ${valorEstimado} de reais, quem sabe a sorte não bate em sua porta, veja os palpites.`
    sTPalpite.innerHTML = `Sorteio da mega-sena anterior <strong>${concurso}</strong>, ${acumulaOuGanhaP}, próximo sorteio da mega sena, o valor estimado é <strong>R$ ${valorEstimado}</strong> de reais. Quem sabe a sorte não bate em sua porte: <a href="http://bit.ly/aposte-online" target="_blank" rel="nofollow">APOSTE ONLINE</a> hoje mesmo.`


    enderecoLink = window.location.href
    titleTwitterEFacebook = pConcursoP.innerHTML
    descricaoTwitterEFacebook = sTPalpite.innerHTML
    titleContent = `Mega de Hoje - Resultados da Loteria Nacional`
    metadesc.innerHTML = `<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  
    
    <link rel="canonical" href="${enderecoLink}" />
    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${titleTwitterEFacebook}">
    <meta name="twitter:description" content="${tiraStrongComplete}">
    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${titleContent}">
    <meta property="og:title" content="${contentSite}">
    <meta property="og:description" content="${contentSite}">
    <meta property="og:url" content="${enderecoLink}"> 
    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">`
    carregarMeta.innerHTML = `<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  
    
    <link rel="canonical" href="${enderecoLink}" />
    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${titleTwitterEFacebook}">
    <meta name="twitter:description" content="${tiraStrongComplete}">
    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${titleContent}">
    <meta property="og:title" content="${contentSite}">
    <meta property="og:description" content="${contentSite}">
    <meta property="og:url" content="${enderecoLink}"> 
    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    `
    
    
    
    
    /* Produção de MetaTag mega-sena */


    
    

    var enviarResultAnterior = rMegaA.innerHTML

    res.innerHTML = `${enviarResultAnterior}`

    return enviarResultAnterior

    

    
    
    /*Para o blog */
    
    
}
function megaSena2430() {
    
    /* 
    1 - Segunda
    2 - terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
    7 - Domingo */
    loteria = "Mega Sena"
    siteImage = "https://megadehoje.com"

    diaDaSemana = "6"  
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
    
    concurso = 2430
    data = "20/11/2021"
    bola01 = "19"
    nS1 = bola01
    bola02 = "26"
    nS2 = bola02
    bola03 = "39"
    nS3 = bola03
    bola04 = "45"
    nS4 = bola04
    bola05 = "46"
    nS5 = bola05
    bola06 = "56"
    nS6 = bola06  
    cMegaPassado = concurso
    concursoP = concurso
    dataP = data
    concursoEmNumber = Number(concurso.value)
    pConcursoPalpite = concurso + 1
    
    let premioSenaEstimado = "39.690.444,50"
    let ganhadorSena = "1"
    let premioSena = "39.690.444,50"
    let ganhadorQuina = "37"
    const premioQuina = "96.493,78"
    const ganhadorQuadra = "4.109"
    const premioQuadra = "1.241,27"
    let acumulaOuGanhaP = ""
    let premioSenaEstimadoP = premioSenaEstimado
    /*Premio Estimado e data Proximo Concurso */
    if (ganhadorSena != "0") {
        acumulaOuGanhaP = `${ganhadorSena} sortudos(as)`
        acumulaOuGanha.innerHTML = `<div class="seGanhador" id="acumulaOuGanha">${ganhadorSena} Ganhador(es)</div>`
        
        
    } else {
        acumulaOuGanhaP = "ACUMULOU!!"
        respostaPalpiteAcumulado = "como ninguém acertou as 06 dezenas, o prêmio estimado vai para"
        acumulaOuGanha.innerHTML = `<div class="seAcumula" id="acumulaOuGanha">ACUMULOU!!</div>`
    }

    
    rAcumulouPassado = acumulaOuGanhaP

    

    /* Proximo Sorteio - Inserir Valores */

    pSorteio = " 24/11/2021"
    valorEstimado = "3.000.000,00"
    
    
    concursoData.innerHTML = `CONCURSO ${concurso} - DATA ${data}`
    qtdSena.innerHTML = `${ganhadorSena} Pessoas`
    pSena.innerHTML = `R$ ${premioSena}`

    qtdQuina.innerHTML = `${ganhadorQuina} Pessoas`
    pQuina.innerHTML = `R$ ${premioQuina}`

    qtdQuadra.innerHTML = `${ganhadorQuadra} Pessoas`
    pQuadra.innerHTML = `R$ ${premioQuadra}`


    
    /* Novas variaveis para descrever concurso anterior */
    ms01.innerHTML = `${bola01}`
    ms02.innerHTML = `${bola02}`
    ms03.innerHTML = `${bola03}`
    ms04.innerHTML = `${bola04}`
    ms05.innerHTML = `${bola05}`
    ms06.innerHTML = `${bola06}`
    proximoSorteio.innerHTML = `Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`

   

    TimeRanges.innerHTML = ` `

    tConcurso.innerHTML = `Resultado Mega-sena ${concurso} dia ${data} - ${dataMega}`
    sTConcuros.innerHTML = `<strong >${acumulaOuGanhaP}</strong>. Sorteio da mega-sena aconteceu hoje, ${dataMega}, com prêmio estimado em R$ ${premioSenaEstimado} de reais, confira agora mesmo o resultado da mega-sena <strong>${concurso}</strong>.`
    
    siteNaImagem.innerHTML = `<a href="megadehoje.com" target="_blank" rel="follow">megadehoje.com</a>`
    nomeDoSorteioImage.innerHTML = `${loteria}`
    numeroDoSorteioImage.innerHTML = `Concurso ${concurso}`
    diaEDataSorteioImage.innerHTML = `${dataMega}, ${data}`
    valorEstimadoImage.innerHTML = `Estimado em R$ ${premioSenaEstimado}`

    rMegaA.innerHTML = `É isso mesmo, saiu o resultado, o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram ${ganhadorQuadra} apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`
    titleVejaOResultado.innerHTML = `Concurso ${concurso} da mega-sena: Veja o resultado final.`
    

    comoJogarNaMegaSena.innerHTML = `A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha). <a href="http://bit.ly/aposte-online" target="_blank"><button>APOSTE ONLINE</button></a>`

    /*palpite da mega-sena */
    mseg1 = Math.floor(Math.random() * 60 + 1)
    mseg2 = Math.floor(Math.random() * 60 + 1)
    mseg3 = Math.floor(Math.random() * 60 + 1)
    mseg4 = Math.floor(Math.random() * 60 + 1)
    mseg5 = Math.floor(Math.random() * 60 + 1)
    mseg6 = Math.floor(Math.random() * 60 + 1)

    loteriaM = loteria.toUpperCase()
    titleLoteriaNacional.innerHTML = `PALPITE DA ${loteriaM}`
    nConcursoPalpite.innerHTML = `CONCURSO ${concurso + 1}`
    diaSorteioPalpite.innerHTML = `SORTEIO DIA ${pSorteio}`
    pEstimadoPalpite.innerHTML =  `R$ ${valorEstimado}`

    palpiteN1.innerHTML = `${mseg1}`
    palpiteN2.innerHTML = `${mseg2}`
    palpiteN3.innerHTML = `${mseg3}`
    palpiteN4.innerHTML = `${mseg4}`
    palpiteN5.innerHTML = `${mseg5}`
    palpiteN6.innerHTML = `${mseg6}`
    loteriaMinusc = loteriaM.toLowerCase()

    rPalpiteMega.innerHTML = `Os nossos palpites da <strong>${loteriaMinusc}</strong> são baseado no horário atual, a previsão não é certo, mas recebemos depoimentos de acerto na quadra, se aparecer um jogo do palpite da <strong>${loteriaMinusc}</strong> que faça sentir confiança, não perca a oportunidade e aposte, lembre-se que, com apenas um jogo, de seis números, você pode ser o vencedor e faturar os <strong>R$ ${valorEstimado}</strong> de reais da mega-sena <strong>${concursoP+1}</strong> do dia <strong>${pSorteio}</strong>.`
    /*FIM palpite da mega sena */
    pConcursoP.innerHTML = `Palpite da Mega-sena ${pConcursoPalpite} dia ${pSorteio} - APOSTE`

    sTPalpite.innerHTML = `Sorteio da mega-sena anterior <strong>${concurso}</strong>, ${acumulaOuGanhaP}, próximo sorteio da mega sena, o valor estimado é <strong>R$ ${valorEstimado}</strong> de reais. Quem sabe a sorte não bate em sua porte: <a href="http://bit.ly/aposte-online" target="_blank" rel="nofollow">APOSTE ONLINE</a> hoje mesmo.`

    descAbaixoPalpite.innerHTML = `<p style="text-align: center; margin: 0px;"><i>Veja os números gerados pra você, caso não goste, clique em </i><strong>"GERAR NOVOS NÚMEROS"</strong></p>`
    titleVejaOPalpite.innerHTML = `Palpite da da <strong>${loteriaMinusc}</strong>: Critérios.`

    ImagemFundoP.innerHTML = `<a href="/resultados/mega-sena/resultado-mega-sena-${concurso}.html" target="_blank" rel="follow"><img class="imagemDoPalpite" src="/imagens/palpites/mega-sena/sorteio-mega-sena-${concurso}.jpeg" alt="sorteio da mega sena ${concurso}"></a>`

    tiraStrong = sTPalpite.innerHTML.replace(/<strong>/gi, "")
    tiraStrongComplete = tiraStrong.replace(/</gi, "")
    contentSite = `Palpite da ${loteriaMinusc}, concurso ${concursoP+1}, prêmio estimado em R$ ${valorEstimado} de reais, quem sabe a sorte não bate em sua porta, veja os palpites.`

    enderecoLink = window.location.href
    titleTwitterEFacebook = pConcursoP.innerHTML
    descricaoTwitterEFacebook = sTPalpite.innerHTML
    titleContent = `Mega de Hoje - Resultados da Loteria Nacional`
    metadesc.innerHTML = `<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  
    
    <link rel="canonical" href="${enderecoLink}" />
    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${titleTwitterEFacebook}">
    <meta name="twitter:description" content="${tiraStrongComplete}">
    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${titleContent}">
    <meta property="og:title" content="${contentSite}">
    <meta property="og:description" content="${contentSite}">
    <meta property="og:url" content="${enderecoLink}"> 
    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">`
    carregarMeta.innerHTML = `<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  
    
    <link rel="canonical" href="${enderecoLink}" />
    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${titleTwitterEFacebook}">
    <meta name="twitter:description" content="${tiraStrongComplete}">
    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${titleContent}">
    <meta property="og:title" content="${contentSite}">
    <meta property="og:description" content="${contentSite}">
    <meta property="og:url" content="${enderecoLink}"> 
    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    `
    
    
    
    
    /* Produção de MetaTag mega-sena */


    
    

    var enviarResultAnterior = rMegaA.innerHTML

    res.innerHTML = `${enviarResultAnterior}`

    return enviarResultAnterior

    

    
    
    /*Para o blog */
    
    
}





function megaSena2429() {
    
    /* 
    1 - Segunda
    2 - terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
    7 - Domingo */
    loteria = "Mega Sena"
    siteImage = "https://megadehoje.com"

    diaDaSemana = "6"  
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
    
    concurso = 2429
    data = "17/11/2021"
    bola01 = "11"
    nS1 = bola01
    bola02 = "37"
    nS2 = bola02
    bola03 = "53"
    nS3 = bola03
    bola04 = "55"
    nS4 = bola04
    bola05 = "56"
    nS5 = bola05
    bola06 = "60"
    nS6 = bola06  
    cMegaPassado = concurso
    concursoP = concurso
    dataP = data
    concursoEmNumber = Number(concurso.value)
    pConcursoPalpite = concurso + 1
    
    let premioSenaEstimado = "7.284.779,96"
    let ganhadorSena = "0"
    let premioSena = "0"
    let ganhadorQuina = "31"
    const premioQuina = "63.435,43"
    const ganhadorQuadra = "2.462"
    const premioQuadra = "1.141,05"
    let acumulaOuGanhaP = ""
    let premioSenaEstimadoP = premioSenaEstimado
    /*Premio Estimado e data Proximo Concurso */
    if (ganhadorSena != "0") {
        acumulaOuGanhaP = `${ganhadorSena} sortudos(as)`
        acumulaOuGanha.innerHTML = `<div class="seGanhador" id="acumulaOuGanha">${ganhadorSena} Ganhador(es)</div>`
        
        
    } else {
        acumulaOuGanhaP = "ACUMULOU!!"
        respostaPalpiteAcumulado = "como ninguém acertou as 06 dezenas, o prêmio estimado vai para"
        acumulaOuGanha.innerHTML = `<div class="seAcumula" id="acumulaOuGanha">ACUMULOU!!</div>`
    }

    
    rAcumulouPassado = acumulaOuGanhaP

    

    /* Proximo Sorteio - Inserir Valores */

    pSorteio = " 20/11/2021"
    valorEstimado = "38.000.000,00"
    
    
    concursoData.innerHTML = `CONCURSO ${concurso} - DATA ${data}`
    qtdSena.innerHTML = `${ganhadorSena} Pessoas`
    pSena.innerHTML = `R$ ${premioSena}`

    qtdQuina.innerHTML = `${ganhadorQuina} Pessoas`
    pQuina.innerHTML = `R$ ${premioQuina}`

    qtdQuadra.innerHTML = `${ganhadorQuadra} Pessoas`
    pQuadra.innerHTML = `R$ ${premioQuadra}`


    
    /* Novas variaveis para descrever concurso anterior */
    ms01.innerHTML = `${bola01}`
    ms02.innerHTML = `${bola02}`
    ms03.innerHTML = `${bola03}`
    ms04.innerHTML = `${bola04}`
    ms05.innerHTML = `${bola05}`
    ms06.innerHTML = `${bola06}`
    proximoSorteio.innerHTML = `Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`

   

    TimeRanges.innerHTML = ` `

    tConcurso.innerHTML = `Resultado Mega-sena ${concurso} dia ${data} - ${dataMega}`
    sTConcuros.innerHTML = `<strong >${acumulaOuGanhaP}</strong>. Sorteio da mega-sena aconteceu hoje, ${dataMega}, com prêmio estimado em R$ ${premioSenaEstimado} de reais, confira agora mesmo o resultado da mega-sena <strong>${concurso}</strong>.`
    
    siteNaImagem.innerHTML = `<a href="megadehoje.com" target="_blank" rel="follow">megadehoje.com</a>`
    nomeDoSorteioImage.innerHTML = `${loteria}`
    numeroDoSorteioImage.innerHTML = `Concurso ${concurso}`
    diaEDataSorteioImage.innerHTML = `${dataMega}, ${data}`
    valorEstimadoImage.innerHTML = `Estimado em R$ ${premioSenaEstimado}`

    rMegaA.innerHTML = `É isso mesmo, saiu o resultado, o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram ${ganhadorQuadra} apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`
    titleVejaOResultado.innerHTML = `Concurso ${concurso} da mega-sena: Veja o resultado final.`
    

    comoJogarNaMegaSena.innerHTML = `A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha). <a href="http://bit.ly/aposte-online" target="_blank"><button>APOSTE ONLINE</button></a>`

    /*palpite da mega-sena */
    mseg1 = Math.floor(Math.random() * 60 + 1)
    mseg2 = Math.floor(Math.random() * 60 + 1)
    mseg3 = Math.floor(Math.random() * 60 + 1)
    mseg4 = Math.floor(Math.random() * 60 + 1)
    mseg5 = Math.floor(Math.random() * 60 + 1)
    mseg6 = Math.floor(Math.random() * 60 + 1)

    loteriaM = loteria.toUpperCase()
    titleLoteriaNacional.innerHTML = `PALPITE DA ${loteriaM}`
    nConcursoPalpite.innerHTML = `CONCURSO ${concurso + 1}`
    diaSorteioPalpite.innerHTML = `SORTEIO DIA ${pSorteio}`
    pEstimadoPalpite.innerHTML =  `R$ ${valorEstimado}`

    palpiteN1.innerHTML = `${mseg1}`
    palpiteN2.innerHTML = `${mseg2}`
    palpiteN3.innerHTML = `${mseg3}`
    palpiteN4.innerHTML = `${mseg4}`
    palpiteN5.innerHTML = `${mseg5}`
    palpiteN6.innerHTML = `${mseg6}`
    loteriaMinusc = loteriaM.toLowerCase()

    rPalpiteMega.innerHTML = `Os nossos palpites da <strong>${loteriaMinusc}</strong> são baseado no horário atual, a previsão não é certo, mas recebemos depoimentos de acerto na quadra, se aparecer um jogo do palpite da <strong>${loteriaMinusc}</strong> que faça sentir confiança, não perca a oportunidade e aposte, lembre-se que, com apenas um jogo, de seis números, você pode ser o vencedor e faturar os <strong>R$ ${valorEstimado}</strong> de reais da mega-sena <strong>${concursoP+1}</strong> do dia <strong>${pSorteio}</strong>.`
    /*FIM palpite da mega sena */
    pConcursoP.innerHTML = `Palpite da Mega-sena ${pConcursoPalpite} dia ${pSorteio} - APOSTE`

    sTPalpite.innerHTML = `Sorteio da mega-sena anterior <strong>${concurso}</strong>, ${acumulaOuGanhaP}, próximo sorteio da mega sena, o valor estimado é <strong>R$ ${valorEstimado}</strong> de reais. Quem sabe a sorte não bate em sua porte: <a href="http://bit.ly/aposte-online" target="_blank" rel="nofollow">APOSTE ONLINE</a> hoje mesmo.`

    descAbaixoPalpite.innerHTML = `<p style="text-align: center; margin: 0px;"><i>Veja os números gerados pra você, caso não goste, clique em </i><strong>"GERAR NOVOS NÚMEROS"</strong></p>`
    titleVejaOPalpite.innerHTML = `Palpite da da <strong>${loteriaMinusc}</strong>: Critérios.`

    ImagemFundoP.innerHTML = `<a href="/resultados/mega-sena/resultado-mega-sena-${concurso}.html" target="_blank" rel="follow"><img class="imagemDoPalpite" src="/imagens/palpites/mega-sena/sorteio-mega-sena-${concurso}.jpeg" alt="sorteio da mega sena ${concurso}"></a>`

    tiraStrong = sTPalpite.innerHTML.replace(/<strong>/gi, "")
    tiraStrongComplete = tiraStrong.replace(/</gi, "")
    contentSite = `Palpite da ${loteriaMinusc}, concurso ${concursoP+1}, prêmio estimado em R$ ${valorEstimado} de reais, quem sabe a sorte não bate em sua porta, veja os palpites.`

    enderecoLink = window.location.href
    titleTwitterEFacebook = pConcursoP.innerHTML
    descricaoTwitterEFacebook = sTPalpite.innerHTML
    titleContent = `Mega de Hoje - Resultados da Loteria Nacional`
    carregarMeta.innerHTML = `<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  
    
    <link rel="canonical" href="${enderecoLink}" />
    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${titleTwitterEFacebook}">
    <meta name="twitter:description" content="${tiraStrongComplete}">
    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${titleContent}">
    <meta property="og:title" content="${contentSite}">
    <meta property="og:description" content="${contentSite}">
    <meta property="og:url" content="${enderecoLink}"> 
    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    `
    
    
    
    
    /* Produção de MetaTag mega-sena */


    
    

    var enviarResultAnterior = rMegaA.innerHTML

    res.innerHTML = `${enviarResultAnterior}`

    return enviarResultAnterior

    

    
    
    /*Para o blog */
    
    
}
function megaSena2428() {
    
    /* 
    1 - Segunda
    2 - terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
    7 - Domingo */
    loteria = "Mega Sena"
    siteImage = "https://megadehoje.com"

    diaDaSemana = "6"  
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
    
    concurso = 2428
    data = "13/11/2021"
    bola01 = "03"
    nS1 = bola01
    bola02 = "09"
    nS2 = bola02
    bola03 = "25"
    nS3 = bola03
    bola04 = "28"
    nS4 = bola04
    bola05 = "29"
    nS5 = bola05
    bola06 = "39"
    nS6 = bola06  
    cMegaPassado = concurso
    concursoP = concurso
    dataP = data
    concursoEmNumber = Number(concurso.value)
    pConcursoPalpite = concurso + 1
    
    premioSenaEstimado = "3.662.283,49"
    ganhadorSena = "0"
    premioSena = "0"
    ganhadorQuina = "50"
    premioQuina = "39.761,94"
    ganhadorQuadra = "4.168"
    premioQuadra = "681,41"
    acumulaOuGanhaP = ""
    premioSenaEstimadoP = premioSenaEstimado
    /*Premio Estimado e data Proximo Concurso */
    if (ganhadorSena != "0") {
        acumulaOuGanhaP = `${ganhadorSena} sortudos(as)`
        acumulaOuGanha.innerHTML = `<div class="seGanhador" id="acumulaOuGanha">${ganhadorSena} Ganhador(es)</div>`
        
        
    } else {
        acumulaOuGanhaP = "ACUMULOU!!"
        respostaPalpiteAcumulado = "como ninguém acertou as 06 dezenas, o prêmio estimado vai para"
        acumulaOuGanha.innerHTML = `<div class="seAcumula" id="acumulaOuGanha">ACUMULOU!!</div>`
    }

    
    rAcumulouPassado = acumulaOuGanhaP

    

    /* Proximo Sorteio - Inserir Valores */

    pSorteio = " 17/11/2021"
    valorEstimado = "8.000.000,00"
    
    
    concursoData.innerHTML = `CONCURSO ${concurso} - DATA ${data}`
    qtdSena.innerHTML = `${ganhadorSena} Pessoas`
    pSena.innerHTML = `R$ ${premioSena}`

    qtdQuina.innerHTML = `${ganhadorQuina} Pessoas`
    pQuina.innerHTML = `R$ ${premioQuina}`

    qtdQuadra.innerHTML = `${ganhadorQuadra} Pessoas`
    pQuadra.innerHTML = `R$ ${premioQuadra}`


    
    /* Novas variaveis para descrever concurso anterior */
    ms01.innerHTML = `${bola01}`
    ms02.innerHTML = `${bola02}`
    ms03.innerHTML = `${bola03}`
    ms04.innerHTML = `${bola04}`
    ms05.innerHTML = `${bola05}`
    ms06.innerHTML = `${bola06}`
    proximoSorteio.innerHTML = `Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`

   

    TimeRanges.innerHTML = ` `

    tConcurso.innerHTML = `Resultado Mega-sena ${concurso} dia ${data} - ${dataMega}`
    sTConcuros.innerHTML = `<strong >${acumulaOuGanhaP}</strong>. Sorteio da mega-sena aconteceu hoje, ${dataMega}, com prêmio estimado em R$ ${premioSenaEstimado} de reais, confira agora mesmo o resultado da mega-sena <strong>${concurso}</strong>.`
    
    siteNaImagem.innerHTML = `<a href="megadehoje.com" target="_blank" rel="follow">megadehoje.com</a>`
    nomeDoSorteioImage.innerHTML = `${loteria}`
    numeroDoSorteioImage.innerHTML = `Concurso ${concurso}`
    diaEDataSorteioImage.innerHTML = `${dataMega}, ${data}`
    valorEstimadoImage.innerHTML = `Estimado em R$ ${premioSenaEstimado}`

    rMegaA.innerHTML = `É isso mesmo, saiu o resultado, o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram ${ganhadorQuadra} apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`
    titleVejaOResultado.innerHTML = `Concurso ${concurso} da mega-sena: Veja o resultado final.`
    

    comoJogarNaMegaSena.innerHTML = `A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha). <a href="http://bit.ly/aposte-online" target="_blank"><button>APOSTE ONLINE</button></a>`

    /*palpite da mega-sena */
    mseg1 = Math.floor(Math.random() * 60 + 1)
    mseg2 = Math.floor(Math.random() * 60 + 1)
    mseg3 = Math.floor(Math.random() * 60 + 1)
    mseg4 = Math.floor(Math.random() * 60 + 1)
    mseg5 = Math.floor(Math.random() * 60 + 1)
    mseg6 = Math.floor(Math.random() * 60 + 1)

    loteriaM = loteria.toUpperCase()
    titleLoteriaNacional.innerHTML = `PALPITE DA ${loteriaM}`
    nConcursoPalpite.innerHTML = `CONCURSO ${concurso + 1}`
    diaSorteioPalpite.innerHTML = `SORTEIO DIA ${pSorteio}`
    pEstimadoPalpite.innerHTML =  `R$ ${valorEstimado}`

    palpiteN1.innerHTML = `${mseg1}`
    palpiteN2.innerHTML = `${mseg2}`
    palpiteN3.innerHTML = `${mseg3}`
    palpiteN4.innerHTML = `${mseg4}`
    palpiteN5.innerHTML = `${mseg5}`
    palpiteN6.innerHTML = `${mseg6}`
    loteriaMinusc = loteriaM.toLowerCase()

    rPalpiteMega.innerHTML = `Os nossos palpites da <strong>${loteriaMinusc}</strong> são baseado no horário atual, a previsão não é certo, mas recebemos depoimentos de acerto na quadra, se aparecer um jogo do palpite da <strong>${loteriaMinusc}</strong> que faça sentir confiança, não perca a oportunidade e aposte, lembre-se que, com apenas um jogo, de seis números, você pode ser o vencedor e faturar os <strong>R$ ${valorEstimado}</strong> de reais da mega-sena <strong>${concursoP+1}</strong> do dia <strong>${pSorteio}</strong>.`
    /*FIM palpite da mega sena */
    pConcursoP.innerHTML = `Palpite da Mega-sena ${pConcursoPalpite} dia ${pSorteio} - APOSTE`

    sTPalpite.innerHTML = `Sorteio da mega-sena anterior <strong>${concurso}</strong>, ${acumulaOuGanhaP}, próximo sorteio da mega sena, o valor estimado era de <strong>R$ ${valorEstimado}</strong> de reais. Quem sabe a sorte não bate em sua porte nesse sorteio de agora: <a href="http://bit.ly/aposte-online" target="_blank" rel="nofollow">APOSTE ONLINE</a> hoje mesmo.`

    descAbaixoPalpite.innerHTML = `<p style="text-align: center; margin: 0px;"><i>Veja os números gerados pra você, caso não goste, clique em </i><strong>"GERAR NOVOS NÚMEROS"</strong></p>`
    titleVejaOPalpite.innerHTML = `Palpite da da <strong>${loteriaMinusc}</strong>: Critérios.`

    ImagemFundoP.innerHTML = `<a href="/resultados/mega-sena/resultado-mega-sena-${concurso}.html" target="_blank" rel="follow"><img class="imagemDoPalpite" src="/imagens/palpites/mega-sena/sorteio-mega-sena-${concurso}.jpeg" alt="sorteio da mega sena ${concurso}"></a>`

    tiraStrong = sTPalpite.innerHTML.replace(/<strong>/gi, "")
    tiraStrongComplete = tiraStrong.replace(/</gi, "")
    contentSite = `Palpite da ${loteriaMinusc}, concurso ${concursoP+1}, prêmio estimado em R$ ${valorEstimado} de reais, quem sabe a sorte não bate em sua porta, veja os palpites.`

    enderecoLink = window.location.href
    titleTwitterEFacebook = pConcursoP.innerHTML
    descricaoTwitterEFacebook = sTPalpite.innerHTML
    titleContent = `Mega de Hoje - Resultados da Loteria Nacional`
    carregarMeta.innerHTML = `<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  
    
    <link rel="canonical" href="${enderecoLink}" />
    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${titleTwitterEFacebook}">
    <meta name="twitter:description" content="${tiraStrongComplete}">
    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${titleContent}">
    <meta property="og:title" content="${contentSite}">
    <meta property="og:description" content="${contentSite}">
    <meta property="og:url" content="${enderecoLink}"> 
    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    `
    
    
    
    
    /* Produção de MetaTag mega-sena */


    
    

    var enviarResultAnterior = rMegaA.innerHTML

    res.innerHTML = `${enviarResultAnterior}`

    return enviarResultAnterior

    

    
    
    /*Para o blog */
    
    
}
function megaSena2427() {
    
    /* 
    1 - Segunda
    2 - terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
    7 - Domingo */
    loteria = "Mega Sena"
    siteImage = "https://megadehoje.com"

    diaDaSemana = "3"  
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
    
    concurso = 2427
    data = "10/11/2021"
    bola01 = "03"
    nS1 = bola01
    bola02 = "19"
    nS2 = bola02
    bola03 = "25"
    nS3 = bola03
    bola04 = "37"
    nS4 = bola04
    bola05 = "44"
    nS5 = bola05
    bola06 = "56"
    nS6 = bola06  
    cMegaPassado = concurso
    concursoP = concurso
    dataP = data
    concursoEmNumber = Number(concurso.value)
    pConcursoPalpite = concurso + 1
    
    premioSenaEstimado = "90.907.066,96"
    ganhadorSena = "5"
    premioSena = "18.181.413,39"
    ganhadorQuina = "680"
    premioQuina = "11.418,47"
    ganhadorQuadra = "19557"
    premioQuadra = "567,17"
    acumulaOuGanhaP = ""
    premioSenaEstimadoP = premioSenaEstimado
    /*Premio Estimado e data Proximo Concurso */
    if (ganhadorSena != "0") {
        acumulaOuGanhaP = `${ganhadorSena} sortudos(as)`
        acumulaOuGanha.innerHTML = `<div class="seGanhador" id="acumulaOuGanha">${ganhadorSena} Ganhador(es)</div>`
        
        
    } else {
        acumulaOuGanhaP = "ACUMULOU!!"
        respostaPalpiteAcumulado = "como ninguém acertou as 06 dezenas, o prêmio estimado vai para"
        //acumulaOuGanha.innerHTML = `<div class="seAcumula" id="acumulaOuGanha">ACUMULOU!!</div>`
    }

    
    rAcumulouPassado = acumulaOuGanhaP

    

    /* Proximo Sorteio - Inserir Valores */

    pSorteio = " 13/11/2021"
    valorEstimado = "3.000.000,00"
    
    
    concursoData.innerHTML = `CONCURSO ${concurso} - DATA ${data}`
    qtdSena.innerHTML = `${ganhadorSena} Pessoas`
    pSena.innerHTML = `R$ ${premioSena}`

    qtdQuina.innerHTML = `${ganhadorQuina} Pessoas`
    pQuina.innerHTML = `R$ ${premioQuina}`

    qtdQuadra.innerHTML = `${ganhadorQuadra} Pessoas`
    pQuadra.innerHTML = `R$ ${premioQuadra}`


    
    /* Novas variaveis para descrever concurso anterior */
    ms01.innerHTML = `${bola01}`
    ms02.innerHTML = `${bola02}`
    ms03.innerHTML = `${bola03}`
    ms04.innerHTML = `${bola04}`
    ms05.innerHTML = `${bola05}`
    ms06.innerHTML = `${bola06}`
    proximoSorteio.innerHTML = `Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`

   

    TimeRanges.innerHTML = ` `

    tConcurso.innerHTML = `Resultado Mega-sena ${concurso} dia ${data} - ${dataMega}`
    sTConcuros.innerHTML = `<strong >${acumulaOuGanhaP}</strong>. Sorteio da mega-sena aconteceu hoje, ${dataMega}, com prêmio estimado em R$ ${premioSenaEstimado} de reais, confira agora mesmo o resultado da mega-sena <strong>${concurso}</strong>.`
    
    siteNaImagem.innerHTML = `<a href="megadehoje.com" target="_blank" rel="follow">megadehoje.com</a>`
    nomeDoSorteioImage.innerHTML = `${loteria}`
    numeroDoSorteioImage.innerHTML = `Concurso ${concurso}`
    diaEDataSorteioImage.innerHTML = `${dataMega}, ${data}`
    valorEstimadoImage.innerHTML = `Estimado em R$ ${premioSenaEstimado}`

    rMegaA.innerHTML = `É isso mesmo, saiu o resultado, o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram ${ganhadorQuadra} apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`
    titleVejaOResultado.innerHTML = `Concurso ${concurso} da mega-sena: Veja o resultado final.`
    

    comoJogarNaMegaSena.innerHTML = `A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha). <a href="http://bit.ly/aposte-online" target="_blank"><button>APOSTE ONLINE</button></a>`

    /*palpite da mega-sena */
    mseg1 = Math.floor(Math.random() * 60 + 1)
    mseg2 = Math.floor(Math.random() * 60 + 1)
    mseg3 = Math.floor(Math.random() * 60 + 1)
    mseg4 = Math.floor(Math.random() * 60 + 1)
    mseg5 = Math.floor(Math.random() * 60 + 1)
    mseg6 = Math.floor(Math.random() * 60 + 1)

    loteriaM = loteria.toUpperCase()
    titleLoteriaNacional.innerHTML = `PALPITE DA ${loteriaM}`
    nConcursoPalpite.innerHTML = `CONCURSO ${concurso + 1}`
    diaSorteioPalpite.innerHTML = `SORTEIO DIA ${pSorteio}`
    pEstimadoPalpite.innerHTML =  `R$ ${valorEstimado}`

    palpiteN1.innerHTML = `${mseg1}`
    palpiteN2.innerHTML = `${mseg2}`
    palpiteN3.innerHTML = `${mseg3}`
    palpiteN4.innerHTML = `${mseg4}`
    palpiteN5.innerHTML = `${mseg5}`
    palpiteN6.innerHTML = `${mseg6}`
    loteriaMinusc = loteriaM.toLowerCase()

    rPalpiteMega.innerHTML = `Os nossos palpites da <strong>${loteriaMinusc}</strong> são baseado no horário atual, a previsão não é certo, mas recebemos depoimentos de acerto na quadra, se aparecer um jogo do palpite da <strong>${loteriaMinusc}</strong> que faça sentir confiança, não perca a oportunidade e aposte, lembre-se que, com apenas um jogo, de seis números, você pode ser o vencedor e faturar os <strong>R$ ${valorEstimado}</strong> de reais da mega-sena <strong>${concursoP+1}</strong> do dia <strong>${pSorteio}</strong>.`
    /*FIM palpite da mega sena */
    pConcursoP.innerHTML = `Palpite da Mega-sena ${pConcursoPalpite} dia ${pSorteio} - APOSTE`

    sTPalpite.innerHTML = `Sorteio da mega-sena anterior <strong>${concurso}</strong>, ${acumulaOuGanhaP}, próximo sorteio da mega sena, o valor estimado é <strong>R$ ${valorEstimado}</strong> de reais. Quem sabe a sorte não bate em sua porte: <a href="http://bit.ly/aposte-online" target="_blank" rel="nofollow">APOSTE ONLINE</a> hoje mesmo.`

    descAbaixoPalpite.innerHTML = `<p style="text-align: center; margin: 0px;"><i>Veja os números gerados pra você, caso não goste, clique em </i><strong>"GERAR NOVOS NÚMEROS"</strong></p>`
    titleVejaOPalpite.innerHTML = `Palpite da da <strong>${loteriaMinusc}</strong>: Critérios.`

    ImagemFundoP.innerHTML = `<a href="/resultados/mega-sena/resultado-mega-sena-${concurso}.html" target="_blank" rel="follow"><img class="imagemDoPalpite" src="/imagens/palpites/mega-sena/sorteio-mega-sena-${concurso}.jpeg" alt="sorteio da mega sena ${concurso}"></a>`

    tiraStrong = sTPalpite.innerHTML.replace(/<strong>/gi, "")
    tiraStrongComplete = tiraStrong.replace(/</gi, "")
    contentSite = `Palpite da ${loteriaMinusc}, concurso ${concursoP+1}, prêmio estimado em R$ ${valorEstimado} de reais, quem sabe a sorte não bate em sua porta, veja os palpites.`

    enderecoLink = window.location.href
    titleTwitterEFacebook = pConcursoP.innerHTML
    descricaoTwitterEFacebook = sTPalpite.innerHTML
    titleContent = `Mega de Hoje - Resultados da Loteria Nacional`
    carregarMeta.innerHTML = `<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  
    
    <link rel="canonical" href="${enderecoLink}" />
    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${titleTwitterEFacebook}">
    <meta name="twitter:description" content="${tiraStrongComplete}">
    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${titleContent}">
    <meta property="og:title" content="${contentSite}">
    <meta property="og:description" content="${contentSite}">
    <meta property="og:url" content="${enderecoLink}"> 
    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    `
    
    
    
    
    /* Produção de MetaTag mega-sena */


    
    

    var enviarResultAnterior = rMegaA.innerHTML

    res.innerHTML = `${enviarResultAnterior}`

    return enviarResultAnterior

    

    
    
    /*Para o blog */
    
    
}
function megaSena2426() {
    
    /* 
    1 - Segunda
    2 - terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
    7 - Domingo */
    loteria = "Mega Sena"
    siteImage = "https://megadehoje.com"

    diaDaSemana = "6"  
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
    
    concurso = 2426
    data = "06/11/2021"
    bola01 = "05"
    nS1 = bola01
    bola02 = "11"
    nS2 = bola02
    bola03 = "24"
    nS3 = bola03
    bola04 = "27"
    nS4 = bola04
    bola05 = "32"
    nS5 = bola05
    bola06 = "57"
    nS6 = bola06  
    cMegaPassado = concurso
    concursoP = concurso
    dataP = data
    concursoEmNumber = Number(concurso.value)
    pConcursoPalpite = concurso + 1

    premioSenaEstimado = "76.603.928,34"
    ganhadorSena = "0"
    premioSena = "ACUMULOU!!"
    ganhadorQuina = "249"
    premioQuina = "25.132,53"
    ganhadorQuadra = "15.271"
    premioQuadra = "585,42"
    acumulaOuGanhaP = ""
    premioSenaEstimadoP = premioSenaEstimado
    /*Premio Estimado e data Proximo Concurso */
    if (ganhadorSena != "0") {
        acumulaOuGanhaP = `${ganhadorSena} sortudos(as)`
        acumulaOuGanha.innerHTML = `<div class="seGanhador" id="acumulaOuGanha">${ganhadorSena} Ganhador(es)</div>`
        
        
    } else {
        acumulaOuGanhaP = "ACUMULOU!!"
        respostaPalpiteAcumulado = "como ninguém acertou as 06 dezenas, o prêmio estimado vai para"
        acumulaOuGanha.innerHTML = `<div class="seAcumula" id="acumulaOuGanha">ACUMULOU!!</div>`
    }

    
    rAcumulouPassado = acumulaOuGanhaP

    

    /* Proximo Sorteio - Inserir Valores */

    pSorteio = " 10/11/2021"
    valorEstimado = "90.000.000,00"
    
    
    concursoData.innerHTML = `CONCURSO ${concurso} - DATA ${data}`
    qtdSena.innerHTML = `${ganhadorSena} Pessoas`
    pSena.innerHTML = `R$ ${premioSena}`

    qtdQuina.innerHTML = `${ganhadorQuina} Pessoas`
    pQuina.innerHTML = `R$ ${premioQuina}`

    qtdQuadra.innerHTML = `${ganhadorQuadra} Pessoas`
    pQuadra.innerHTML = `R$ ${premioQuadra}`


    
    /* Novas variaveis para descrever concurso anterior */
    ms01.innerHTML = `${bola01}`
    ms02.innerHTML = `${bola02}`
    ms03.innerHTML = `${bola03}`
    ms04.innerHTML = `${bola04}`
    ms05.innerHTML = `${bola05}`
    ms06.innerHTML = `${bola06}`
    proximoSorteio.innerHTML = `Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`

   

    TimeRanges.innerHTML = ` `

    tConcurso.innerHTML = `Resultado Mega-sena ${concurso} dia ${data} - ${dataMega}`
    sTConcuros.innerHTML = `<strong >${acumulaOuGanhaP}</strong>. Sorteio da mega-sena aconteceu hoje, ${dataMega}, com prêmio estimado em R$ ${premioSenaEstimado} de reais, confira agora mesmo o resultado da mega-sena <strong>${concurso}</strong>.`
    
    siteNaImagem.innerHTML = `<a href="megadehoje.com" target="_blank" rel="follow">megadehoje.com</a>`
    nomeDoSorteioImage.innerHTML = `${loteria}`
    numeroDoSorteioImage.innerHTML = `Concurso ${concurso}`
    diaEDataSorteioImage.innerHTML = `${dataMega}, ${data}`
    valorEstimadoImage.innerHTML = `Estimado em R$ ${premioSenaEstimado}`

    rMegaA.innerHTML = `É isso mesmo, saiu o resultado, o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram ${ganhadorQuadra} apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`
    titleVejaOResultado.innerHTML = `Concurso ${concurso} da mega-sena: Veja o resultado final.`
    

    comoJogarNaMegaSena.innerHTML = `A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha). <a href="http://bit.ly/aposte-online" target="_blank"><button>APOSTE ONLINE</button></a>`

    /*palpite da mega-sena */
    mseg1 = Math.floor(Math.random() * 60 + 1)
    mseg2 = Math.floor(Math.random() * 60 + 1)
    mseg3 = Math.floor(Math.random() * 60 + 1)
    mseg4 = Math.floor(Math.random() * 60 + 1)
    mseg5 = Math.floor(Math.random() * 60 + 1)
    mseg6 = Math.floor(Math.random() * 60 + 1)

    loteriaM = loteria.toUpperCase()
    titleLoteriaNacional.innerHTML = `PALPITE DA ${loteriaM}`
    nConcursoPalpite.innerHTML = `CONCURSO ${concurso + 1}`
    diaSorteioPalpite.innerHTML = `SORTEIO DIA ${pSorteio}`
    pEstimadoPalpite.innerHTML =  `R$ ${valorEstimado}`

    palpiteN1.innerHTML = `${mseg1}`
    palpiteN2.innerHTML = `${mseg2}`
    palpiteN3.innerHTML = `${mseg3}`
    palpiteN4.innerHTML = `${mseg4}`
    palpiteN5.innerHTML = `${mseg5}`
    palpiteN6.innerHTML = `${mseg6}`
    loteriaMinusc = loteriaM.toLowerCase()

    rPalpiteMega.innerHTML = `Os nossos palpites da <strong>${loteriaMinusc}</strong> são baseado no horário atual, a previsão não é certo, mas recebemos depoimentos de acerto na quadra, se aparecer um jogo do palpite da <strong>${loteriaMinusc}</strong> que faça sentir confiança, não perca a oportunidade e aposte, lembre-se que, com apenas um jogo, de seis números, você pode ser o vencedor e faturar os <strong>R$ ${valorEstimado}</strong> de reais da mega-sena <strong>${concursoP+1}</strong> do dia <strong>${pSorteio}</strong>.`
    /*FIM palpite da mega sena */
    pConcursoP.innerHTML = `Palpite da Mega-sena ${pConcursoPalpite} dia ${pSorteio} - APOSTE`

    sTPalpite.innerHTML = `<strong>${acumulaOuGanhaP}.</strong> Sorteio da mega-sena anterior <strong>${concurso}</strong>, ${respostaPalpiteAcumulado} <strong>R$ ${valorEstimado}</strong> de reais. Quem sabe a sorte não bate em sua porte: <a href="http://bit.ly/aposte-online" target="_blank" rel="nofollow">APOSTE ONLINE</a> hoje mesmo.`

    descAbaixoPalpite.innerHTML = `<p style="text-align: center; margin: 0px;"><i>Veja os números gerados pra você, caso não goste, clique em </i><strong>"GERAR NOVOS NÚMEROS"</strong></p>`
    titleVejaOPalpite.innerHTML = `Palpite da da <strong>${loteriaMinusc}</strong>: Critérios.`

    ImagemFundoP.innerHTML = `<a href="/resultados/mega-sena/resultado-mega-sena-${concurso}.html" target="_blank" rel="follow"><img class="imagemDoPalpite" src="/imagens/palpites/mega-sena/sorteio-mega-sena-${concurso}.jpeg" alt="sorteio da mega sena ${concurso}"></a>`

    tiraStrong = sTPalpite.innerHTML.replace(/<strong>/gi, "")
    tiraStrongComplete = tiraStrong.replace(/</gi, "")
    contentSite = `Palpite da ${loteriaMinusc}, concurso ${concursoP+1}, prêmio estimado em R$ ${valorEstimado} de reais, quem sabe a sorte não bate em sua porta, veja os palpites.`

    enderecoLink = window.location.href
    titleTwitterEFacebook = pConcursoP.innerHTML
    descricaoTwitterEFacebook = sTPalpite.innerHTML
    titleContent = `Mega de Hoje - Resultados da Loteria Nacional`
    carregarMeta.innerHTML = `<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  
    
    <link rel="canonical" href="${enderecoLink}" />
    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${titleTwitterEFacebook}">
    <meta name="twitter:description" content="${tiraStrongComplete}">
    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${titleContent}">
    <meta property="og:title" content="${contentSite}">
    <meta property="og:description" content="${contentSite}">
    <meta property="og:url" content="${enderecoLink}"> 
    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    `
    
    
    
    
    /* Produção de MetaTag mega-sena */


    
    

    var enviarResultAnterior = rMegaA.innerHTML

    res.innerHTML = `${enviarResultAnterior}`

    return enviarResultAnterior

    

    
    
    /*Para o blog */
    
    
}
function megaSena2425() {
    
    /* 
    1 - Segunda
    2 - terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
    7 - Domingo */
    loteria = "Mega Sena"
    siteImage = "https://megadehoje.com"

    diaDaSemana = "3"  
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
    
    concurso = 2425
    data = "03/11/2021"
    bola01 = "10"
    nS1 = bola01
    bola02 = "31"
    nS2 = bola02
    bola03 = "38"
    nS3 = bola03
    bola04 = "46"
    nS4 = bola04
    bola05 = "49"
    nS5 = bola05
    bola06 = "54"
    nS6 = bola06  
    cMegaPassado = concurso
    concursoP = concurso
    dataP = data
    concursoEmNumber = Number(concurso.value)
    pConcursoPalpite = concurso + 1

    premioSenaEstimado = "65.076.630,90"
    ganhadorSena = "0"
    premioSena = "ACUMULOU!!"
    ganhadorQuina = "75"
    premioQuina = "57.727,72"
    ganhadorQuadra = "5048"
    premioQuadra = "1.225,26"
    acumulaOuGanhaP = ""
    premioSenaEstimadoP = premioSenaEstimado
    /*Premio Estimado e data Proximo Concurso */
    if (ganhadorSena != "0") {
        acumulaOuGanhaP = `${ganhadorSena} sortudos(as)`
        acumulaOuGanha.innerHTML = `<div class="seGanhador" id="acumulaOuGanha">${ganhadorSena} Ganhador(es)</div>`
        
        
    } else {
        acumulaOuGanhaP = "ACUMULOU!!"
        respostaPalpiteAcumulado = "como ninguém acertou as 06 dezenas, o prêmio estimado vai para"
        acumulaOuGanha.innerHTML = `<div class="seAcumula" id="acumulaOuGanha">ACUMULOU!!</div>`
    }

    
    rAcumulouPassado = acumulaOuGanhaP

    

    /* Proximo Sorteio - Inserir Valores */

    pSorteio = " 06/11/2021"
    valorEstimado = "75.000.000,00"
    
    
    concursoData.innerHTML = `CONCURSO ${concurso} - DATA ${data}`
    qtdSena.innerHTML = `${ganhadorSena} Pessoas`
    pSena.innerHTML = `R$ ${premioSena}`

    qtdQuina.innerHTML = `${ganhadorQuina} Pessoas`
    pQuina.innerHTML = `R$ ${premioQuina}`

    qtdQuadra.innerHTML = `${ganhadorQuadra} Pessoas`
    pQuadra.innerHTML = `R$ ${premioQuadra}`


    
    /* Novas variaveis para descrever concurso anterior */
    ms01.innerHTML = `${bola01}`
    ms02.innerHTML = `${bola02}`
    ms03.innerHTML = `${bola03}`
    ms04.innerHTML = `${bola04}`
    ms05.innerHTML = `${bola05}`
    ms06.innerHTML = `${bola06}`
    proximoSorteio.innerHTML = `Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`

   

    TimeRanges.innerHTML = ` `

    tConcurso.innerHTML = `Resultado Mega-sena ${concurso} dia ${data} - ${dataMega}`
    sTConcuros.innerHTML = `<strong >${acumulaOuGanhaP}</strong>. Sorteio da mega-sena aconteceu hoje, ${dataMega}, com prêmio estimado em R$ ${premioSenaEstimado} de reais, confira agora mesmo o resultado da mega-sena <strong>${concurso}</strong>.`
    
    siteNaImagem.innerHTML = `<a href="megadehoje.com" target="_blank" rel="follow">megadehoje.com</a>`
    nomeDoSorteioImage.innerHTML = `${loteria}`
    numeroDoSorteioImage.innerHTML = `Concurso ${concurso}`
    diaEDataSorteioImage.innerHTML = `${dataMega}, ${data}`
    valorEstimadoImage.innerHTML = `Estimado em R$ ${premioSenaEstimado}`

    rMegaA.innerHTML = `É isso mesmo, saiu o resultado, o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram ${ganhadorQuadra} apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`
    titleVejaOResultado.innerHTML = `Concurso ${concurso} da mega-sena: Veja o resultado final.`
    

    comoJogarNaMegaSena.innerHTML = `A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha). <a href="http://bit.ly/aposte-online" target="_blank"><button>APOSTE ONLINE</button></a>`

    /*palpite da mega-sena */
    mseg1 = Math.floor(Math.random() * 60 + 1)
    mseg2 = Math.floor(Math.random() * 60 + 1)
    mseg3 = Math.floor(Math.random() * 60 + 1)
    mseg4 = Math.floor(Math.random() * 60 + 1)
    mseg5 = Math.floor(Math.random() * 60 + 1)
    mseg6 = Math.floor(Math.random() * 60 + 1)

    loteriaM = loteria.toUpperCase()
    titleLoteriaNacional.innerHTML = `PALPITE DA ${loteriaM}`
    nConcursoPalpite.innerHTML = `CONCURSO ${concurso + 1}`
    diaSorteioPalpite.innerHTML = `SORTEIO DIA ${pSorteio}`
    pEstimadoPalpite.innerHTML =  `R$ ${valorEstimado}`

    palpiteN1.innerHTML = `${mseg1}`
    palpiteN2.innerHTML = `${mseg2}`
    palpiteN3.innerHTML = `${mseg3}`
    palpiteN4.innerHTML = `${mseg4}`
    palpiteN5.innerHTML = `${mseg5}`
    palpiteN6.innerHTML = `${mseg6}`
    loteriaMinusc = loteriaM.toLowerCase()

    rPalpiteMega.innerHTML = `Os nossos palpites da <strong>${loteriaMinusc}</strong> são baseado no horário atual, a previsão não é certo, mas recebemos depoimentos de acerto na quadra, se aparecer um jogo do palpite da <strong>${loteriaMinusc}</strong> que faça sentir confiança, não perca a oportunidade e aposte, lembre-se que, com apenas um jogo, de seis números, você pode ser o vencedor e faturar os <strong>R$ ${valorEstimado}</strong> de reais da mega-sena <strong>${concursoP+1}</strong> do dia <strong>${pSorteio}</strong>.`
    /*FIM palpite da mega sena */
    pConcursoP.innerHTML = `Palpite da Mega-sena ${pConcursoPalpite} dia ${pSorteio} - APOSTE`

    sTPalpite.innerHTML = `<strong>${acumulaOuGanhaP}.</strong> Sorteio da mega-sena anterior <strong>${concurso}</strong>, ${respostaPalpiteAcumulado} <strong>R$ ${valorEstimado}</strong> de reais. Quem sabe a sorte não bate em sua porte: <a href="http://bit.ly/aposte-online" target="_blank" rel="nofollow">APOSTE ONLINE</a> hoje mesmo.`

    descAbaixoPalpite.innerHTML = `<p style="text-align: center; margin: 0px;"><i>Veja os números gerados pra você, caso não goste, clique em </i><strong>"GERAR NOVOS NÚMEROS"</strong></p>`
    titleVejaOPalpite.innerHTML = `Palpite da da <strong>${loteriaMinusc}</strong>: Critérios.`

    ImagemFundoP.innerHTML = `<a href="/resultados/mega-sena/resultado-mega-sena-${concurso}.html" target="_blank" rel="follow"><img class="imagemDoPalpite" src="/imagens/palpites/mega-sena/sorteio-mega-sena-${concurso}.jpeg" alt="sorteio da mega sena ${concurso}"></a>`

    tiraStrong = sTPalpite.innerHTML.replace(/<strong>/gi, "")
    tiraStrongComplete = tiraStrong.replace(/</gi, "")
    contentSite = `Palpite da ${loteriaMinusc}, concurso ${concursoP+1}, prêmio estimado em R$ ${valorEstimado} de reais, quem sabe a sorte não bate em sua porta, veja os palpites.`

    enderecoLink = window.location.href
    titleTwitterEFacebook = pConcursoP.innerHTML
    descricaoTwitterEFacebook = sTPalpite.innerHTML
    titleContent = `Mega de Hoje - Resultados da Loteria Nacional`
    carregarMeta.innerHTML = `<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  
    
    <link rel="canonical" href="${enderecoLink}" />
    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${titleTwitterEFacebook}">
    <meta name="twitter:description" content="${tiraStrongComplete}">
    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${titleContent}">
    <meta property="og:title" content="${contentSite}">
    <meta property="og:description" content="${contentSite}">
    <meta property="og:url" content="${enderecoLink}"> 
    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">
    `
    
    
    
    
    /* Produção de MetaTag mega-sena */


    
    

    var enviarResultAnterior = rMegaA.innerHTML

    res.innerHTML = `${enviarResultAnterior}`

    return enviarResultAnterior

    

    
    
    /*Para o blog */
    
    
}

function metaTagsGenerator(){geradorDTags=""}function megaSena2424(){loteria="Mega Sena",siteImage="https://megadehoje.com",diaDaSemana="6",dataMega="","3"==diaDaSemana?dataMega="quarta-feira":"4"==diaDaSemana?dataMega="quinta-feira":"5"==diaDaSemana?dataMega="sexta-feira":"6"==diaDaSemana?dataMega="sábado":"7"==diaDaSemana?dataMega="domingo":"1"==diaDaSemana?dataMega="terça-feira":"2"==diaDaSemana?dataMega="terça-feira":dataMega="Dia não encontrado",concurso=2424,data="30/10/2021",bola01="03",nS1=bola01,bola02="16",nS2=bola02,bola03="17",nS3=bola03,bola04="37",nS4=bola04,bola05="38",nS5=bola05,bola06="53",nS6=bola06,cMegaPassado=concurso,concursoP=concurso,dataP=data,concursoEmNumber=Number(concurso.value),pConcursoPalpite=concurso+1,premioSenaEstimado="40.618.759,48",ganhadorSena="0",premioSena="ACUMULOU!",ganhadorQuina="101",premioQuina="41.070,64",ganhadorQuadra="6968",premioQuadra="850,44",acumulaOuGanhaP="",premioSenaEstimadoP=premioSenaEstimado,"0"!=ganhadorSena?(acumulaOuGanhaP=`${ganhadorSena} sortudos(as)`,acumulaOuGanha.innerHTML=`<div class="seGanhador" id="acumulaOuGanha">${ganhadorSena} Ganhador(es)</div>`):(acumulaOuGanhaP="ACUMULOU!!",respostaPalpiteAcumulado="como ninguém acertou as 06 dezenas, o prêmio estimado vai para",acumulaOuGanha.innerHTML='<div class="seAcumula" id="acumulaOuGanha">ACUMULOU!!</div>'),rAcumulouPassado=acumulaOuGanhaP,pSorteio=" 03/11/2021",valorEstimado="65.000.000,00",concursoData.innerHTML=`CONCURSO ${concurso} - DATA ${data}`,qtdSena.innerHTML=`${ganhadorSena} Pessoas`,pSena.innerHTML=`R$ ${premioSena}`,qtdQuina.innerHTML=`${ganhadorQuina} Pessoas`,pQuina.innerHTML=`R$ ${premioQuina}`,qtdQuadra.innerHTML=`${ganhadorQuadra} Pessoas`,pQuadra.innerHTML=`R$ ${premioQuadra}`,ms01.innerHTML=`${bola01}`,ms02.innerHTML=`${bola02}`,ms03.innerHTML=`${bola03}`,ms04.innerHTML=`${bola04}`,ms05.innerHTML=`${bola05}`,ms06.innerHTML=`${bola06}`,proximoSorteio.innerHTML=`Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`,tConcurso.innerHTML=`Resultado Mega-sena ${concurso} dia ${data} - ${dataMega}`,sTConcuros.innerHTML=`<strong>${acumulaOuGanhaP}</strong> Sorteio da mega-sena aconteceu hoje, ${dataMega}, com prêmio estimado em R$ ${premioSenaEstimado} de reais, confira agora mesmo o resultado da mega-sena <strong>${concurso}</strong>.`,siteNaImagem.innerHTML='<a href="megadehoje.com" target="_blank" rel="follow">megadehoje.com</a>',nomeDoSorteioImage.innerHTML=`${loteria}`,numeroDoSorteioImage.innerHTML=`Concurso ${concurso}`,diaEDataSorteioImage.innerHTML=`${dataMega}, ${data}`,valorEstimadoImage.innerHTML=`Estimado em R$ ${premioSenaEstimado}`,rMegaA.innerHTML=`É isso mesmo, saiu o resultado, o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram ${ganhadorQuadra} apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`,titleVejaOResultado.innerHTML=`Concurso ${concurso} da mega-sena: Veja o resultado final.`,comoJogarNaMegaSena.innerHTML='A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha). <a href="http://bit.ly/aposte-online" target="_blank"><button>APOSTE ONLINE</button></a>',mseg1=Math.floor(60*Math.random()+1),mseg2=Math.floor(60*Math.random()+1),mseg3=Math.floor(60*Math.random()+1),mseg4=Math.floor(60*Math.random()+1),mseg5=Math.floor(60*Math.random()+1),mseg6=Math.floor(60*Math.random()+1),loteriaM=loteria.toUpperCase(),titleLoteriaNacional.innerHTML=`PALPITE DA ${loteriaM}`,nConcursoPalpite.innerHTML=`CONCURSO ${concurso+1}`,diaSorteioPalpite.innerHTML=`SORTEIO DIA ${pSorteio}`,pEstimadoPalpite.innerHTML=`R$ ${valorEstimado}`,palpiteN1.innerHTML=`${mseg1}`,palpiteN2.innerHTML=`${mseg2}`,palpiteN3.innerHTML=`${mseg3}`,palpiteN4.innerHTML=`${mseg4}`,palpiteN5.innerHTML=`${mseg5}`,palpiteN6.innerHTML=`${mseg6}`,loteriaMinusc=loteriaM.toLowerCase(),rPalpiteMega.innerHTML=`Os nossos palpites da <strong>${loteriaMinusc}</strong> são baseado no horário atual, a previsão não é certo, mas recebemos depoimentos de acerto na quadra, se aparecer um jogo do palpite da <strong>${loteriaMinusc}</strong> que faça sentir confiança, não perca a oportunidade e aposte, lembre-se que, com apenas um jogo, de seis números, você pode ser o vencedor e faturar os <strong>R$ ${valorEstimado}</strong> de reais da mega-sena <strong>${concursoP+1}</strong> do dia <strong>${pSorteio}</strong>.`,pConcursoP.innerHTML=`Palpite da Mega-sena ${pConcursoPalpite} dia ${pSorteio} - APOSTE`,sTPalpite.innerHTML=`<strong>${acumulaOuGanhaP}.</strong> Sorteio da mega-sena anterior <strong>${concurso}</strong>, ${respostaPalpiteAcumulado} <strong>R$ ${valorEstimado}</strong> de reais. Quem sabe a sorte não bate em sua porte: <a href="http://bit.ly/aposte-online" target="_blank" rel="nofollow">APOSTE ONLINE</a> hoje mesmo.`,descAbaixoPalpite.innerHTML='<p style="text-align: center; margin: 0px;"><i>Veja os números gerados pra você, caso não goste, clique em </i><strong>"GERAR NOVOS NÚMEROS"</strong></p>',titleVejaOPalpite.innerHTML=`Palpite da da <strong>${loteriaMinusc}</strong>: Critérios.`,ImagemFundoP.innerHTML=`<a href="/resultados/mega-sena/resultado-mega-sena-${concurso}.html" target="_blank" rel="follow"><img class="imagemDoPalpite" src="/imagens/palpites/mega-sena/sorteio-mega-sena-${concurso}.jpg" alt="sorteio da mega sena ${concurso}"></a>`,tiraStrong=sTPalpite.innerHTML.replace(/<strong>/gi,""),tiraStrongComplete=tiraStrong.replace(/</gi,""),contentSite=`Palpite da ${loteriaMinusc}, concurso ${concursoP+1}, prêmio estimado em R$ ${valorEstimado} de reais, quem sabe a sorte não bate em sua porta, veja os palpites.`,enderecoLink=window.location.href,titleTwitterEFacebook=pConcursoP.innerHTML,descricaoTwitterEFacebook=sTPalpite.innerHTML,titleContent="Mega de Hoje - Resultados da Loteria Nacional",carregarMeta.innerHTML=`<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  \n    \n    <link rel="canonical" href="${enderecoLink}" />\n    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">\n    <meta name="twitter:title" content="${titleTwitterEFacebook}">\n    <meta name="twitter:description" content="${tiraStrongComplete}">\n    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">\n    <meta property="og:type" content="website">\n    <meta property="og:site_name" content="${titleContent}">\n    <meta property="og:title" content="${contentSite}">\n    <meta property="og:description" content="${contentSite}">\n    <meta property="og:url" content="${enderecoLink}"> \n    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">\n    `;var a=rMegaA.innerHTML;return res.innerHTML=`${a}`,a}function megaSena2423(){loteria="Mega Sena",siteImage="https://megadehoje.com",diaDaSemana="3",dataMega="","3"==diaDaSemana?dataMega="quarta-feira":"4"==diaDaSemana?dataMega="quinta-feira":"5"==diaDaSemana?dataMega="sexta-feira":"6"==diaDaSemana?dataMega="sábado":"7"==diaDaSemana?dataMega="domingo":"1"==diaDaSemana?dataMega="terça-feira":"2"==diaDaSemana?dataMega="terça-feira":dataMega="Dia não encontrado",concurso=2423,data="27/10/2021",bola01="16",nS1=bola01,bola02="18",nS2=bola02,bola03="38",nS3=bola03,bola04="48",nS4=bola04,bola05="51",nS5=bola05,bola06="60",nS6=bola06,cMegaPassado=concurso,concursoP=concurso,dataP=data,concursoEmNumber=Number(concurso.value),pConcursoPalpite=concurso+1,premioSenaEstimado="32.977.458,14",ganhadorSena="0",premioSena="ACUMULOU!",ganhadorQuina="40",premioQuina="82.766,60",ganhadorQuadra="3295",premioQuadra="1.435,36",acumulaOuGanhaP="",premioSenaEstimadoP=premioSenaEstimado,"0"!=ganhadorSena?(acumulaOuGanhaP=`${ganhadorSena} sortudos(as)`,acumulaOuGanha.innerHTML=`<div class="seGanhador" id="acumulaOuGanha">${ganhadorSena} Ganhador(es)</div>`):(acumulaOuGanhaP="ACUMULOU!!",respostaPalpiteAcumulado="como ninguém acertou as 06 dezenas, o prêmio estimado vai para",acumulaOuGanha.innerHTML='<div class="seAcumula" id="acumulaOuGanha">ACUMULOU!!</div>'),rAcumulouPassado=acumulaOuGanhaP,pSorteio=" 30/10/2021",valorEstimado="40.000.000,00",concursoData.innerHTML=`CONCURSO ${concurso} - DATA ${data}`,qtdSena.innerHTML=`${ganhadorSena} Pessoas`,pSena.innerHTML=`R$ ${premioSena}`,qtdQuina.innerHTML=`${ganhadorQuina} Pessoas`,pQuina.innerHTML=`R$ ${premioQuina}`,qtdQuadra.innerHTML=`${ganhadorQuadra} Pessoas`,pQuadra.innerHTML=`R$ ${premioQuadra}`,ms01.innerHTML=`${bola01}`,ms02.innerHTML=`${bola02}`,ms03.innerHTML=`${bola03}`,ms04.innerHTML=`${bola04}`,ms05.innerHTML=`${bola05}`,ms06.innerHTML=`${bola06}`,proximoSorteio.innerHTML=`Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`,tConcurso.innerHTML=`Resultado Mega-sena ${concurso} dia ${data} - ${dataMega}`,sTConcuros.innerHTML=`<strong>${acumulaOuGanhaP}</strong> Sorteio da mega-sena aconteceu hoje, ${dataMega}, com prêmio estimado em R$ ${premioSenaEstimado} de reais, confira agora mesmo o resultado da mega-sena <strong>${concurso}</strong>.`,siteNaImagem.innerHTML='<a href="megadehoje.com" target="_blank" rel="follow">megadehoje.com</a>',nomeDoSorteioImage.innerHTML=`${loteria}`,numeroDoSorteioImage.innerHTML=`Concurso ${concurso}`,diaEDataSorteioImage.innerHTML=`${dataMega}, ${data}`,valorEstimadoImage.innerHTML=`Estimado em R$ ${premioSenaEstimado}`,rMegaA.innerHTML=`É isso mesmo, saiu o resultado, o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram ${ganhadorQuadra} apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`,titleVejaOResultado.innerHTML=`Concurso ${concurso} da mega-sena: Veja o resultado final.`,comoJogarNaMegaSena.innerHTML="A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha).",mseg1=Math.floor(60*Math.random()+1),mseg2=Math.floor(60*Math.random()+1),mseg3=Math.floor(60*Math.random()+1),mseg4=Math.floor(60*Math.random()+1),mseg5=Math.floor(60*Math.random()+1),mseg6=Math.floor(60*Math.random()+1),loteriaM=loteria.toUpperCase(),titleLoteriaNacional.innerHTML=`PALPITE DA ${loteriaM}`,nConcursoPalpite.innerHTML=`CONCURSO ${concurso+1}`,diaSorteioPalpite.innerHTML=`SORTEIO DIA ${pSorteio}`,pEstimadoPalpite.innerHTML=`R$ ${valorEstimado}`,palpiteN1.innerHTML=`${mseg1}`,palpiteN2.innerHTML=`${mseg2}`,palpiteN3.innerHTML=`${mseg3}`,palpiteN4.innerHTML=`${mseg4}`,palpiteN5.innerHTML=`${mseg5}`,palpiteN6.innerHTML=`${mseg6}`,loteriaMinusc=loteriaM.toLowerCase(),rPalpiteMega.innerHTML=`Os nossos palpites da <strong>${loteriaMinusc}</strong> são baseado no horário atual, a previsão não é certo, mas recebemos depoimentos de acerto na quadra, se aparecer um jogo do palpite da <strong>${loteriaMinusc}</strong> que faça sentir confiança, não perca a oportunidade e aposte, lembre-se que, com apenas um jogo, de seis números, você pode ser o vencedor e faturar os <strong>R$ ${valorEstimado}</strong> de reais da mega-sena <strong>${concursoP+1}</strong> do dia <strong>${pSorteio}</strong>.`,pConcursoP.innerHTML=`Palpite da Mega-sena ${pConcursoPalpite} dia ${pSorteio} - APOSTE`,sTPalpite.innerHTML=`<strong>${acumulaOuGanhaP}.</strong> Sorteio da mega-sena anterior <strong>${concurso}</strong>, ${respostaPalpiteAcumulado} <strong>R$ ${valorEstimado}</strong> de reais. Quem sabe a sorte não bate em sua porte: <a href="http://bit.ly/aposte-online" target="_blank" rel="nofollow">APOSTE ONLINE</a> hoje mesmo.`,descAbaixoPalpite.innerHTML='<p style="text-align: center; margin: 0px;"><i>Veja os números gerados pra você, caso não goste, clique em </i><strong>"GERAR NOVOS NÚMEROS"</strong></p>',titleVejaOPalpite.innerHTML=`Palpite da da <strong>${loteriaMinusc}</strong>: Critérios.`,ImagemFundoP.innerHTML=`<a href="/resultados/mega-sena/resultado-mega-sena-${concurso}.html" target="_blank" rel="follow"><img class="imagemDoPalpite" src="/imagens/palpites/mega-sena/sorteio-mega-sena-${concurso}.jpg" alt="sorteio da mega sena ${concurso}"></a>`,tiraStrong=sTPalpite.innerHTML.replace(/<strong>/gi,""),tiraStrongComplete=tiraStrong.replace(/</gi,""),contentSite=`Palpite da ${loteriaMinusc}, concurso ${concursoP+1}, prêmio estimado em R$ ${valorEstimado} de reais, quem sabe a sorte não bate em sua porta, veja os palpites.`,enderecoLink=window.location.href,titleTwitterEFacebook=pConcursoP.innerHTML,descricaoTwitterEFacebook=sTPalpite.innerHTML,titleContent="Mega de Hoje - Resultados da Loteria Nacional",carregarMeta.innerHTML=`<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  \n    \n    <link rel="canonical" href="${enderecoLink}" />\n    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">\n    <meta name="twitter:title" content="${titleTwitterEFacebook}">\n    <meta name="twitter:description" content="${tiraStrongComplete}">\n    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">\n    <meta property="og:type" content="website">\n    <meta property="og:site_name" content="${titleContent}">\n    <meta property="og:title" content="${contentSite}">\n    <meta property="og:description" content="${contentSite}">\n    <meta property="og:url" content="${enderecoLink}"> \n    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">\n    `;var a=rMegaA.innerHTML;return res.innerHTML=`${a}`,a}function megaSena2422(){loteria="Mega Sena",siteImage="https://megadehoje.com",diaDaSemana="6",dataMega="","3"==diaDaSemana?dataMega="quarta-feira":"4"==diaDaSemana?dataMega="quinta-feira":"5"==diaDaSemana?dataMega="sexta-feira":"6"==diaDaSemana?dataMega="sábado":"7"==diaDaSemana?dataMega="domingo":"1"==diaDaSemana?dataMega="terça-feira":"2"==diaDaSemana?dataMega="terça-feira":dataMega="Dia não encontrado",concurso=2422,data="23/10/2021",bola01="02",nS1=bola01,bola02="07",nS2=bola02,bola03="10",nS3=bola03,bola04="20",nS4=bola04,bola05="30",nS5=bola05,bola06="46",nS6=bola06,cMegaPassado=concurso,concursoP=concurso,dataP=data,concursoEmNumber=Number(concurso.value),pConcursoPalpite=concurso+1,premioSenaEstimado="26.500.000,00",ganhadorSena="0",premioSena="0",ganhadorQuina="110",premioQuina="26.323,93",ganhadorQuadra="6.942",premioQuadra="595,88",acumulaOuGanhaP="",premioSenaEstimadoP=premioSenaEstimado,"0"!=ganhadorSena?(acumulaOuGanhaP=`${ganhadorSena} sortudos(as)`,acumulaOuGanha.innerHTML=`<div class="seGanhador" id="acumulaOuGanha">${ganhadorSena} Ganhador(es)</div>`):(acumulaOuGanhaP="ACUMULOU!!",respostaPalpiteAcumulado="como ninguém acertou as 06 dezenas, o prêmio estimado vai para",acumulaOuGanha.innerHTML='<div class="seAcumula" id="acumulaOuGanha">ACUMULOU!!</div>'),rAcumulouPassado=acumulaOuGanhaP,pSorteio=" 27/10/2021",valorEstimado="33.000.000,00",concursoData.innerHTML=`CONCURSO ${concurso} - DATA ${data}`,qtdSena.innerHTML=`${ganhadorSena} Pessoas`,pSena.innerHTML=`R$ ${premioSena}`,qtdQuina.innerHTML=`${ganhadorQuina} Pessoas`,pQuina.innerHTML=`R$ ${premioQuina}`,qtdQuadra.innerHTML=`${ganhadorQuadra} Pessoas`,pQuadra.innerHTML=`R$ ${premioQuadra}`,ms01.innerHTML=`${bola01}`,ms02.innerHTML=`${bola02}`,ms03.innerHTML=`${bola03}`,ms04.innerHTML=`${bola04}`,ms05.innerHTML=`${bola05}`,ms06.innerHTML=`${bola06}`,proximoSorteio.innerHTML=`Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`,tConcurso.innerHTML=`Resultado Mega-sena ${concurso} dia ${data} - ${dataMega}`,sTConcuros.innerHTML=`<strong>${acumulaOuGanhaP}</strong> Sorteio da mega-sena aconteceu hoje, ${dataMega}, com prêmio estimado em R$ ${premioSenaEstimado} de reais, confira agora mesmo o resultado da mega-sena <strong>${concurso}</strong>.`,siteNaImagem.innerHTML='<a href="megadehoje.com" target="_blank" rel="follow">megadehoje.com</a>',nomeDoSorteioImage.innerHTML=`${loteria}`,numeroDoSorteioImage.innerHTML=`Concurso ${concurso}`,diaEDataSorteioImage.innerHTML=`${dataMega}, ${data}`,valorEstimadoImage.innerHTML=`Estimado em R$ ${premioSenaEstimado}`,rMegaA.innerHTML=`No concurso da Mega-sena passado, que foi o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram ${ganhadorQuadra} apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`,titleVejaOResultado.innerHTML=`Concurso ${concurso} da mega-sena: Veja o resultado final.`,comoJogarNaMegaSena.innerHTML="A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha).",mseg1=Math.floor(60*Math.random()+1),mseg2=Math.floor(60*Math.random()+1),mseg3=Math.floor(60*Math.random()+1),mseg4=Math.floor(60*Math.random()+1),mseg5=Math.floor(60*Math.random()+1),mseg6=Math.floor(60*Math.random()+1),loteriaM=loteria.toUpperCase(),titleLoteriaNacional.innerHTML=`PALPITE DA ${loteriaM}`,nConcursoPalpite.innerHTML=`CONCURSO ${concursoP+1}`,diaSorteioPalpite.innerHTML=`SORTEIO DIA ${pSorteio}`,pEstimadoPalpite.innerHTML=`R$ ${valorEstimado}`,palpiteN1.innerHTML=`${mseg1}`,palpiteN2.innerHTML=`${mseg2}`,palpiteN3.innerHTML=`${mseg3}`,palpiteN4.innerHTML=`${mseg4}`,palpiteN5.innerHTML=`${mseg5}`,palpiteN6.innerHTML=`${mseg6}`,loteriaMinusc=loteriaM.toLowerCase(),rPalpiteMega.innerHTML=`Os nossos palpites da <strong>${loteriaMinusc}</strong> são baseado no horário atual, a previsão não é certo, mas recebemos depoimentos de acerto na quadra, se aparecer um jogo do palpite da <strong>${loteriaMinusc}</strong> que faça sentir confiança, não perca a oportunidade e aposte, lembre-se que, com apenas um jogo, de seis números, você pode ser o vencedor e faturar os <strong>R$ ${valorEstimado}</strong> de reais da mega-sena <strong>${concursoP+1}</strong> do dia <strong>${pSorteio}</strong>.`,pConcursoP.innerHTML=`Palpite da Mega-sena ${pConcursoPalpite} dia ${pSorteio} - APOSTE`,sTPalpite.innerHTML=`<strong>${acumulaOuGanhaP}.</strong> Sorteio da mega-sena anterior <strong>${concurso}</strong>, ${respostaPalpiteAcumulado} <strong>R$ ${valorEstimado}</strong> de reais. Quem sabe a sorte não bate em sua porte: <a href="http://bit.ly/aposte-online" target="_blank" rel="nofollow">APOSTE ONLINE</a> hoje mesmo.`,descAbaixoPalpite.innerHTML='<p style="text-align: center; margin: 0px;"><i>Veja os números gerados pra você, caso não goste, clique em </i><strong>"GERAR NOVOS NÚMEROS"</strong></p>',titleVejaOPalpite.innerHTML=`Palpite da da <strong>${loteriaMinusc}</strong>: Critérios.`,ImagemFundoP.innerHTML=`<a href="/resultados/mega-sena/resultado-mega-sena-${concurso}.html" target="_blank" rel="follow"><img class="imagemDoPalpite" src="/imagens/palpites/mega-sena/sorteio-mega-sena-${concurso}.jpg" alt="sorteio da mega sena ${concurso}"></a>`,tiraStrong=sTPalpite.innerHTML.replace(/<strong>/gi,""),tiraStrongComplete=tiraStrong.replace(/</gi,""),contentSite=`Palpite da ${loteriaMinusc}, concurso ${concursoP+1}, prêmio estimado em R$ ${valorEstimado} de reais, quem sabe a sorte não bate em sua porta, veja os palpites.`,enderecoLink=window.location.href,titleTwitterEFacebook=pConcursoP.innerHTML,descricaoTwitterEFacebook=sTPalpite.innerHTML,titleContent="Mega de Hoje - Resultados da Loteria Nacional",carregarMeta.innerHTML=`<meta name="keywords" content="palpite ${loteriaMinusc} ${concursoP+1}, como ganhar na "${loteriaMinusc}>  <meta name="description" content="Como ganhar na ${loteriaMinusc}, concurso ${concursoP+1}, prêmio de R$ ${valorEstimado} pode ser seu, confira os palpites da ${loteriaMinusc} ">  \n    \n    <link rel="canonical" href="${enderecoLink}" />\n    <meta name="robots" content="index, follow" /><meta name="twitter:card" content="summary">\n    <meta name="twitter:title" content="${titleTwitterEFacebook}">\n    <meta name="twitter:description" content="${tiraStrongComplete}">\n    <meta name="twitter:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">\n    <meta property="og:type" content="website">\n    <meta property="og:site_name" content="${titleContent}">\n    <meta property="og:title" content="${contentSite}">\n    <meta property="og:description" content="${contentSite}">\n    <meta property="og:url" content="${enderecoLink}"> \n    <meta property="og:image" content="https://megadehoje.com/imagens/palpites/mega-sena/palpite-mega-sena-${concursoP+1}.jpg">\n    `;var a=rMegaA.innerHTML;return res.innerHTML=`${a}`,a}function megaSena24222(){diaDaSemana="6",concurso="2422",cMegaPassado=concurso,data="23/10/2021",bola01="02",nS1=bola01,bola02="07",nS2=bola02,bola03="10",nS3=bola03,bola04="20",nS4=bola04,bola05="30",nS5=bola05,bola06="46",nS6=bola06,dataMega="","3"==diaDaSemana?dataMega="quarta-feira":"4"==diaDaSemana?dataMega="quinta-feira":"5"==diaDaSemana?dataMega="sexta-feira":"6"==diaDaSemana?dataMega="sábado":"7"==diaDaSemana?dataMega="domingo":"1"==diaDaSemana?dataMega="terça-feira":"2"==diaDaSemana?dataMega="terça-feira":dataMega="Dia não encontrado",ganhadorSena="0",premioDSena="0",ganhadorQuina="110",premioQuina="26.323,93",ganhadorQuadra="6942",premioQuadra="595,88",acumulaOuGanhaP="","0"!=ganhadorSena?(acumulaOuGanhaP=`${ganhadorSena} sortudos(as)`,acumulaOuGanha.innerHTML=`${ganhadorSena} Ganhador(es)`):(acumulaOuGanhaP="ACUMULOU!! ",acumulaOuGanha.innerHTML="ACUMULOU!!"),rAcumulouPassado=acumulaOuGanhaP,concursoData.innerHTML=`CONCURSO ${concurso} - DATA ${data}`,qtdSena.innerHTML=`${ganhadorSena} Pessoas`,pSena.innerHTML=`R$ ${premioDSena}`,qtdQuina.innerHTML=`${ganhadorQuina} Pessoas`,pQuina.innerHTML=`R$ ${premioQuina}`,qtdQuadra.innerHTML=`${ganhadorQuadra} Pessoas`,pQuadra.innerHTML=`R$ ${premioQuadra}`,pSorteio="2222/10/2021",valorEstimado="33.000.000,00",ms01.innerHTML=`${bola01}`,ms02.innerHTML=`${bola02}`,ms03.innerHTML=`${bola03}`,ms04.innerHTML=`${bola04}`,ms05.innerHTML=`${bola05}`,ms06.innerHTML=`${bola06}`,proximoSorteio.innerHTML=`Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`,tConcurso.innerHTML=`Resultado Mega-sena ${concurso} dia ${data} - ${dataMega}`,sTConcuros.innerHTML=`${acumulaOuGanhaP}Sorteio da mega-sena aconteceu hoje, ${dataMega}, com prêmio estimado em R$ ${premioSena} de reais, confira agora mesmo o resultado da mega-sena ${concurso}.`,rMegaA.innerHTML=`No concurso da Mega-sena passado, que foi o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram ${ganhadorQuadra} apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`}function megaSena2421passou(){diaDaSemana="3",dataMega="","3"==diaDaSemana?dataMega="quarta-feira":"4"==diaDaSemana?dataMega="quinta-feira":"5"==diaDaSemana?dataMega="sexta-feira":"6"==diaDaSemana?dataMega="sábado":"7"==diaDaSemana?dataMega="domingo":"1"==diaDaSemana?dataMega="terça-feira":"2"==diaDaSemana?dataMega="terça-feira":dataMega="Dia não encontrado",concurso="2451",data="23/10/2021",bola01="02",bola02="10",bola03="10",bola04="10",bola05="10",bola06="09",ganhadorSena="0",premioSena="6",ganhadorQuina="3",premioQuina="5",ganhadorQuadra="4",premioQuadra="4",acumulaOuGanhaP="","0"!=ganhadorSena?(acumulaOuGanhaP=`${ganhadorSena} sortudos(as)`,acumulaOuGanha.innerHTML=`${ganhadorSena} Ganhador(es)`):(acumulaOuGanhaP="ACUMULOU!! ",acumulaOuGanha.innerHTML="ACUMULOU!!"),pSorteio=" 25/10/2021",valorEstimado="26.000.000,00",concursoData.innerHTML=`CONCURSO ${concurso} - DATA ${data}`,qtdSena.innerHTML=`${ganhadorSena} Pessoas`,pSena.innerHTML=`R$ ${premioSena}`,qtdQuina.innerHTML=`${ganhadorQuina} Pessoas`,pQuina.innerHTML=`R$ ${premioQuina}`,qtdQuadra.innerHTML=`${ganhadorQuadra} Pessoas`,pQuadra.innerHTML=`R$ ${premioQuadra}`,ms01.innerHTML=`${bola01}`,ms02.innerHTML=`${bola02}`,ms03.innerHTML=`${bola03}`,ms04.innerHTML=`${bola04}`,ms05.innerHTML=`${bola05}`,ms06.innerHTML=`${bola06}`,tConcurso.innerHTML=`Resultado Mega-sena ${concurso} dia ${pSorteio} - ${dataMega}`,sTConcuros.innerHTML=`${acumulaOuGanhaP}Sorteio da mega-sena aconteceu hoje ${dataMega}, com prêmio estimado em R$ ${premioSena} de reais, confira agora mesmo o resultado da mega-sena ${concurso}`,megaSenaAnterior.innerHTML=`${resultAnteriorDaMegaSena}`,proximoSorteio.innerHTML=`Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`}function megaSena2420correta(){loteria="Mega Sena",siteImage="https://megadehoje.com",diaDaSemana="6",dataMega="","3"==diaDaSemana?dataMega="quarta-feira":"4"==diaDaSemana?dataMega="quinta-feira":"5"==diaDaSemana?dataMega="sexta-feira":"6"==diaDaSemana?dataMega="sábado":"7"==diaDaSemana?dataMega="domingo":"1"==diaDaSemana?dataMega="terça-feira":"2"==diaDaSemana?dataMega="terça-feira":dataMega="Dia não encontrado",concurso="2422",cMegaPassado=concurso,data="23/10/2021",bola01="02",nS1=bola01,bola02="07",nS2=bola02,bola03="10",nS3=bola03,bola04="20",nS4=bola04,bola05="30",nS5=bola05,bola06="46",nS6=bola06,premioSenaEstimado="26.500.000,00",ganhadorSena="0",premioSena="0",ganhadorQuina="110",premioQuina="26.323,93",ganhadorQuadra="6.942",premioQuadra="595,88",acumulaOuGanhaP="","0"!=ganhadorSena?(acumulaOuGanhaP=`${ganhadorSena} sortudos(as)`,acumulaOuGanha.innerHTML=`<div class="seGanhador" id="acumulaOuGanha">${ganhadorSena} Ganhador(es)</div>`):(acumulaOuGanhaP="ACUMULOU!!",acumulaOuGanha.innerHTML='<div class="seAcumula" id="acumulaOuGanha">ACUMULOU!!</div>'),rAcumulouPassado=acumulaOuGanhaP,pSorteio=" 27/10/2021",valorEstimado="33.000.000,00",concursoData.innerHTML=`CONCURSO ${concurso} - DATA ${data}`,qtdSena.innerHTML=`${ganhadorSena} Pessoas`,pSena.innerHTML=`R$ ${premioSena}`,qtdQuina.innerHTML=`${ganhadorQuina} Pessoas`,pQuina.innerHTML=`R$ ${premioQuina}`,qtdQuadra.innerHTML=`${ganhadorQuadra} Pessoas`,pQuadra.innerHTML=`R$ ${premioQuadra}`,ms01.innerHTML=`${bola01}`,ms02.innerHTML=`${bola02}`,ms03.innerHTML=`${bola03}`,ms04.innerHTML=`${bola04}`,ms05.innerHTML=`${bola05}`,ms06.innerHTML=`${bola06}`,proximoSorteio.innerHTML=`Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`,tConcurso.innerHTML=`Resultado Mega-sena ${concurso} dia ${data} - ${dataMega}`,sTConcuros.innerHTML=`<strong>${acumulaOuGanhaP}</strong>Sorteio da mega-sena aconteceu hoje, ${dataMega}, com prêmio estimado em R$ ${premioSenaEstimado} de reais, confira agora mesmo o resultado da mega-sena <strong>${concurso}</strong>.`,siteNaImagem.innerHTML='<a href="megadehoje.com" target="_blank" rel="follow">megadehoje.com</a>',nomeDoSorteioImage.innerHTML=`${loteria}`,numeroDoSorteioImage.innerHTML=`Concurso ${concurso}`,diaEDataSorteioImage.innerHTML=`${dataMega}, ${data}`,valorEstimadoImage.innerHTML=`Estimado em R$ ${premioSenaEstimado}`,rMegaA.innerHTML=`No concurso da Mega-sena passado, que foi o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram ${ganhadorQuadra} apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`,titleVejaOResultado.innerHTML=`Concurso ${concurso} da mega-sena: Veja o resultado final.`,comoJogarNaMegaSena.innerHTML="A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha).";var a=rMegaA.innerHTML;return res.innerHTML=`${a}`,a}function megaSenafuncionando(){diaDaSemana="3",dataMega="","3"==diaDaSemana?dataMega="quarta-feira":"4"==diaDaSemana?dataMega="quinta-feira":"5"==diaDaSemana?dataMega="sexta-feira":"6"==diaDaSemana?dataMega="sábado":"7"==diaDaSemana?dataMega="domingo":"1"==diaDaSemana?dataMega="terça-feira":"2"==diaDaSemana?dataMega="terça-feira":dataMega="Dia não encontrado",concurso="2451",cMegaPassado=concurso,data="23/10/2021",bola01="20",nS1=bola01,bola02="18",nS2=bola02,bola03="20",nS3=bola03,bola04="30",nS4=bola04,bola05="50",nS5=bola05,bola06="60",nS6=bola06,ganhadorSena="0",premioSena="6",ganhadorQuina="3",premioQuina="5",ganhadorQuadra="4",premioQuadra="4",acumulaOuGanhaP="","0"!=ganhadorSena?(acumulaOuGanhaP=`${ganhadorSena} sortudos(as)`,acumulaOuGanha.innerHTML=`${ganhadorSena} Ganhador(es)`):(acumulaOuGanhaP="ACUMULOU!! ",acumulaOuGanha.innerHTML="ACUMULOU!!"),rAcumulouPassado=acumulaOuGanhaP,pSorteio=" 25/10/2021",valorEstimado="26.000.000,00",concursoData.innerHTML=`CONCURSO ${concurso} - DATA ${data}`,qtdSena.innerHTML=`${ganhadorSena} Pessoas`,pSena.innerHTML=`R$ ${premioSena}`,qtdQuina.innerHTML=`${ganhadorQuina} Pessoas`,pQuina.innerHTML=`R$ ${premioQuina}`,qtdQuadra.innerHTML=`${ganhadorQuadra} Pessoas`,pQuadra.innerHTML=`R$ ${premioQuadra}`,ms01.innerHTML=`${bola01}`,ms02.innerHTML=`${bola02}`,ms03.innerHTML=`${bola03}`,ms04.innerHTML=`${bola04}`,ms05.innerHTML=`${bola05}`,ms06.innerHTML=`${bola06}`,proximoSorteio.innerHTML=`Próximo Sorteio: ${pSorteio} Prêmio Estimado: R$ ${valorEstimado}`,tConcurso.innerHTML=`Resultado Mega-sena ${concurso} dia ${pSorteio} - ${dataMega}`,sTConcuros.innerHTML=`${acumulaOuGanhaP}Sorteio da mega-sena aconteceu hoje ${dataMega}, com prêmio estimado em R$ ${premioSena} de reais, confira agora mesmo o resultado da mega-sena ${concurso}.`,rMegaA.innerHTML=`No concurso da Mega-sena passado, que foi o <strong>${cMegaPassado}</strong>, <strong>${rAcumulouPassado},</strong> as dezenas sorteadas foram:<strong> ${nS1} - ${nS2} - ${nS3} - ${nS4} - ${nS5} - ${nS6}</strong>. Foram <strong>${ganhadorSena}</strong> apostas vencedoras da sena, <strong>${ganhadorQuina}</strong> vencedores(as) que conseguiram acertar 5 números na (quina) e levaram cada um <strong>R$ ${premioQuina} de reais</strong>. Já com 4 acertos (quadra) foram ${ganhadorQuadra} apostas ganhadoras, ficando cada um com de <strong>R$ ${premioQuadra}</strong> de reais. Confira agora mesmo o resultado da <a href="https://megadehoje.com" target="_blank" rel="follow">Mega de Hoje</a>.`;var a=rMegaA.innerHTML;return res.innerHTML=`${a}`,a}function recarregarPagina(){window.document.location=location}