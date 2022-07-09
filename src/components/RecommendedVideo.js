import React, { useEffect, useState } from 'react'
import Youtube from '../Apis/Youtube'
import '../style/recommendedVideo.css'
import VideoCard from './VideoCard'
import  {Link} from 'react-router-dom'


const RecommendedVideo = ({ videos }) => {
  const [videoList, setvideoList] = useState([])

  const term = 'england test highlights'
  useEffect(() => {
    const getdata = async () => {
      const response = await Youtube.get('/search', {
        params: {
          q: term,
          maxResults: 36,
        }
      });
      console.log(response.data.items);
      setvideoList(response.data.items);
    }
    getdata();
  }, [RecommendedVideo])


  const renderVidioList = videoList.map(video => (

    <div key={video.id.videoId}>
      <Link style={{textDecoration:'none', color:'black'}} to={`/show/${video.id.videoId}`}>
      <VideoCard
        title={video.snippet.title}
        viwes="2M views"
        timestamp="14 hour ago"
        image={video.snippet.thumbnails.medium.url}
        channnel={video.snippet.channelTitle}
        channnelImage="https://yt3.ggpht.com/ytc/AKedOLQ1IkePr9q5BHgj3WLQcL8Xn1cm7ScXo2NU-Gz7eQ=s68-c-k-c0x00ffffff-no-rj"
      />
      </Link>
    </div>
  ))


  return (
    <div className='recommendedVideo'>
      <h2>Recommended</h2>
      <div className="recommendedVideo_video">
        {renderVidioList}
      </div>
    </div>
  )
}

export default RecommendedVideo