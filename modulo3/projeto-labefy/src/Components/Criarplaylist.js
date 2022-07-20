import React from "react";
import axios from "axios";

class Criarplaylist extends React.Component {

    state = {
        inputPlaylistName:""
    }

    onChangeInputPlaylistName = (event) => {
        this.setState({inputPlaylistName: event.target.value});
    }

    createPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
        const body = {
            name: this.state.inputPlaylistName
        };
        axios.post(url, body, {
            headers: {
                Authorization: "Gabriel-Salarini-Hopper",
            },
        })
        .then((res) => {
            alert (`Playlist ${this.state.inputPlaylistName} criada com sucesso!`)
            this.setState({inputPlaylistName: ""})
        })
        .catch((err) => alert (err.response.data.message));
    }

    newPlayList = () => {
        if (this.state.playlistValue.length > 0) {
            this.newPlaylist()
        } else {
            alert('Dê um nome a playlist');
        }
    }


    render (){
        
        return(
            <div>
                <h3>Insira sua playlist abaixo</h3>
                <div>
                    <input 
                    placeholder="Insira o nome da playlist"
                    value={this.state.inputPlaylistName}
                    onChange={this.onChangeInputPlaylistName}
                    />
                    <button onClick={this.createPlaylist}>Criar</button>
                </div>
                <button onClick={this.props.vaiTelaPlaylist}>Ir para a lista de playlist</button>
            </div>
        )
    }
}

export default Criarplaylist