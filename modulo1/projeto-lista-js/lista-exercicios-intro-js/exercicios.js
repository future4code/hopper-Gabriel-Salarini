// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt('Digite a altura do retangulo'))
  const largura = Number(prompt('Digite a largura do retangulo'))
  const alturaRetangulo = altura
  const larguraRetangulo = largura

  console.log (alturaRetangulo*larguraRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt('Em que ano estamos?'))
  const anoNascimento = Number(prompt('Qual o ano em que voce nasceu?'))

  console.log(anoAtual-anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const pesoEmKg = Number(prompt('Quantos kg você pesa?'))
  const alturaEmMetros = Number(prompt('Qual a sua altura?'))

  return peso/(altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt("Digite seu nome!")
  const idadeUsuario = Number(prompt('Digite sua idade!'))
  const emailUsuario = prompt('Digite seu email')
  const nomeUsuario2 = nomeUsuario + ','
  const emailUsuario2 = emailUsuario + '.'

  console.log("Meu nome é " + nomeUsuario2 + " tenho " + idadeUsuario + ' anos, e o meu email é ' + emailUsuario2)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const corfavorita1 = prompt('Digite sua primeira cor favorita')
  const corfavorita2 = prompt('Digite sua segunda cor favorita')
  const corfavorita3 = prompt('Digite sua terceira cor favorita')
  const novaArray = [corfavorita1, corfavorita2, corfavorita3]

  console.log(novaArray)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  

  return string.toUpperCase()
  
}
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let custoIngresso = 1000
  const valorDoIngresso = 20

  return (custo/valorIngresso)

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

  return string1.length == string2.length
  
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  return (array[array.length -1]) 
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = array[0]
  const removerPrimeiro = array.shift(primeiroElemento)
  const ultimoElemento = array[array.length -1]
  const removerUltimo = array.pop(ultimoElemento)

  const novoPrimeiro = array.unshift(ultimoElemento)
  const novoUltimo = array.push(primeiroElemento)
  
  return array

  
    } 





// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  

  return string1.toUpperCase() === string2.toUpperCase()
}
console.log(checaIgualdadeDesconsiderandoCase)

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}

