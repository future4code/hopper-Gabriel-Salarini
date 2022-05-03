import React from "react";

export default class Etapa1 extends React.Component {
  render(){
    return (
      <div>
        <h1>Etapa 1 - Dados Gerais</h1>
        <h2>1. Qual o seu nome?</h2>
        <input></input>
        <h2>2. Qual sua idade?</h2>
        <input></input>
        <h2>3. Qual seu email?</h2>
        <input></input>
        <h2>4. Qual a sua escolaridade?</h2>
        <select name="perguntas">
            <option>Ensino médio incompleto</option>
            <option>Ensino médio completo</option>
            <option>Ensino superior incompleto</option>
            <option>Ensino superior completo</option>
        </select>
      </div>
    );
  }
}