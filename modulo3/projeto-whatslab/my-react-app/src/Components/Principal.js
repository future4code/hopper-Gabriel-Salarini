import React from 'react';
import styled from 'styled-components';
import App from '../App';

const Container = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    background-color: black;
`

const Lista = styled.div`
    flex-direction: column;
    padding: 0 10px 30px 10px;
    height: 100vh;
    
`

const Balao = styled.p`
    background-color: floralwhite;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 5px 5px 5px grey;
`

const Entrada = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    
`

const Usuario = styled.input`
    width: 150px;
`

const Mensagem = styled.input`
    width: 460px;
`

export class Principal extends React.Component{
    state = {
        mensagens: [],
        inputUsuario: "",
        inputMensagem: ""
    }



    adicionaMensagem = () => {
        const novaMensagem = {
          usuario: this.state.inputUsuario,
          mensagem: this.state.inputMensagem
        };

        const novasMensagens = [...this.state.mensagens, novaMensagem];

        this.setState({mensagens: novasMensagens});

        this.setState({inputUsuario: ""});
        this.setState({inputMensagem: ""});
    }

    onChangeInputUsuario = (event) => {
        this.setState({inputUsuario: event.target.value})
    }

    onChangeInputMensagem = (event) => {
        this.setState({inputMensagem: event.target.value})
    }

    render(){
        const listaDeMensagens = this.state.mensagens.map( (mensagens) => {
            return(
                <Balao>
                  {mensagens.usuario}: {mensagens.mensagem}
                </Balao>
            );
        });

        return (
            <Container>
              <Lista>
                {listaDeMensagens}
              </Lista>
              <Entrada>
                <Usuario
                  value={this.state.inputUsuario}
                  onChange={this.onChangeInputUsuario}
                  placeholder={"Usuário"}
                />
                <Mensagem
                  value={this.state.inputMensagem}
                  onChange={this.onChangeInputMensagem}
                  placeholder={"Mensagem"}
                />
                <button onClick={this.adicionaMensagem}>Enviar</button>
              </Entrada>
            </Container>
        );
    }
} 
export default Principal;