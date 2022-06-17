import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {

    const navigate = useNavigate()
    return(
        <div>
            <p>Login</p>
            <input placeholder="Email"></input>
            <input placeholder="Senha"></input>
            <button>Voltar</button>
            <button>Entrar</button>
        </div>
    );
}    
export default LoginPage
