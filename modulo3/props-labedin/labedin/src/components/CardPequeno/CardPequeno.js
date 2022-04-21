import React from 'react';
import './CardPequeno.css'

export default function CardPequeno(props){

    return (
    <div className="smallcard-container">
        <div>
            <h4>{ props.informação }</h4>
        </div>
    </div>
    )
}