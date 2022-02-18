// 1 -
    // a- 10, 20
    // b- A função apenas armazenaria o codigo mas não seria impresso nada no console.
    
// 2 -

    // a- A função ira imprimir o texto do usuario em lowercase e ira determinar se a palavra cenoura esta no texto.
    // b- No meu console apareceu "True" nas 3 saidas

    

// 1 - 1. Escreva as funções explicadas abaixo:
    
//    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

function minhasInformacoes () {
   const quemSouEu= "Eu sou Gabriel, tenho 24 anos, moro em Foz do Iguaçu e sou estudante."
}
//    b)

function meusParametros (nome, idade, cidade, profissao) {
    const meuNome = "Gabriel"
    const minhaIdade = 24
    const minhaCidade = "Foz do Iguaçu"
    const minhaProfissão = "Estudante"

    return (`Eu sou ${meuNome}, tenho ${minhaIdade} anos, moro em ${minhaCidade} e sou ${minhaProfissão}.`)
}

console.log(meusParametros())

// 2 - 

//  a)
    
    function soma1 (numero1, numero2) {
        const resultadoSoma = numero1 + numero2
        
        return resultadoSoma
    }   

    console.log(soma1(2, 5))

//  b)

    function numeroBooleanos (boolean1, boolean2){
        const resultadoBoolean = boolean1 >= boolean2

        return resultadoBoolean
    }

    console.log(numeroBooleanos(4, 5))

//  c)

    function numeroPar (numero){
        const inteiro = numero
        if(inteiro % 2 == 0){
            alert("par")
        }
        else{
            alert("impar")
        }
        return inteiro
    }   

    console.log(numeroPar(3))

// d) 

    function mensagem (string){

        const mensagemDeAgora = "Estou muito feliz!"
        const capslock = mensagemDeAgora.toUpperCase()
        const tamanhoMensagem = mensagemDeAgora.length

        return [capslock, tamanhoMensagem]
    }

    console.log (mensagem())

// 3 -

    function operacoesBasicas (){

        const primeiroNumeroUsuario = Number(prompt('digite o primeiro numero'))
        const segundoNumeroUsuario = Number(prompt('digite o segundo numero'))

        const soma2 = primeiroNumeroUsuario + segundoNumeroUsuario
        const subtracao2 = primeiroNumeroUsuario - segundoNumeroUsuario
        const multiplicacao2 = primeiroNumeroUsuario * segundoNumeroUsuario
        const divisao2 = primeiroNumeroUsuario / segundoNumeroUsuario

        return [soma2, subtracao2, multiplicacao2, divisao2]
    } 
        console.log(operacoesBasicas())
