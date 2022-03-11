/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogo de Blackjack!")

    if (confirm("Quer iniciar uma nova rodada?")) {
       console.log("Iniciando nova rodada")
    } else {
       console.log("O jogo acabou")
    }

    const carta = comprarCarta();
    const carta2 = comprarCarta();

    const usuario = {
      texto:carta.texto,
      valor:carta.valor,
      texto2:carta2.texto,
      valor2:carta2.valor
    }
    const pontuaçãoSoma= usuario.valor + usuario.valor2

console.log(usuario)
   
   const carta3 = comprarCarta();
   const carta4 = comprarCarta();

   const computador = {

   texto:carta3.texto,
   valor:carta3.valor,
   texto2:carta4.texto,
   valor2:carta4.valor
}
   const pontuaçãoSoma2 = computador.valor + computador.valor2
console.log(computador)

console.log(`Usuário - cartas: ${usuario.texto} ${usuario.texto2} - pontuação ${pontuaçãoSoma}`)
console.log(`Computador - cartas: ${computador.texto} ${computador.texto2} - pontuação ${pontuaçãoSoma2}`)
    
function resultadoPartida (){
   if(pontuaçãoSoma > pontuaçãoSoma2){
      console.log("O usuário ganhou!")
   }
   else if (pontuaçãoSoma < pontuaçãoSoma2){
      console.log("O computador ganhou!")
   }
   else if (pontuaçãoSoma === pontuaçãoSoma2){
      console.log("Emapte!")
   }
   return 
}
console.log(resultadoPartida())