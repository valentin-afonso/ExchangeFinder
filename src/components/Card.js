import React from 'react'
import './Card.css';
import { Link } from "react-router-dom";

function Card({ exchangeResume }) {
    return (
        <div className='card'>
            <Link to={`/details/${exchangeResume.id}`}>
                <h3>{exchangeResume.name}</h3>
                <p>Adjusted volume 24h share: {exchangeResume.adjusted_volume_24h_share}</p>
            </Link>
        </div >
    )
}

export default Card