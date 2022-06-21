import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
    const navigate = useNavigate()
  
    return (
      <>
        <div>
          <h2>Home Page</h2>
        </div>
        <div>
          <h3>Bem vindo ao site de viagens espaciais!</h3>
          <h3>Escolha uma opção para começar:</h3>
          <br />
          <div onClick={() => goToListTripsPage(navigate)}>Lista de Viagens</div>
          <div onClick={() => goToAdminHomePage(navigate)}>Acesso Administrador</div>
        </div>
        <div>
          <p>Labex</p>
        </div>
      </>
    )
  }

  
export default HomePage