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
  const peso = Number(prompt('Quantos kg você pesa?'))
  const altura2 = Number(prompt('Qual a sua altura?'))

  return peso / (altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
const nomeUsuario = prompt("Digite seu nome!")
const idadeUsuario = Number(prompt('Digite sua idade!'))
const emailUsuario = prompt('Digite seu email')

console.log('Meu nome é', nomeUsuario,'tenho', idadeUsuario, 'anos, e o meu email é', emailUsuario,'.')

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const corfavorita1 = prompt('Digite sua primeira cor favorita')
  const corfavorita2 = prompt('Digite sua segunda cor favorita')
  const corfavorita3 = prompt('Digite sua terceira cor favorita')

  console.log(corfavorita1)
  console.log(corfavorita2)
  console.log(corfavorita3)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {

  return ('oi'.toUpperCase())

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let custo = 1000
  const valorIngresso = 20

  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const string1 = 'primeira string'
  const string2 = 'segunda string'

  return if (string1 > string2)
     

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

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