// Exercícios de interpretação de código

// 1 -
//  a) Matheus Nachtergaele, Virginia Cavendish, Globo 14h.

// 2 -
//  a) Juca, Juba, Jubo
//  b) Cria uma cópia do objeto (array)

// 3 -
//  a) false, undefined
//  b) porque a propriedade backender essa sendo atribuida como false, ou seja, ele não é backender, e undefined porque não foi definido nenhuma propriedado "altura".


// Exercícios de escrita de código

//  1-
//  a)
    const pessoa = {
        nome: "Gabriel",
        apelidos: ["Biel", "Gabi", "Gabri"]
    }


    function apelidosPessoais(pessoa) {
        const frase = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}.`
        return frase
    }
    console.log(apelidosPessoais(pessoa))

//  b)
    const novaPessoa = {
        ...pessoa,
        apelidos: ["x", "y", "z"]
    }
    
    console.log(apelidosPessoais(novaPessoa))
    
//  2-
//  a)
    const objeto1 = {
        nome:"Leonardo",
        idade: 24,
        profissao:"Medico"
    }
    
    const objeto2 = {
        nome:"Bruno",
        idade: 20,
        profissao:"Fotografo"
    }

//  b)
    function detalhesObjeto(parametroObjeto){
        
        return [parametroObjeto.nome, parametroObjeto.nome.length, parametroObjeto.idade, parametroObjeto.profissao, parametroObjeto.profissao.length]
    }
    console.log(detalhesObjeto(objeto1))
    console.log(detalhesObjeto(objeto2))

//  3 -
//  a)
    const carrinho = []

//  b)
    const fruta1 = {
        nome: "Banana",
        disponibilidade: true
    }
    const fruta2 = {
        nome: "Maça",
        disponibilidade: true
    }
    const fruta3 = {
        nome: "Melancia",
        disponibilidade: true
    }
//  c)
    function sacola (fruta){
        carrinho.push(fruta)
        return [fruta1, fruta2, fruta3]
    }
//  d)
    console.log(sacola(carrinho))
    