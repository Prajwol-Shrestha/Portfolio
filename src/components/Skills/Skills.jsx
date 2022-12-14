import React from 'react'
import data from '../../data'

export default function Skills() {
  return (
    <section className="hero-section">
      <div className='container'>
        <h1 className='heading mt'> Skills </h1>
        <div className="underline"></div>
        <article className='skills-container'>
          { data[0].skills.map( (skill, index) => (
            <div className='scale-up-center skill' key={index}>
                  <img src={skill.img} alt={`${ skill.name }`} />
                <figcaption className='caption'> {skill.name} </figcaption>
            </div>
          ) ) }
        </article>
      </div>
    </section>
  )
}
