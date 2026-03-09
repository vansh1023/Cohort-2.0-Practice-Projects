import React from 'react'
import Main from './components/Main/Main'
import About from './components/About/About'
import Services from './components/Services/Services'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Main />
      {/* <About />
      <Services /> */}
    </div>
  )
}

export default App
