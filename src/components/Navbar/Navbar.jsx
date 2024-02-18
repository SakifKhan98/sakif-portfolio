import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav'
import { Link } from 'react-scroll'

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <a href='https://www.sakifkhan.xyz' target='_blank' rel="noreferrer">
            <img
              className='logo'
              src='./assets/images/logo.png'
              alt='Sakif Logo'
            />
          </a>

          <ul>
            <li>
              <Link
                activeClass='active'
                to='hero'
                smooth
                spy
                offset={-80}
                className='menu-item'
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                activeClass='active'
                to='skills'
                smooth
                spy
                offset={-120}
                className='menu-item'
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                activeClass='active'
                to='divided-container'
                smooth
                spy
                offset={-120}
                className='menu-item'
              >
                Education & Research
              </Link>
            </li>

            <li>
              <Link
                activeClass='active'
                to='work-exp'
                smooth
                spy
                offset={-100}
                className='menu-item'
              >
                Work Experience
              </Link>
            </li>

            <li>
              <Link
                activeClass='active'
                to='contact'
                smooth
                spy
                offset={-100}
                className='menu-item'
              >
                Contact Me
              </Link>
            </li>
          </ul>

          <button className='menu-btn' onClick={toggleMenu}>
            <span
              className={'material-symbols-outlined'}
              style={{ fontSize: '1.8rem' }}
            >
              {openMenu ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>
    </>
  )
}

export default NavBar
