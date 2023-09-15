import React from 'react'
import Navi from './Navi'
import { Outlet } from 'react-router-dom'
import DarkMood from './DarkMood'

const Layout = () => {
  return (
    <>
        <Navi/>
        <DarkMood/>
        <Outlet/>
    </>
  )
}

export default Layout