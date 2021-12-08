import React from 'react'
import VolumeControl from '../Assets/Images/volumeControl.png'
import Video from '../Assets/Videos/volumeControl.mp4'

const index = () => {
  return (
    <main>
      {/* Gestures Intro */}
      <section>
        <h1 className='componentTitle'>Volume Control</h1>
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
          Volume Control is a component in our project that helps in controlling
          and adjusting volume by recognizing the gesture made.
        </p>
      </section>
      {/* HCI */}
      <section>
        <h1 className='homeTitle'>Features</h1>
        <section className='doubleContent'>
          <section className='leftContent'>
            <p className='contentText'>
              For controlling volume we need to use command “control volume”,
              there are operations like increasing, decreasing and setting
              volume. These operations can be performed as shown in the above
              video.
            </p>
          </section>
          <section className='rightContent'>
            <section className='imageContainer'>
              <img
                className='contentImage'
                src={VolumeControl}
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
