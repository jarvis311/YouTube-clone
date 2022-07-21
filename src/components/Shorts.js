import React, { useEffect, useState } from 'react'
import Youtube from '../Apis/Youtube'
import VideoRow from './VideoRow'
import { Link } from 'react-router-dom'
const Shorts = () => {

  const [shortVideo, setShortVideo] = useState([])
  const term = 'funny short video '
  useEffect(() => {
    const getdataExplore = async () => {
      const response = await Youtube.get('/search', {
        params: {
          q: term,
          maxResults: 13,
        }
      });
      console.log(response.data.items);
      setShortVideo(response.data.items);
    }
    getdataExplore();
  }, [])


  const renderShortVideo = shortVideo.map(video => (
    <div key={video.id.videoId}>

    <Link style={{textDecoration:'none', color:'black'}} to={`/show/${video.id.videoId}`}>
      <VideoRow
         
         views="3.5M"
         subscriber="6.3M"
         description="Watch match highlights from Day 1 the 1st LV= Insurance Test between England and New Zealand at Trent Bridge."
         timestamp="2"
         channel={video.snippet.channelTitle}
         title={video.snippet.title}
         image={video.snippet.thumbnails.medium.url}
         />
    </Link>
</div>
  ))

  return (
    <div style={{ flex: '0.8' }}>
      {renderShortVideo}
    </div>
  )
}

export default Shorts