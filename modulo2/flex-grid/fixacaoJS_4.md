```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let quantidade = 0
    
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] === numeroEscolhido){
          quantidade ++
        }
    }
    
    if (quantidade === 0) {
      return "N�mero n�o encontrado"
    } 
    else {
      return "O n�mero " + numeroEscolhido + " aparece " + quantidade + "x"
    }
}```