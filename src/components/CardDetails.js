import React from 'react'
import { useParams } from 'react-router-dom';

function CardDetails() {
    let id = useParams();
    return (
        <div className='cardDetails'>{id.exchangeId}</div>
    )
}

export default CardDetails