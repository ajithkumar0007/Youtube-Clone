import React from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'

export default function PlayerScreen() {
  const { id } = useParams();
  const videoUrl = 'https://www.youtube.com/embed/' + id;
  return (
    <div style={{ height: '90vh' }}>
      <ReactPlayer height='100%' width='100%' controls url={videoUrl} />
    </div>
  )
}
