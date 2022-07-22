
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'
import '../style/ChannelRow.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ChannelRow = ({image, channel, verified, subscriber,noOfVideo,description}) => {
  return (
    <div className='chnnelRow'>
             <AccountCircleIcon className='channel_logo' alt={channel} src={image} />
        <div className="channel_text">
            <h4>{channel} {verified && <CheckCircleIcon/>}</h4>
            <p>{subscriber} subscribers • {noOfVideo} Videos</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ChannelRow