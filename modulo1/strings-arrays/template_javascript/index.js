/* Exercícios de interpretação de código

 1 

    a.
    b. null
    c. 10
    d. 0
    e. 20
    f. 6

 2

    "SUBI NUM ONIBUS EM MIRROCOS"
*/
// Exercícios de escrita de código

// 1-

const nomeDoUsuario = prompt("Digite seu nome!")
const emailDoUsuario = prompt("Digite seu email")

console.log (`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)

// 2-

// a.
const comidasFavoritas = ["arroz", "feijão", "batata", "macarrão", "pudim"]

console.log(comidasFavoritas)

// b.
console.log(`Essas são as minhas comidas preferidas`)
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

// c.
const comidaFavoritaUsuario = prompt("Qual sua comida favorita?")

comidasFavoritas.splice(1, 1, comidaFavoritaUsuario)

console.log(comidasFavoritas)

// 3 -

const listaDeTarefa = []
const primeiraTarefa = prompt("Digite a primeira tafera do dia")
const segundaTarefa = prompt("Digite a segunda tafera do dia")
const terceiraTarefa = prompt("Digite a terceira tafera do dia")

listaDeTarefa.push(primeiraTarefa)
listaDeTarefa.push(segundaTarefa)
listaDeTarefa.push(terceiraTarefa)


console.log(listaDeTarefa)

const tirarIndice = prompt("Digite o indice de uma tarefa que ja realizou: 0, 1 ou 2")
listaDeTarefa.splice(tirarIndice, 1)

console.log(listaDeTarefa)

// Desafio
       const fraseUsuario = "Gabriel dos Santos Salarini";
       const resultadoFrase = fraseUsuario.split(" ", 4);

       console.log(resultadoFrase)

       const frutasLista = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]


       console.log(frutasLista.indexOf("Abacaxi", 2))

// não consegui terminar o desafio


