import React from 'react'

export default function Contact() {
  return (
    <section className="hero-section contact-page">
      <div className='form-container'>
        <h2 className='heading'> Get In Touch </h2>
        <form>
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Your Email'/>
          <textarea placeholder='Your Message here...'>
          </textarea>
          <div className='btn-container'>
            <button className='btn' type='submit' onClick={(e) => e.preventDefault()}> Submit  </button>
          </div>
        </form>
      </div>
      <div className='contact-info'>
        <div className='email-info'>
          <h3 className='title'> Email </h3>
          <p className='para'> prajwolshrestha08@gmail.com </p>
        </div>
          <hr />
        <div className='phone-info'>
          <h3 className='title'> Phone </h3>
          <p className='para'> +977 9860080185 </p>
        </div>
        <hr />
        <div className='web-info'>
          <h3 className='title'> on the web </h3>
          <p className='para'> <a href='https://github.com/Prajwol-Shrestha' target="_blank" rel="noopener noreferrer"> Facebook </a> | <a href='https://github.com/Prajwol-Shrestha' target="_blank" rel="noopener noreferrer" > LinkedIn </a> </p>
        </div>
        <hr />
      </div>
    </section>
  )
}
