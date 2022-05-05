import React from 'react';
import styled from 'styled-components'

    const BigCardContainer = styled.div`
        display: flex;
        align-items: center;
        border: 1px solid black;
        padding: 20px 10px;
        margin-bottom: 10px;
        height: 200px;
    
    `

    const ImagemCardGrande = styled.img`
        width: 70px;
        margin-right: 10px;
        border-radius: 50%;
    
    `

    const ParteEscritaDiv = styled.div`
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
    
    `

    const EditH4 = styled.h4`
        margin-bottom: 15px;
    
    `


function CardGrande(props) {
    return (
        <BigCardContainer>
            <ImagemCardGrande img src={ props.imagem }/>
            
            <ParteEscritaDiv>
                <EditH4>{ props.nome }</EditH4>
                <p>{ props.descricao }</p>
            </ParteEscritaDiv>
        </BigCardContainer>
    )
}

export default CardGrande;