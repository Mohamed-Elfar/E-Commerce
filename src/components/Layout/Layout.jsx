import React from 'react'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Outlet/>
    <Footer/>
    </>
  )
}
