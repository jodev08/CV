import React from 'react'
import CV from '../../assets/CV_StonskaJordan.pdf'



const cta_test = () => {
  return (
    <div className='cta_test'>
    <a href={CV} download className='btn'>Télécharger mon CV</a>
    < a href='#contact' className='btn btn-primary'>Me contacter</a>
   
</div>
  )
}

export default cta_test