import React from 'react'
import styled from 'styled-components'

import { useNavigate } from 'react-router-dom'


export default function ListTripsPage() {

    const navigate = useNavigate()

    return(
        <div>
            <button>Voltar</button>
            <button>Inscrever-se</button>
            <p>Lista de Viagens</p>
        </div>
    );
}
