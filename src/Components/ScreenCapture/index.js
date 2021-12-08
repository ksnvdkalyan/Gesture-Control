import React from 'react'
import ScreenCapture from '../Assets/Images/screenCapture.png'
import Video from '../Assets/Videos/screenCapture.mp4'

const index = () => {
  return (
    <main>
      {/* Gestures Intro */}
      <section>
        <h1 className='componentTitle'>Screen Capture</h1>
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
          Screen Capture is a component in our project that helps in capturing
          and saving the image of the screen using gestures.
        </p>
      </section>
      {/* HCI */}
      <section>
        <h1 className='homeTitle'>Features</h1>
        <section className='doubleContent'>
          <section className='leftContent'>
            <p className='contentText'>
              For screen writing we need to use command “enable screen capture”
              there is only one operation that is taking screenshot at desired
              place. This operation can be performed as shown in above video.
            </p>
          </section>
          <section className='rightContent'>
            <section className='imageContainer'>
              <img
                className='contentImage'
                src={ScreenCapture}
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
