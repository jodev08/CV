import React from 'react';
import './header.css';
import CTA from './cta'
import ME from '../../assets/image_cv.jpeg'
import Social from './socials'

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Bonjour je m'appel</h5>
        <h1>Stonska Jordan</h1>
        <h5 className='text-light'>Developpeur web</h5>
        <CTA></CTA>
        <Social></Social>

        <div className='me'>
          <img src={ME} alt=''></img>
        </div>
      </div>
    </header>
  )
}

export default header