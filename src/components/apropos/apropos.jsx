import React from 'react';
import './apropos.css';
import ME from '../../assets/apropos.jpg'

const apropos = () => {
  return (
    <section id='apropos'>
      <h1>A propos de moi</h1>

      <div className='container apropos__container'>
       <div className='apropos'>
        <div className='apropos__image'>
         <img src={ME} alt=''/>
        </div>
       </div>

      </div>
      
    </section>
  )
}

export default apropos