import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import './style/header.css'
import Youtube from './Apis/Youtube';
import ShowSearchVideo from './components/ShowSearchVideo';
import { useDispatch } from 'react-redux';
import { search } from './features/searchSlice';



const Header = () => {
  const [inputSearch, setInputSearch] = useState("")
  const [term, setTerm] = useState(null)
  console.log(term);
  const dispatch = useDispatch()
  const onclick = () => {
    setTerm(inputSearch)
  }
  const [videoList, setvideoList] = useState([])




  useEffect(() => {
    const getdata = async () => {
      const response = await Youtube.get('/search', {
        params: {
          q: term,
          maxResults: 36,
        }
      });

      console.log(">>>>>>>>>>", response.data.items);
      setvideoList(response.data.items);
    }
    getdata();
  }, [term])

  dispatch(search({
    searchdata: videoList
  }))

  return (
    <React.Fragment>

      {
        term === ! '' ? <ShowSearchVideo data={videoList} /> :

          <div className='header'>
            <div className="header_left">
              {/* <MenuIcon /> */}
              <Link to='/'>
                <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="" />
              </Link>
            </div>
            <form className="header_input">
              <input type="text" onChange={(e) => setInputSearch(e.target.value)} placeholder='Search' value={inputSearch} />
              <Link to='/search'>
                <SearchIcon onClick={onclick} className='header_inputIcon' />
              </Link>
            </form>
            <div className="header_icons">
              <VideoCallIcon className='header_icon' />
              <AppsIcon className='header_icon' />
              <AccountCircleIcon className='header_icon' />
            </div>

          </div>
      }



    </React.Fragment>
  )
}

export default Header