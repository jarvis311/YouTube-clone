import React, { useEffect, useState } from 'react'
import '../style/explore.css'
import ExploreCatagory from './ExploreCatagory'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import DescriptionIcon from '@material-ui/icons/Description';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import VideoRow from './VideoRow';
import Youtube from '../Apis/Youtube';



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
            <ExploreCatagory Icon={WhatshotIcon} title="Trending" />
            <ExploreCatagory Icon={MusicNoteIcon} title="Music" />
            <ExploreCatagory Icon={LocalMoviesIcon} title="Movies" />
            <ExploreCatagory Icon={LiveTvIcon} title="Live" />
            <ExploreCatagory Icon={SportsEsportsIcon} title="Gaming" />
            <ExploreCatagory Icon={DescriptionIcon} title="News" />
            <ExploreCatagory Icon={SportsCricketIcon} title="Sport" />
            <ExploreCatagory Icon={EmojiObjectsIcon} title="Learning" />
        </div>
        <div className='exploreVideioList'>
            {renderExploreVideo}
        </div>
        
    </div>
  )
}

export default Explore