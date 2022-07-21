import React from 'react'
import '../style/searchVideo.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
const SearchVideo = () => {
  return (
    <div className='searchVideo'>
      <div className="searchVideo_filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AKedOLQ1IkePr9q5BHgj3WLQcL8Xn1cm7ScXo2NU-Gz7eQ=s176-c-k-c0x00ffffff-no-rj"
        channel="England & Wales Cricket Board"
        verified="verified"
        subscriber="6.31M subscriber"
        noOfVideo="5964"
        description="Welcome to the England and Wales Cricket Board's official YouTube channel - bringing you the best content from across the ..."

      />
      <hr />
    </div>
  )
}

export default SearchVideo