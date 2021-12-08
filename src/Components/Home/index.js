import React from 'react'
import HumanComputerInteraction from '../Assets/Images/hci.gif'
import Video from '../Assets/Videos/combined.mp4'
import Gestures from '../Assets/Images/gestures.gif'
import GestureControl from '../Assets/Images/gestureControl.gif'
import HandRecognition from '../Assets/Images/handRecognition.gif'
import './Home.css'

const index = () => {
  return (
    <main>
      {/* Gestures Intro */}
      <section>
        <h1 className='mainTitle'>Our Project</h1>
        <section className='imageContainer'>
          <video
            autoPlay
            muted
            loop
            style={{ width: '800px', height: '375px', border: '20px' }}
          >
            <source src={Video} type='video/mp4' />
          </video>
        </section>
        <p className='homeText'>
          Our project is creating a software for controlling pc using hand
          gestures without any usage of keyboard and mouse but by using python
          modules like MediaPipe, SpeechRecognition, and os, etc. Every gesture
          performed is visible to the user and can also have a log of the
          operations that are performed in a module. The high priority of our
          project is to work in any condition and no user should need heavy
          hardware properties. The computation of the processes does not require
          any GPU. To maintain frames and processing power, we have used a lite
          GUI library called Tkinter which helps in making simple user
          interfaces for users to understand.
        </p>
      </section>
      {/* HCI */}
      <section>
        <h1 className='homeTitle'>Human Computer Interaction</h1>
        <section className='doubleContent'>
          <section className='leftContent'>
            <section className='imageContainer'>
              <img
                className='contentImage'
                src={HumanComputerInteraction}
                alt='handRecognition'
              />
            </section>
          </section>
          <section className='rightContent'>
            <p className='contentText'>
              Human Computer Interaction is research in the design and the use
              of computer technology, which focuses on the interfaces between
              people and computers. HCI researchers observe the ways humans
              interact with computers and design technologies that allow humans
              to interact with computers in novel ways.
            </p>
          </section>
        </section>
      </section>
      {/* Gestures */}
      <section>
        <h1 className='homeTitle'>Gestures</h1>
        <section className='doubleContent'>
          <section className='leftContent'>
            <p className='contentText'>
              A gesture is a form of non-verbal communication or non-vocal
              communication in which visible bodily actions communicate
              particular messages, either in place of, or in conjunction with,
              speech. Gestures include movement of the hands, face, or other
              parts of the body.
            </p>
          </section>
          <section className='rightContent'>
            <section className='imageContainer'>
              <img
                className='contentImage'
                src={Gestures}
                alt='handRecognition'
              />
            </section>
          </section>
        </section>
      </section>
      {/* Hand Recognition */}
      <section>
        <h1 className='homeTitle'>Hand Recognition</h1>
        <section className='doubleContent'>
          <section className='leftContent'>
            <section className='imageContainer'>
              <img
                className='contentImage'
                src={HandRecognition}
                alt='handRecognition'
              />
            </section>
          </section>
          <section className='rightContent'>
            <p className='contentText'>
              Hand Recognition is the detection of hand when one is in front of
              a camera. Advanced algorithms helps in fast and accurate detection
              of hand with less computing power. Hand recognition helped in
              advancement of human computer interaction.
            </p>
          </section>
        </section>
      </section>
      {/* Gesture Control */}
      <section>
        <h1 className='homeTitle'>Gesture Control</h1>
        <section className='doubleContent'>
          <section className='leftContent'>
            <p className='contentText'>
              Gestures can be used to control the way a machine can operate by
              Image Recognition and Machine Learning. Gesture control is the
              ability to recognize and interpret movements of the human body in
              order to interact with and control a computer system without
              direct physical contact.
            </p>
          </section>
          <section className='rightContent'>
            <section className='imageContainer'>
              <img
                className='contentImage'
                src={GestureControl}
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
