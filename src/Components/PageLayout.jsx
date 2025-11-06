import React from 'react'
import Navbar from './Navbar'
import SignInPage from './SignInPage'
import Cards from './Cards'
import Add_your_own from './Add_your_own'
import Testimonals from './Testimonals.jsx'
import HeroSection from './HeroSection.jsx'
import FooterSection from './FooterSection.jsx'
function PageLayout() {
  return (
    <div className='d-flex flex-column'>
        <Navbar/>   
        <SignInPage/>
        <Cards/>
        <Add_your_own/>
        <Testimonals/>
        <HeroSection/>
        <FooterSection/>
    </div>
  )
}

export default PageLayout