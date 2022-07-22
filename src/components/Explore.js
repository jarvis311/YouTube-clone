import React, { useEffect, useState } from 'react'
import '../style/explore.css'
import ExploreCatagory from './ExploreCatagory'
import VideoRow from './VideoRow';
import Youtube from '../Apis/Youtube';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import DescriptionIcon from '@mui/icons-material/Description';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';;




const Explore = () => {
 
  const [videoListInExplore, setVideoListInExplore] = useState([])
  const term = 'explore video'
  useEffect(() => {
    const getdataExplore = async () => {
      const response = await Youtube.get('/search', {
        params: {
          q: term,
          maxResults: 36,
        }
      });
      console.log(response.data.items);
      setVideoListInExplore(response.data.items);
    }
    getdataExplore();
  }, [])

  const renderExploreVideo = videoListInExplore.map(video => (
    <VideoRow
        views="3.5M"
        subscriber="6.3M"
        description="Watch match highlights from Day 1 the 1st LV= Insurance Test between England and New Zealand at Trent Bridge."
        timestamp="2"
        channel={video.snippet.channelTitle}
        title={video.snippet.title}
        image={video.snippet.thumbnails.medium.url}
      />
  ))
  
  return (
    <div className='explore'>
        <div className="catagory">
            <ExploreCatagory Icon={WhatsAppIcon} title="Trending" />
            <ExploreCatagory Icon={MusicNoteIcon} title="Music" />
            <ExploreCatagory Icon={LocalMoviesIcon} title="Movies" />
            <ExploreCatagory Icon={LiveTvIcon} title="Live" />
            <ExploreCatagory Icon={SportsEsportsIcon} title="Gaming" />
            <ExploreCatagory Icon={DescriptionIcon} title="News" />
            <ExploreCatagory Icon={SportsCricketIcon} title="Sport" />
            <ExploreCatagory Icon={EmojiEmotionsIcon} title="Learning" />
        </div>
        <div className='exploreVideioList'>
            {renderExploreVideo}
        </div>
        
    </div>
  )
}

export default Explore