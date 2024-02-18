import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id='hero' className='hero-container'>
      <div className='hero-container-left'>
        <div className='hero-content'>
          <h3>Hello, I've</h3>
          <h2>Mechanical Roots <br /> Digital Wings</h2>
          <p>| Passionate <strong>Software Engineer</strong> |</p>
          <p>| Graduate <strong>Mechanical Engineer</strong> |</p>
          <p style={{marginTop: 15, fontWeight: 'bold'}}>Code weaves the future, gears set the foundation. <br />I intend to
            navigate both realms to build a seamless tomorrow.</p>
        </div>
        <button
          style={{marginTop: 30}}
          className='contact-btn'
          onClick={(e) => {
            window.open(
              'https://drive.google.com/file/d/1O465xHCHeb0446eB3e9chV4H4dbW9hKO/view?usp=drive_link',
              '_blank'
            )
          }}
        >
          Download CV
        </button>
      </div>

      <div className='hero-img'>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='tech-icon' style={{ marginBottom: '30px' }}>
              <img src='./assets/images/jsLogo.png' alt='' />
            </div>
            <div className='tech-icon'>
              <img src='./assets/images/pythonLogo.png' alt='' />
            </div>
          </div>
          <img src='./assets/images/heroavatar.png' alt='' />
        </div>

        <div>
          <div className='tech-icon'>
            <img src='./assets/images/dlLogo.png' alt='' />
          </div>
          <div className='tech-icon'>
            <img src='./assets/images/reactLogo.png' alt='' />
          </div>
          <div className='tech-icon'>
            <img src='./assets/images/vueLogo.png' alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
