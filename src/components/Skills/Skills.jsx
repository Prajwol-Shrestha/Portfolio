import React from 'react'
import data from '../../data'

export default function Skills() {
  return (
    <section className="hero-section">
      <div className='container'>
        <h1 className='heading'> Skills </h1>
        <article className='skills-container'>
          { data[0].skills.map( (skill, index) => (
            <div className='scale-up-center skill' key={index}>
                <div className={`${skill.name === 'github' ? 'img-container github-logo': 'img-container'}`}>
                  <img src={skill.img} alt={`${ skill.name }`} />
                </div>
                <figcaption className='caption'> {skill.name} </figcaption>
            </div>
          ) ) }
        </article>
      </div>
    </section>
  )
}
