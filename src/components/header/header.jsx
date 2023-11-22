import React from 'react'
import './header.css'
import ME from '../../assets/image_cv.jpeg'
import Cta_test from './cta_test'
import Social from './social'

const test_header = () => {
  return (
   
   <section id='test_header'>
    <div className='container header__container'>

     <div className='hero-left'>
     <h5>Bonjour je m'appel</h5>
        <h1>Stonska Jordan</h1>
        <h5 className='text-ligh
        t'>Developpeur web</h5>
        <Cta_test></Cta_test>
        <Social></Social>
            
     </div>

     <div className='flexCenter hero-right'>
      <div className='image-container'>
       <img src={ME} alt='' />
      </div>
      
       

     </div>

    </div>
   </section>
  )
}

export default test_header