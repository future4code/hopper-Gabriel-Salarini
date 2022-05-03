import React from "react";

export default class Etapa3 extends React.Component {
  render(){
    return (
      <div>
            <h1>Etapa 3 - Informações Gerais de Ensino </h1>
            <h2>7. Por que você não terminou um curso de graduação?</h2>
            <input></input>
            <h2>8. Você fez algum urso complementar?</h2>
            <select name="perguntas-etapa3">
                <option>Nenhum</option>
                <option>Curso técnico</option>
                <option>Curso de inglês</option>         
            </select>
      </div>
    );
  }
}