import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
const Home = () => {
  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        <Features></Features>
        <FAQ></FAQ>
        <Banner></Banner>
        <Footer></Footer>
    </>
   
  )
}

export default Home