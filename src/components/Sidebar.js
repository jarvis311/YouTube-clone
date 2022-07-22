import React, { useState } from 'react'
import '../style/sidebar.css'
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ExploreIcon from '@mui/icons-material/Explore';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
        

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
          <SidebarRow Icon={ThumbUpIcon} title="Liked video"/> 
          <SidebarRow Icon={ExpandCircleDownIcon} title="Show more"/> 
  
      </div> : null
        }

    </React.Fragment>
  );
};

export default Sidebar