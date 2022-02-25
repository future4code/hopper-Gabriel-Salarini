// Exercícios de interpretação de código

//  1-

//  a) Código pergunta para o usuario um número. Armazena esse numero em uma variavel. No teste, se o retorno(resto) do numero divido por 2
//  for igual a 0 imprime que "passou no teste", se não, imprime que "não passou no teste".

//  b)Numeros inteiros que são divisiveis por 2.

//  c)Numeros inteiros que não são divisiveis por 2.

//---------------------------------------------------------------------------------------------------------------------------------//

//  2-

//  a) Serve para identificar o preço de um produto com o código de forma mais resumida.

//  b)O preço da fruta Maçã é R$ 2.25

//  c)Iria imprimir o preço 5.5 sem parar por estar sem o break.

//----------------------------------------------------------------------------------------------------------------------------------//

//  3-

//  a)A primeira linha esta armazenando uma informação do usuario em uma variavel.

//  b)Se for o numero 10 = "Esse número passou no teste" e depois "Essa mensagem é secreta!!!". Se for -10 = Vai imprimir um erro pois a varialvel mensagem não foi criada.

//  c)Vai imprimir um erro pois a varialvel mensagem só vai ser criada se a condição if for true.


//---------------------------------------------------------------------------------------------------------------------------------//

//Exercícios de escrita de código

//  1-

    const idadeUsuario = Number(prompt("digite sua idade"))

    if (idadeUsuario > 18){
        console.log("voce pode dirigir")
    }
    else{
        console.log("voce não pode dirigir")
    }

//  2-

    const verificaHorarioEstudo = prompt("digite M (se estuda no horario matutino) ou V (Vespertino) ou N (Noturno)")
    const resultadoHorarioEstudo = verificaHorarioEstudo.toUpperCase()
    
    if(resultadoHorarioEstudo == "M"){
        console.log("Bom Dia!")
    }
    else if(resultadoHorarioEstudo == "V"){
        console.log("Boa Tarde!")
    }
    else if(resultadoHorarioEstudo == "N"){
        console.log("Boa Noite!")
    }

//  3-

    const verificaHorarioEstudo2 = prompt("digite M (se estuda no horario matutino) ou V (Vespertino) ou N (Noturno)")
    const resultadoHorarioEstudo2 = verificaHorarioEstudo2.toUpperCase()

    switch (resultadoHorarioEstudo2){
        case 'M':
            console.log("Bom dia!")
            break
        case 'V':
            console.log("Boa tarde!")
            break
        case 'N':
            console.log("Boa noite!")
            break
    }

//  4-(Desafio 1)

    const generoFilme = prompt("Qual o genero do filme?")
    const precoIngresso = Number(prompt("Quanto custa o ingresso?"))
    

    if (generoFilme === "fantasia" && precoIngresso <= 15){
        console.log(`Bom filme!`)  
        const lanchinho = prompt("qual lanche voce vai comprar?")
        console.log(`Aproveite o seu ${lanchinho}`)
    }
    else{
        console.log("Escolha outro filme :(")
    }
    
// Desafio 2

const nomeCompletoUsuario = prompt('digite seu nome completo')
const tipoDeJogo = prompt('digite IN se o jogo for (Internacional) e DO (Domestico)')
const etapaJogo = prompt('digite SF se indica semi-final; DT indica decisão de terceiro lugar; e FI indica final')
const categoria = Number(prompt("digite a categoria, pode ser as opções 1, 2, 3 ou 4;"))
const quantidadeIngressos = Number(prompt("Quantos ingressos vai comprar?"))

console.log(`Nome do cliente: ${nomeCompletoUsuario}`)
//----------------------------------------------------------
if(tipoDeJogo === "IN"){
    
    console.log(`tipo do jogo: Internacional`)
} else {
    console.log(`tipo de jogo: Doméstico`)
}
//--------------------------------------------------------------
if(etapaJogo === "SF"){
    console.log(`Etapa do jogo: Final`)
}   else if(etapaJogo === "DT"){
    console.log(`Etapa do jogo: Decisão do 3º lugar`)
}   else {
    console.log(`Etapa do jogo: Final`)
}
//----------------------------------------------------------------
console.log(categoria)
//-----------------------------------------------------------------
console.log(quantidadeIngressos)
//---------------Valores------------------------------------------
if (categoria === 1 && etapaJogo === 'SF'){
    console.log('Valor do ingresso: R$1320,00')
}
if (categoria === 1 && etapaJogo === 'DT'){
    console.log('Valor do ingresso: R$660,00')
}
if (categoria === 1 && etapaJogo === 'FI'){
    console.log('Valor do ingresso: R$1980,00')
}
if (categoria === 2 && etapaJogo === 'SF'){
    console.log('Valor do ingresso: R$880,00')
}
if (categoria === 2 && etapaJogo === 'DT'){
    console.log('Valor do ingresso: R$440,00')
}
if (categoria === 2 && etapaJogo === 'FI'){
    console.log('Valor do ingresso: R$1320,00')
}
if (categoria === 3 && etapaJogo === 'SF'){
    console.log('Valor do ingresso: R$550,00')
}
if (categoria === 3 && etapaJogo === 'DT'){
    console.log('Valor do ingresso: R$330,00')
}
if (categoria === 3 && etapaJogo === 'FI'){
    console.log('Valor do ingresso: R$880,00')
}
if (categoria === 4 && etapaJogo === 'SF'){
    console.log('Valor do ingresso: R$220,00')
}
if (categoria === 4 && etapaJogo === 'DT'){
    console.log('Valor do ingresso: R$170,00')
}
if (categoria === 4 && etapaJogo === 'FI'){
    console.log('Valor do ingresso: R$330,00')
}

