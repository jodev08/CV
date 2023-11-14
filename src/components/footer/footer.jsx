import React from 'react';
import './footer.css';
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>

      <ul className='permalinks'>
        <li><a href='#'>Accueil</a></li>
        <li><a href='#apropos'>A propos</a></li>
        <li><a href='#experience'>Expérience</a></li>
        <li><a href='#languages'>Languages</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://linkedin.com' target='_blank'><FaLinkedin /></a>
        <a href='https://github.com'><FaGithub /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Stonska Jordan.All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer
