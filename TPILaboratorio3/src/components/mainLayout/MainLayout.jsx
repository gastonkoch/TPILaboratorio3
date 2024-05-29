import React from 'react'
import NavBar from '../navBar/NavBar'
import './MainLayout.css'


const MainLayout = ({children}) => {
  return (
    <div className='divFather'>
        <NavBar />
        {children}
    </div>
  )
}

export default MainLayout