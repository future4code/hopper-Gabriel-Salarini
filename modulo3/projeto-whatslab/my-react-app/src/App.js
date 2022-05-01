import React from 'react';
import Principal from './Components/Principal'
import styled from 'styled-components';

const Div = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`

class App extends React.Component {

  render() {

    return (
      <Div>
        <Principal/>
      </Div>
    );
  }
}

export default App;