import React from 'react'
import './languages.css'

const languages = () => {
  return (
    <section id="languages">
        <h2>Languages</h2>
      
        <div className='container languages__container'>
            <article className='language'>
                <div className='service_title'>
                    <h3>Frontend</h3>
                </div>

                <ul className='languages_list'>
                    <li>
                        <p>html</p>
                    </li>
                    <li>
                        <p>CSS</p>
                    </li>
                    <li>
                        <p>Boostrap</p>
                    </li>
                    <li>
                        <p>React</p>
                    </li>
                    <li>
                        <p>javascript</p>
                    </li>
                    <li>
                        <p>jquery</p>
                    </li>
                    
                </ul>
            </article>
            {/* fin frontend */}

            <article className='language'>
                <div className='service_title'>
                    <h3>Backend</h3>
                </div>

                <ul className='languages_list'>
                    <li>
                        <p>Python</p>
                    </li>
                    <li>
                        <p>Php</p>
                    </li>
                    <li>
                        <p>sql</p>
                    </li>
                    <li>
                        <p>Ruby</p>
                    </li>
                    <li>
                        <p>Nodejs</p>
                    </li>
                    <li>
                        <p>c#</p>
                    </li>
                    
                </ul>
            </article>

             {/* fin backend*/}

             <article className='language'>
                <div className='service_title'>
                    <h3>Systeme</h3>
                </div>

                <ul className='languages_list'>
                    <li>
                        <p>Linux</p>
                    </li>
                    <li>
                        <p>Réseau(base)</p>
                    </li>
                    <li>
                        <p>cms : wordpress,joomla,shopify</p>
                    </li>
                    <li>
                        <p>Cryptomonaies</p>
                    </li>
                   
                </ul>
            </article>

            {/* fin systeme*/}

            

        </div>



       
    </section>
  )
}

export default languages