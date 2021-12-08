import React from 'react'
import ScreenWriting from '../Assets/Images/screenWriting.png'
import Video from '../Assets/Videos/screenWriting.mp4'

const index = () => {
  return (
    <main>
      {/* Gestures Intro */}
      <section>
        <h1 className='componentTitle'>On-Screen Writing</h1>
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
          Screen Writing is a component in our project that helps in perform
          writing on screen, erasing text on screen by use of gestures.
        </p>
      </section>
      {/* HCI */}
      <section>
        <h1 className='homeTitle'>Features</h1>
        <section className='doubleContent'>
          <section className='leftContent'>
            <p className='contentText'>
              For screen writing we need to use command “enable screen writing”,
              there are operations like erasing text, writing text(several
              colors), clear text, and saving text. These operations can be
              performed as shown in the above video.
            </p>
          </section>
          <section className='rightContent'>
            <section className='imageContainer'>
              <img
                className='contentImage'
                src={ScreenWriting}
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
