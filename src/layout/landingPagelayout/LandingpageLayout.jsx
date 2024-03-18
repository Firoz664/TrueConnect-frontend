import React from 'react'
import Header from './Header'
import Home from './Home'
import Feature from './Feature'
import Hero from './Hero'
import PostHero from './PostHero'
import Footer from './Footer'

function LandingpageLayout() {
  return (
    <>
       <div className>
        <Header/>
        <Home/>
        <Feature/>
        <Hero/>
        <PostHero/>
        <Footer/>
       </div>
    </>
  )
}

export default LandingpageLayout