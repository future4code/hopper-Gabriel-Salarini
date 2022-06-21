import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export const LoginPage = () => {
    const navigate = useNavigate()
  
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
  
    const onChangeInputLogin = (event) => {
      const newLogin = event.target.value
      setLogin (newLogin)
    }
  
    const onChangeInputPassword = (event) => {
      const newPassword = event.target.value
      setPassword (newPassword)
    }
  
    const loginFunction = () => {
      const mainUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-salarini-hopper"
  
      const body = {
        email: login,
        password: password
      }
  
      const header = 'Content-Type: application/json'
    
      axios
        .post(`${mainUrl}/login`, body, header)
        .then((res) => {
          localStorage.setItem("token", res.data.token)
          goToAdminHomePage(navigate)
        })
        .catch((err) => {
          alert("Usuário inválido")
        })
    }
  
    return (
      <>
        <div>
          <h2>ACESSO ADMINISTRADOR</h2>
        </div>
        <div>
          <h3>OLÁ VISITANTE!</h3>
          <p><b>Efetuar Login:</b></p>
          <label id="login">Informe o seu Email:</label>
          <div 
            type="email" 
            id="Email..."
            value={login}
            onChange={onChangeInputLogin} 
            required
          />
          <label id="password">Informe a sua senha:</label>
          <div 
            type="password" 
            id="password" 
            value={password}
            onChange={onChangeInputPassword}
            required
          />
          <br />
          <div onClick={loginFunction}>Efetuar Login</div>
          <br />
          <div onClick={() => goToHomePage(navigate)}>Home</div>
        </div>
        <div>
          <p>All rights reserved © 2022</p>
        </div>
      </>
    )
  }
export default LoginPage
