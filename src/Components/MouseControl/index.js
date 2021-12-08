import React from 'react'
import MouseControl from '../Assets/Images/mouseControl.png'
import Video from '../Assets/Videos/mouseControl.mp4'

const index = () => {
  return (
    <main>
      {/* Gestures Intro */}
      <section>
        <h1 className='componentTitle'>Mouse Control</h1>
        <section className='imageContainer'>
          <video
            controls
            autoPlay
            muted
            loop
            style={{ width: '920px', height: '450px', border: '20px' }}
          >
            <source src={Video} type='video/mp4' />
          </video>
        </section>
        <p className='infoText'>
          Mouse Control is a component in our project that helps in controlling
          mouse and helps perform mouse operations virtually.
        </p>
      </section>
      {/* HCI */}
      <section>
        <h1 className='homeTitle'>Features</h1>
        <section className='doubleContent'>
          <section className='leftContent'>
            <p className='contentText'>
              For controlling mouse we need to use command “mouse control”,
              there are three operations that can be performed they are mouse
              left click, mouse right click, mouse dragging. These operations
              can be performed as shown in the following above video.
            </p>
          </section>
          <section className='rightContent'>
            <section className='imageContainer'>
              <img
                className='contentImage'
                src={MouseControl}
                alt='handRecognition'
              />
            </section>
          </section>
        </section>
      </section>
    </main>
  )
}

export default index
