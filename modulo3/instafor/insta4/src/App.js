import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
      postagem: [

        {
          nomeUsuario: "paulinha",
          fotoUsuario:"https://picsum.photos/50/50",
          fotoPost: "https://picsum.photos/200/150"
        },

        {
          nomeUsuario: "joão",
          fotoUsuario:"https://i.ibb.co/4R5PPyW/321-50x50.jpg",
          fotoPost: "https://i.ibb.co/YftyT6H/846-200x150.jpg"
        },

        {
          nomeUsuario: "predro",
          fotoUsuario:"https://i.ibb.co/X5w9q8g/807-50x50.jpg",
          fotoPost: "https://i.ibb.co/MSqSYVy/997-200x150.jpg"
        }
      ],

      valorInputUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""

    };

    adicionaUsuario = () => {
      const novoUsuario = {
        nomeUsuario: this.state.valorInputUsuario,
        fotoUsuario: this.state.valorInputFotoUsuario,
        fotoPost: this.state.valorInputFotoPost
      };

      const novosUsuarios = [... this.state.postagem, novoUsuario];

      this.setState({postagem: novosUsuarios});
    };

    onChangeInputUsuario = (event) => {
      this.setState({valorInputUsuario: event.target.value});
    };

    onChangeInputFotoUsuario = (event) => {
      this.setState({valorInputFotoUsuario: event.target.value});
    };

    onChangeInputFotoPost = (event) => {
      this.setState({valorInputFotoPost: event.target.value});
    };

  render() {

    const listaDePosts = this.state.postagem.map((posts)=> {
      return (<Post key={posts.fotoUsuario}
              nomeUsuario={posts.nomeUsuario}
              fotoUsuario={posts.fotoUsuario}
              fotoPost={posts.fotoPost}
              /> 
            );
    });

    return (
      <MainContainer>
        <div>
            {listaDePosts}
        </div>
        
        <input
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Digite seu Usuario"}
        />
        <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Digite a url da Foto de Perfil"}
        />
        <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Digite a url da Foto do Post"}
        />
        <button onClick={this.adicionaUsuario}>Adicionar novo Post</button>
        
      </MainContainer>
    );
  }
}

export default App;
