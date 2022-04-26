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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'joão'}
          fotoUsuario={'https://i.ibb.co/4R5PPyW/321-50x50.jpg'}
          fotoPost={'https://i.ibb.co/YftyT6H/846-200x150.jpg'}
        />

        <Post
          nomeUsuario={'predro'}
          fotoUsuario={'https://i.ibb.co/X5w9q8g/807-50x50.jpg'}
          fotoPost={'https://i.ibb.co/MSqSYVy/997-200x150.jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
