import React from 'react';
import './experience.css';

const experience = () => {
  return (
    <section id='experience'>
      <h2>Mon expérience</h2>

      <div className='container experience__container'>
        <article className='experiences_professionnelles'>
          <div className='experience_title_principale'>
            <h3>Expériences professionnelles</h3>
            <div className='ligne'></div>
          </div>
          <div className='experience_title_secondaire'>
            <h4>Support technique informatique</h4>
          </div>

          <ul className='fonction_professionelles'>
            <li>
              <p>Création nouveau logiciel</p>
            </li>
            <li>
              <p>Maintenance serveur</p>
            </li>
            <li>
              <p>Assitance informatique</p>
            </li>
            <li>
              <p>Maintenance et modification ancien programme</p>
            </li>
            <li>
              <p>Administration outils informatique</p>
            </li>
            <li>
              <p>veille technologique</p>
            </li>
          </ul>

          {/*----fin apefe----*/}

          <div className='experience_title_secondaire'>
            <h4>Magasinier</h4>
            <h5>Medisupply</h5>
          </div>

          <ul className='fonction_professionelles'>
            <li>
              <p>préparateur de commande</p>
            </li>
            <li>
              <p>Ouvrier polyvalent</p>
            </li>
          </ul>



          
        </article>

        <article className='formation'>
          <div className='experience_title_principale'>
            <h3>Formation</h3>
            <div className='ligne'></div>
          </div>
          <div className='experience_title_secondaire'>
            <h4>TECHNOFUTUR TIC(2019-2020)</h4>
          </div>
          <ul className='fonction_professionelles'>
            <li>
              <p>formation qualifiante : frameworks Angular</p>
            </li>
          </ul>

          <div className='experience_title_secondaire'>
            <h4>TECHNOFUTUR TIC 2018-2019</h4>
          </div>
          <ul className='fonction_professionelles'>
            <li>
              <p>Formation qualifiante : dev.net pour système
                 d'information d'entreprise</p>
            </li>
          </ul>
          <div className='experience_title_secondaire'>
            <h4>ipfc promotion social(Nivelles)</h4>
          </div>
          <ul className='fonction_professionelles'>
            <li>
              <p>Actuellement en cours du soir pour approfondir mes
                 connaissances linguistiques en anglais</p>
            </li>           
          </ul>
          <div className='experience_title_secondaire'>
            <h4>Enseignement secondaire</h4>
          </div>
          <ul className='fonction_professionelles'>
            <li>
              <p>Comptabilité (gestion)</p>
            </li>           
          </ul>
        </article>
      </div>
    </section>
  )
}

export default experience