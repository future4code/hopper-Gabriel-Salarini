// Exercícios de interpretação de código

// 1 - Vai aparecer o array completo divido em nome e apelido.

// 2 - Vai aparecer o novoArrayB apenas com os nomes.

// 3 - Vai ser impresso os itens que não possuem chijo como apelido.

// Exercícios de interpretação de código

// 1 - 

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//  a)

    const nomePets = pets.map((pets) => {
        return pets.nome
    })
    
console.log(nomePets)

//  b)

    const salsichaPets = pets.filter((pets) => {
        return pets.raca === "Salsicha" 
    })

console.log(salsichaPets)

//  c)

    const clientesPoodles = pets.filter(item => item.raca === "Poodle").map(item => `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)

console.log(clientesPoodles)

//  2 - 

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  a)

    const nomeProdutos = produtos.map((produtos) => {
        return produtos.nome
    })

console.log(nomeProdutos)

//  b)

    const objetoENomeProdutos = produtos.map(produtos => ({
        nome: produtos.nome, 
        preco: produtos.preco*0.95
    }))
         
console.log(objetoENomeProdutos)

//  c)

    const objetosBebidas = produtos.filter((produtos) => {
        return produtos.categoria === "Bebidas"
    })

console.log(objetosBebidas)

//  d)

    const objetosYpe = produtos.filter ((produtos) => {
        return produtos.nome.includes("Ypê")
        
    })

console.log(objetosYpe)

//  e)

    const arrayFrase = produtos.filter(produtos => produtos.nome.includes("Ypê")).map(produtos=> `Compre ${produtos.nome} por ${produtos.preco}!`)
        
    

console.log(arrayFrase)