import React from 'react'
import { search } from '../features/searchSlice';
import {useSelector} from 'react-redux'
import VideoRow from './VideoRow';
import { Link } from 'react-router-dom';


const ShowSearchVideo = () => {

    const searchVideoList = useSelector(search)
    console.log('>>>>>>>>>>>hdfsib',searchVideoList.payload.searchdata.search.searchdata)

    const data = searchVideoList.payload.searchdata.search.searchdata.map( d => (
    <Link style={{textDecoration:'none', color:'black'}} to={`/show/${d.id.videoId}`}>
    <VideoRow
    views="3.5M"
    subscriber="6.3M"
    description={d.snippet.description}
    timestamp="2"
    channel={d.snippet.channelTitle}
    title={d.snippet.title}
    image={d.snippet.thumbnails.medium.url}
    />
    </Link>
    
    ))

    

  return (
    <div className='showVideo' style={{flex:'0.8'}}>
        {data}
    </div>
  )
}

export default ShowSearchVideo