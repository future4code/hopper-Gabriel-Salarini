import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

export default class App extends React.Component {
  state = {
    etapa: 1
  };

    renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1 />;
          
        case 2:
          return <Etapa2 />;
          
        case 3:
          return <Etapa3 />
          
        case 4:
          return <Final />
      }
    }
    irParaProximaEtapa = () =>{
      this.setState({etapa: this.state.etapa + 1})
    }

  render(){
    return (
      <div>
        {this.renderizaEtapa()}
        {/* <Etapa2></Etapa2> */}
        {/* <Etapa1></Etapa1> */}
        {/* <Etapa3></Etapa3> */}
        {/* <Etapa4></Etapa4> */}
        {this.state.etapa < 4 &&(<button onClick={this.irParaProximaEtapa}>Próxima etapa</button>)}
      </div>
    );
  }
}


