import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Components/Navbar/Navbar'
import Heroine from './Components/Heroine/Heroine'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import CustomCursor from './Components/Cursor/Cursor';
import Cursor from './Components/Cursor/Cursor';

const App = () => {
  return (
    <>
      <Cursor />
      <Navbar />
      <Heroine />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </>
  )
}

export default App