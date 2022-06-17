import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {

    const navigate = useNavigate()

    return(
        <div>
            <p>LabeX</p>
            <button>Ver Viagens</button>
            <button>Área Admin</button>
        </div>
    );
}

  
export default HomePage