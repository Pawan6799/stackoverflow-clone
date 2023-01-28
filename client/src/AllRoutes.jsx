import React from 'react'
import {Routes , Route} from 'react-router-dom';

import Home from './Pages/Home';
import Auth from './Pages/Auth';
import Questions from './Pages/Questions';
import AskQuestions from './components/HomeMainbar/AskQuestions'
import DisplayQuestion from './Pages/DisplayQuestion';
import Tags from './Pages/Tags';
import Users from './Pages/Users';
import UserProfile from './Pages/UserProfile';

import About from './Pages/About';

const AllRoutes = () => {
  return (
    <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/Auth' element={<Auth/>}/>
        <Route  path='/Questions' element={<Questions/>}/>
        <Route  path='/AskQuestion' element={<AskQuestions/>}/>
        <Route  path='/Questions/:id' element={<DisplayQuestion/>}/>
        <Route  path='/Tags' element={<Tags/>}/>
        <Route  path='/Users' element={<Users/>}/>
        <Route  path='/Users/:id' element={<UserProfile />} />

        <Route  path='/About' element={<About/>}/>
    </Routes>
    
  )
}

export default AllRoutes