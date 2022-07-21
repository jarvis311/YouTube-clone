import React, { useState } from 'react'
import '../style/sidebar.css'
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import ExploreIcon from '@material-ui/icons/Explore';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
        

const Sidebar = () => {
      const [sidebarDisplay, setSidebarDisplay] = useState(true)
 
      const onclick = () => {
        setSidebarDisplay(!sidebarDisplay)
      }
   
  return (
    <React.Fragment>
      <MenuIcon onClick={onclick}/>
      
        {
          sidebarDisplay ?
          <div className='sidebar'>
          <Link style={{ textDecoration: 'none',color:'black'}} to="/"><SidebarRow selected Icon={HomeIcon} title="Home"/></Link>
          <Link to="/shorts" style={{ textDecoration: 'none',color:'black'}}><SidebarRow Icon={WhatshotIcon} title="Shorts"/></Link>
          <Link to="/subscription" style={{ textDecoration: 'none',color:'black'}}><SidebarRow Icon={SubscriptionsIcon} title="Subscription"/></Link>
          <Link style={{ textDecoration: 'none',color:'black'}} to="/explore"><SidebarRow Icon={ExploreIcon} title="Explore"/> </Link>
  
          <hr />
          <SidebarRow Icon={VideoLibraryIcon} title="Library"/> 
          <SidebarRow Icon={HistoryIcon} title="History"/> 
          <SidebarRow Icon={OndemandVideoIcon} title="Your Video"/> 
          <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/> 
          <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked video"/> 
          <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/> 
  
      </div> : null
        }

    </React.Fragment>
  );
};

export default Sidebar