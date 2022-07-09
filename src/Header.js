import React, { useState } from 'react'
import {Link} from 'react-router-dom' 
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './style/header.css'



const Header = () => {
  const [inputSearch, setInputSearch] = useState("")
  return (
    <div className='header'>
      <div className="header_left">
        <MenuIcon />
        <Link to='/'>
        <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="" />
        </Link>
      </div>

      <div className="header_input">
        <input type="text" onChange={(e) =>setInputSearch(e.target.value)}  placeholder='Search' value={inputSearch} />
        <Link to={`/search/${inputSearch}`}>
        <SearchIcon className='header_inputIcon' />
        </Link>
      </div>

      <div className="header_icons">
        <VideoCallIcon className='header_icon'/>
        <AppsIcon className='header_icon'/>
        <AccountCircleIcon className='header_icon'/>
      </div>

    </div>
  )
}

export default Header