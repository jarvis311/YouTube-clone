import React from 'react'
import { BrowserRouter, Routes,Route } from "react-router-dom";

import RecommendedVideo from './components/RecommendedVideo';
import Sidebar from './components/Sidebar';
import Header from './Header';
import './App.css'
import Explore from './components/Explore';
import Subscription from './components/Subscription';
import Shorts from './components/Shorts';
import ShowVideo from './components/ShowVideo';
import ShowSearchVideo from './components/ShowSearchVideo';


function App() {

  
  return (

    <div className="App">

      <BrowserRouter>
        <Header />

          <div className="app_pages">
          <Routes>
            <Route path='/' element={<React.Fragment><Sidebar/> <RecommendedVideo/></React.Fragment>} />
            <Route path='/search' element={<React.Fragment><Sidebar/><ShowSearchVideo/></React.Fragment>} />
            <Route path='/explore' element={<React.Fragment><Sidebar/><Explore/></React.Fragment>} />
            <Route path='/subscription' element={<React.Fragment><Sidebar/><Subscription/></React.Fragment>} />
            <Route path='/shorts' element={<React.Fragment><Sidebar/><Shorts/></React.Fragment>} />
            <Route path='/show/:id' element={<React.Fragment><Sidebar/><ShowVideo/></React.Fragment>} />
         </Routes>
          </div>

      </BrowserRouter>


    </div>
  );
}

export default App;
