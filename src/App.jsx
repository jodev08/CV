import React from 'react';
import Nav from './components/navbar/navbar';
import Apropos from './components/apropos/apropos';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import Language from './components/languages/languages';
import Header from './components/header/header';

const App = () => {
  return (
    <>
     
     <Header />
   
    <Nav />
    
    <Apropos />
    <Experience />
    <Language/>
  
    <Contact />
   
    <Footer />


    
    </>
  )
}

export default App