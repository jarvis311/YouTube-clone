import React from 'react'
import { useParams } from 'react-router-dom'
import '../style/videoShow.css'
const ShowVideo = () => {
    const { id } = useParams();
    console.log(id);

    const vidioSrc = `https://www.youtube.com/embed/${id}`

    return (
        <div className='videoShow'>
            <div className="videoPlayer">
                <iframe src={vidioSrc} title="vidio player" />
            </div>
        </div>
    )
}

export default ShowVideo