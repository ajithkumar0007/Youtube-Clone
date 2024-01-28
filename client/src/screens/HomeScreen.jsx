import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SmallCard from '../components/SmallCard'
import axios from 'axios';
import { useEffect } from 'react';


export default function HomeScreen() {
    const [videos, setVideo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('/api/search/javascript');
            setVideo(res.data.data.items)
        }
        fetchData()
    }, [])
    return (
        <div className='home-screen'>
            <Navbar />
            <div className='cards' >
                {videos.map((vid) => <SmallCard key={vid.id.videoId}
                    videoId={vid.id.videoId}
                    imgUrl={vid.snippet.thumbnails.default.url}
                    description={vid.snippet.description}
                    channelName={vid.snippet.channelTitle} />)}

            </div>
        </div>
    )
}
