import React from 'react'
import './Header.css'

const index = () => {
  return (
    <header>
      <section className='headerTitle'>
        <a href='/'>Gesture Control</a>
      </section>
      <div className='menuItems'>
        <a href='/volumeControl' className='menuItem'>
          Volume Control
        </a>
        <a href='/mouseControl' className='menuItem'>
          Mouse Control
        </a>
        <a href='/onScreenWriting' className='menuItem'>
          On-Screen Writing
        </a>
        <a href='/screenCapture' className='menuItem'>
          Screen Capture
        </a>
      </div>
    </header>
  )
}

export default index
