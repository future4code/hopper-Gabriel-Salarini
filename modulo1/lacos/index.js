// Exercícios de interpretação de código

//  1-  Esta criando um laço onde começa imprimindo o valor 0 somando + 1 até o numero 5.

//  2- 
//  a) Numeros acima de 18.
//  b) Para ter acesso ao indice de cada elemento é utilizado apenas o for ou while.

//  3-*, **, ***, ****

//  Exercícios de escrita de código

//  1-

    const pets = Number(prompt("Quantos pets você tem?"))
    const arrayPets = []

//  a)

if (pets === 0){
    console.log("Que pena! Você pode adotar um pet!")
}

//  b)

else if (pets > 0){
    for (let index = 0; index < pets; index++) {
        let nomePets = prompt("Qual o nome deles?")
        arrayPets.push(nomePets);
    }
    
}

//  c)
console.log("O nome dos pets são", arrayPets)


//  2-

    const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//  a)  

    function imprimeValores () {
        console.log (arrayOriginal)
    }
    console.log(imprimeValores())

//  b)
    
    function imprimeValoresDivididos() {
       for (var num of arrayOriginal){
           console.log(num/10)
       }
    }

            

console.log(imprimeValoresDivididos())

//  c)

    const novoArray= []

    let par = 0;
    for(let num of arrayOriginal) {
        if((num % 2 ) === 0) {
            novoArray.push(num)
        }
    }
     
console.log(novoArray)

//  d)

    const arrayStrings = []
    for (var num of arrayOriginal){
        arrayStrings.push(`O elemento do índex ${arrayOriginal.indexOf(num)} é: ${num}`)
    }

console.log(arrayStrings)

//  e)

    const valorMaximo = Math.max(...arrayOriginal)
    const valorMinimo = Math.min(...arrayOriginal)

    console.log(`Valor maximo ${valorMaximo}`)
    console.log(`Valor minimo ${valorMinimo}`)