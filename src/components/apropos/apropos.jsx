import React from 'react';
import './apropos.css';
import ME from '../../assets/apropos.jpg'

const apropos = () => {
  return (
    <section id='apropos'>
      <h2>A propos de moi</h2>

      <div className='container apropos__container'>
       <div className='apropos'>
        <div className='apropos__image'>
         <img src={ME} alt=''/>
        </div>
        
       </div>
       <div className='apropos_text'>
        <ul>
          <li>
            <p>Enthousiaste développeur web passionné par la création de solutions innovantes et performantes. Avec une solide formation en informatique et une expérience pratique dans le développement web, je suis constamment motivé par le désir de repousser les limites technologiques. Mon approche axée sur la résolution de problèmes et ma capacité à apprendre rapidement me permettent de concevoir des applications web élégantes et efficaces.</p>
          </li>

          <li>
            <p>Ma passion pour le développement web va au-delà du simple codage. Je m'efforce de comprendre les besoins spécifiques de chaque projet pour fournir des solutions sur mesure qui dépassent les attentes. Mon engagement envers la qualité du code, la maintenabilité et la satisfaction du client est au cœur de mon travail.</p>
          </li>
          <li>
            <p>Compétent dans plusieurs langages de programmation, y compris HTML, CSS, JavaScript, et des frameworks modernes tels que React et Node.js, je suis capable de transformer des idées créatives en applications fonctionnelles. Mon expérience dans la gestion de bases de données, l'intégration d'API et le développement d'interfaces utilisateur réactives renforce ma polyvalence dans le domaine du développement web.</p>
          </li>
          <li>
            <p>J'ai eu l'occasion de travailler sur divers projets, de la conception de sites web responsives à la création d'applications web complexes. Mon engagement envers les meilleures pratiques de développement, couplé à ma curiosité naturelle, m'aide à rester à jour avec les dernières tendances et technologies émergentes.</p>
          </li>
          <li>
            <p>En rejoignant une équipe dynamique, je suis prêt à contribuer avec mes compétences techniques, ma créativité et ma passion pour le web. Mon objectif est de collaborer avec d'autres professionnels pour créer des expériences en ligne exceptionnelles qui repoussent les frontières de ce qui est possible.</p>
          </li>

        </ul>
       
    </div>
      </div>
      
    </section>
  )
}

export default apropos

