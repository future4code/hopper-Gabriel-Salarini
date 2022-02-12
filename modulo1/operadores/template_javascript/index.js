// Exercícios de interpretação de código

//1-

    // a. false
    // b. false
    // c. true
    // d. boolean

//2- o problema esta na concatenação na soma do primeiroNumero + segundoNumero. Sera impresso primerioNumerosegundoNumero.

//3-Isso ocorre porque o retorno da função prompt() é sempre uma string. Então a adição fará a concatenação de ambas. 
    //   Se deseja somar os números precisa converter a variável para um tipo numérico numberprompt().

// Exercícios de escrita de código

// 1 -


    //let idadeUsuario = Number(prompt("Qual sua idade?"))
    //let idadeAmigo = Number(prompt("Qual a idade do seu amigo?"))

    //console.log ("Sua idade é maior do que a do seu amigo?")

    //if (idadeUsuario>idadeAmigo)
        //console.log("true")    

        //else
        //console.log("false")
        
    //console.log(idadeUsuario-idadeAmigo)

// 2 -

    //let numeroPar = Number(prompt("Escolha um numero par")) 
    //let resultado = numeroPar / 2
    //let restoDivisão = resultado % 2
    //console.log (restoDivisão)
    // o resuldo da sempre 0
    // Notei que quando o numero é impar, sobra sempre 0.5 ou 1.5

// 3 -

/*let idadeAnos = Number(prompt("Qual sua idade?"))
let idadeMeses = idadeAnos * 12
let idadeDias = idadeAnos * 365
let idadeHoras = idadeAnos * 8760

console.log(idadeMeses)
console.log(idadeDias)
console.log(idadeHoras)*/

// 4 -

    /*let primeiroNumero = Number(prompt("Digite o primeiro numero"))
    let segundoNumero = Number(prompt("Digite o segundo numero"))

    

    console.log('O primeiro numero é maior que segundo?', primeiroNumero>segundoNumero)
    console.log('O primeiro numero é igual ao segundo?', primeiroNumero===segundoNumero)
    console.log('O primeiro numero é divisível pelo segundo?', primeiroNumero%segundoNumero===0)
    console.log('O segundo numero é divisível pelo primeiro?', segundoNumero%primeiroNumero===0)*/

//Desafio


// 1-
    /*
   a- let fahrenheit1 = 77
    let kelvin = (fahrenheit1 - 32)*0.55 + 273.15
    console.log(kelvin) // 297,9 Kelvin

   b-  let celcius = 80
    let fahrenheit2 = celcius * 1.8 + 32
    console.log(fahrenheit2) // 176 Graus fahrenheit

    c- let celcius2 = 30
    let fahrenheit3 = celcius2 * 1.8 + 32
    let kelvin2 = (fahrenheit3 - 32) * 0.55 + 273.15
    console.log(fahrenheit3, kelvin2)

    d- let celcius3 = Number(prompt("insira o valor em graus celcius"))
    let fahrenheit3 = celcius2 * 1.8 + 32
    let kelvin2 = (fahrenheit3 - 32) * 0.55 + 273.15
    console.log(fahrenheit3, kelvin2)*/

// 2 -
    
    //a- 

    let kwh = 0.05
    console.log("residencia que consome 280kwh paga", kwh * 280, 'reais.')

    //b -

    console.log("com desconto essa residencia vai pagar somente", kwh * 280 * 0.85, 'reais')

// 3 -

    //a-

    let lb = 20
    let kgEmLibras = lb / 2.2046
    console.log("20lb equivalem a", kgEmLibras, "kg")

    //b -

    let oz = 10.5
    let kgEmOz = oz / 35.2
    console.log("10.5oz equivalem a", kgEmOz, "kg")

    