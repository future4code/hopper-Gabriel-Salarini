import React from 'react';
import styled from 'styled-components'

const SmallCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    width: 545px;

`

const SmallCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const EditH4SmallContainer = styled.h4`
    margin-bottom: 15px;
`

export default function CardPequeno(props){

    return (
    <SmallCard>
        <SmallCardDiv>
            <EditH4SmallContainer>{ props.informação }</EditH4SmallContainer>
        </SmallCardDiv>
    </SmallCard>
    )
}