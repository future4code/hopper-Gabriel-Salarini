```function filtraTarefas() {
  const tarefas = [
    { titulo: "Fazer Remember", status: "done", tempo: 30 },
    { titulo: "Fazer Challange", status: "todo", tempo: 30 },
    { titulo: "Assistir Aula", status: "done", tempo: 120 },
    { titulo: "Fazer almo�o nutritivo", status: "done", tempo: 60 },
    { titulo: "Ler atentamente exerc�cios do dia", status: "doing", tempo: 20 },
    { titulo: "Fazer exerc�cio do dia", status: "doing", tempo: 180 },
    { titulo: "Fazer desafio", status: "doing", tempo: 60 },
    { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
    { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
    { titulo: "Enviar Exerc�cio", status: "todo", tempo: 15 },
    { titulo: "Jogar Videogame", status: "todo", tempo: 120 },
    { titulo: "Assistir Novela", status: "todo", tempo: 90 }
 ]

let novoArray = tarefas.filter((tarefas) => tarefas.status === "done")
.map((tarefas) => tarefas.titulo)
return novoArray

}```