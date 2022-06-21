import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useRequestData } from '../hooks/useRequestData'
import { useNavigate } from 'react-router-dom'
import { goToCreateTripPage, goToTripDetailsPage, goToLoginPage, goToHomePage, goToAdminHomePage } from '../routes/Coordinator'



const AdminHomePage = () => {
  const navigate = useNavigate()

  const token = localStorage.getItem("token")
  const headerContent = 'Content-Type: application/json'
  const mainUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-salarini-hopper"
  const header = {
    headers: {
      headerContent: headerContent,
      auth: token
    }
  }
  const [tripsList, isLoading, error, getData] = useRequestData(`${mainUrl}/trips`, header)

  useEffect (() => {
    if(token === null) {
      goToLoginPage(navigate)
    }
  },[navigate])

  const getTripDetails = (tripID) => {
    localStorage.removeItem("tripId")
    localStorage.setItem("tripId",tripID)
    goToTripDetailsPage(navigate)
  }

  const allTrips = 
  tripsList.trips && tripsList.trips.map((trip) => {
  return <div>
      <li key={trip.id}> <b>
      {trip.name} </b></li>
      <br />
      <Button onClick={() => getTripDetails(trip.id)}>Detalhes da viagem</Button>
      <Button onClick={() => deleteTrip(trip.id)}>Deletar Viagem</Button>
    </div>
  })


  const deleteTrip = (tripID) => {
    axios
    .delete(`${mainUrl}/trips/${tripID}`, header)
    .then((res) => {
      alert("Viagem apagada com sucesso!")
      getData()
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  const goToLogout = () => {
    localStorage.removeItem("token")
    goToLoginPage(navigate)
  }

  return (
    <>
      <div>
        <h2>Administrador - Home</h2>
      </div>
      <div>
      <Button onClick={() => goToCreateTripPage(navigate)}>Criar Nova Viagem</Button>
        <br />
        <Button onClick={() => goToHomePage(navigate)}>Home</Button>
        <br />
        <Button onClick={goToLogout}>Logout</Button>
        <h3>Viagens Cadastradas</h3>
        {allTrips}
        <br />
      </div>
      <div>
        <p>Labex</p>
      </div>
    </>
  )
}

export default AdminHomePage