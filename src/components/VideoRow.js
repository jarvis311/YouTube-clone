import React from 'react'
import '../style/videoRow.css'
const VideoRow = ({ views, subscriber, description, timestamp, channel, title, image }) => {
    return (
        <div className='videoRow'>
            <img src={image} alt={channel} />
            <div className="videoRow_text">
                <h3>{title}</h3>
                <p>{views} viwes • {timestamp} week ago</p>
                <p>{channel} • {subscriber} Subscribers</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default VideoRow