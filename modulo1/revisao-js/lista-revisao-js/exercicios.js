// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    
    return array.length   
} 

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function compararFuncao(a, b){
        return a - b
    }
    return array.sort(compararFuncao)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numeroPar = []
    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            numeroPar.push(array[i])
        }
    }           
    return numeroPar
}
    



// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numeroPar = []
    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            numeroPar.push(array[i]*array[i])
        }
    }           
    return (numeroPar)
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max.apply(null, array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let meuObjeto = {
        maiorNumero: 0,
        maiorDivisivelPorMenor: true,
        diferenca: 0
    }
    if (num1 > num2) {
        meuObjeto.maiorNumero = num1
        meuObjeto.maiorDivisivelPorMenor = (num1 % num2 === 0)
        meuObjeto.diferenca = num1 - num2
    } else {
        meuObjeto.maiorNumero = num2
        meuObjeto.maiorDivisivelPorMenor = (num2 % num1 === 0)
        meuObjeto.diferenca = num2 - num1
    }

    return meuObjeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let nNumerosPar = []
    let i = 0
    let num2 = 0
    while (i < n) {
        nNumerosPar.push(num2)
        num2 += 2
        i++
    }
    return nNumerosPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
    }
    else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC ){
        return "Isósceles"
    }
    else{
        return "Escaleno"
    }
    return classificaTriangulo()
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let apenasDoisValores = array.sort((a,b)=> a - b)

    return [apenasDoisValores[apenasDoisValores.length-2], apenasDoisValores[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}