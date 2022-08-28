import React from 'react'
import Header from './components/header/Header'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portolio'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import About from './components/about/About'

export const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>

    </>
  )
}
export default App;