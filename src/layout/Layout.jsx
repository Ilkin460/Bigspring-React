import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/inc/Header'
import Footer from '../components/inc/Footer'

function Layout() {
  return (
      <>
          {/*  Burda sabit hisseler olur yeni deyismeyen hisslerdio outlet ise deyisen hissedir (meselen sehifeler) */}
          <Header />
          <Outlet/>
          <Footer/>
      
      </>
  )
}

export default Layout