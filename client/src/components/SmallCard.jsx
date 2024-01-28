import React from 'react'
import { Link } from 'react-router-dom'


export default function SmallCard({ imgUrl, description, channelName, videoId }) {
    const playerUrl = `/player/${videoId}`;
    console.log(playerUrl);
    return (

        <div className='small-card' >
            <Link to={playerUrl}><img src={imgUrl}></img> </Link>
            <p>{description}</p>
            <p>{channelName}</p>
        </div>

    )
}
