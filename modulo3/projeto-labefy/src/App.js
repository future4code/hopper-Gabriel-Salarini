import React from 'react';
import './App.css';
import Criarplaylist from './Components/Criarplaylist';
import Playlist from './Components/Playlist';


class App extends React.Component {
  state = {
    telaRenderizada: "singUp",
  };

  mudaTela = () => {
    switch (this.state.telaRenderizada) {
      case "singUp":
        return <Criarplaylist vaiTelaPlaylist={this.vaiTelaPlaylist}/>;
      case "listaDePlaylist":
        return <Playlist vaiTelaCriarPlaylist={this.vaiTelaCriarPlaylist}/>;
      default:
        return <h1>Erro! Página não encontrada!</h1>;
    }
  }
  vaiTelaCriarPlaylist = () => {
    this.setState({ telaRenderizada: "singUp" });
  };
  vaiTelaPlaylist = () => {
    this.setState({ telaRenderizada: "listaDePlaylist" });
  };

    render(){
      
      return (
        <div>
          <h1>Bem vindo</h1>
          {this.mudaTela()}
        </div>
      );
    }
  
}

export default App;
