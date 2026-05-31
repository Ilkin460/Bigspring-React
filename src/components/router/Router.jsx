import React from 'react'

import { Routes } from 'react-router'
import { Route } from 'react-router'
import Layout from '../../layout/Layout'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Pricing from '../pages/Pricing'
import Contact from '../pages/Contact'
import FAQ from '../pages/FAQ'



function Router() {
  return (
      <>
          {/* Burda biz sehifeler arasi kecit temin edirik */}
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route index element={<Home />} />
                  {/*  Linkde to ya yazilan path yeni url  Routdaki pathla eyni olmaldi  <Route path='/haqqimizda' element={<About />} />  */} 
                  <Route path='/blog' element={<Blog/>}/>
                  <Route path='/pricing' element={<Pricing/>}/>
                  <Route path='/contact' element={<Contact/>}/>
                  <Route path='/faq' element={<FAQ/>}/>
              </Route>
          </Routes>
      
      </>
  )
}

export default Router