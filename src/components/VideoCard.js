import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const VideoCard = ({image, title, channnel, viwes, timestamp,channnelImage}) => {
  return (
    <div className='videoCard'>
        <img className='videoCardImage' src={image}  alt="" />
        <div className="videoCard_info">
            <AccountCircleIcon alt={channnel} src={channnelImage} className='videoCard_avatar' />
            <div className="videoCard_text">
                <h4>{title}</h4>
                <p>{channnel}</p>
                <p>{viwes} . {timestamp}</p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard