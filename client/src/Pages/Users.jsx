import React from 'react'

import '../PagesCss/Users.css'
import LeftSidebar from '../components/LeftSidebar'
import UsersList from './UsersList'

const Users = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "900" , fontSize:"35px" , marginTop:"50px"}}>Users</h1>
        <UsersList />
      </div>
    </div>
  )
}

export default Users