import React from 'react'
import './Card.css';

function Card({ exchangeResume }) {
    return (
        <div className='card'>
            <h3>{exchangeResume.name}</h3>
            <p>Adjusted volume 24h share: {exchangeResume.adjusted_volume_24h_share}</p>
        </div>
    )
}

export default Card