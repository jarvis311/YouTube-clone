import React, { useEffect, useState } from 'react'
import Youtube from '../Apis/Youtube'
import { Link } from 'react-router-dom'
import VideoCard from './VideoCard'
import '../style/subscription.css'

const Subscription = () => {


  const [subscription, setSubscription] = useState([])
  const term = ' web devlopment vedio'
  useEffect(() => {
    const getdataExplore = async () => {
      const response = await Youtube.get('/search', {
        params: {
          q: term,
          maxResults: 32,
        }
      });
      console.log(response.data.items);
      setSubscription(response.data.items);
    }
    getdataExplore();
  }, [])

  const renderSubscriptionVideo = subscription.map(video => (
    <div className='subscription' key={video.id.videoId}>
      <Link style={{ textDecoration: 'none', color: 'black' }} to={`/show/${video.id.videoId}`}>
        <VideoCard
          key={video.id.videoId}
          title={video.snippet.title}
          viwes="2M views"
          timestamp="14 hour ago"
          image={video.snippet.thumbnails.medium.url}
          channnel={video.snippet.channelTitle}
        />
      </Link>
    </div>
  ))


  return (
    <div style={{ flex: 0.8 }}>

      <h2 className='subsTitle'>Subscribtion</h2>
      <div className="recommendedVideo_video">
        {renderSubscriptionVideo}
      </div>

    </div>
  )
}

export default Subscription