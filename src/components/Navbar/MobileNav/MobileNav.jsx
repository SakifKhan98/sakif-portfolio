import React from 'react'
import './MobileNav.css'

const MobileNav = ({ isOpen, toggleMenu }) => {
  const handleScroll = (sectionId) => {
    if (isOpen) toggleMenu()
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <div className='mobile-menu-container'>
        <a href='https://www.sakifkhan.xyz' target='_blank' rel="noreferrer">
            <img
              className='logo'
              src='./assets/images/logo.png'
              alt='Sakif Logo'
            />
          </a>

          <ul>
            <li>
              <p onClick={() => handleScroll('hero')} className='menu-item'>
                Home
              </p>
            </li>

            <li>
              <p onClick={() => handleScroll('skills')} className='menu-item'>
                Skills
              </p>
            </li>

            <li>
              <p
                onClick={() => handleScroll('divided-container')}
                className='menu-item'
              >
                Education & Research
              </p>
            </li>

            <li>
              <p onClick={() => handleScroll('work-exp')} className='menu-item'>
                Work Experience
              </p>
            </li>

            <li>
              <p onClick={() => handleScroll('contact')} className='menu-item'>
                Contact Me
              </p>
            </li>

            <button
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
          </ul>
        </div>
      </div>
    </>
  )
}

export default MobileNav
