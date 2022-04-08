import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Recommendations from './components/recommendations/Recommendations'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Services from './components/services/Services'
import Experience  from './components/experience/Experience'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About /> 
      <Experience />
      <Services /> 
      <Portfolio />
      <Recommendations />
      <Contact />
      <Footer />
    </>
  )
}

export default App;

