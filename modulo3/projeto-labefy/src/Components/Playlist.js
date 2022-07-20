import React from "react";
import axios from "axios";
import styled from "styled-components";

class Playlist extends React.Component {

    state = {
        listaDePlaylist: []
    }

    getAllPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

        const body = {


        };
        axios
        .post(url, body, {
        headers: {
          Authorization: "Gabriel-Salarini-Hopper",
        },
      })
            .then ((res) => {
                this.setState({listaDePlaylist: res.data});
            })
            .catch((err) => console.log(err.response));
    }

    render(){

        const listaDePlaylistRenderizada = this.state.listaDePlaylist.map((playlt) => {
            return (
                <div key={playlt.id}>
                    <p>{playlt.name}</p>
                    <button>Apagar playlist</button>
                </div>
            )
        })

        return(
            <div>
                <h3>Playlists</h3>
                {listaDePlaylistRenderizada}
                <button onClick={this.props.vaiTelaCriarPlaylist}>Ir para Criar Playlists</button>
            </div>
        );
    }
}

export default Playlist