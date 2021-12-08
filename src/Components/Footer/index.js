import React from 'react'
import './Footer.css'

const index = () => {
  return (
    <footer>
      <section className='footerLeft'>
        <h1 className='footerTitle'>About Project</h1>
        <p>
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
      <section className='footerBetween'>
        <h1 className='footerTitle'>Academic Mentor</h1>
        {/* eslint-disable-next-line */}
        <a
          class='footerTextBottom'
          href='https://www.bmu.edu.in/faculty/dr-kiran-khatter/'
          target='_blank'
        >
          Dr. Kiran Khatter
        </a>

        <h1 className='footerTitle bottomTitle'>Group Members</h1>
        <section className='footerGroupMembers'>
          {/* eslint-disable-next-line */}
          <a
            class='footerText'
            href='https://www.linkedin.com/in/paidi-praneeth-3b7196186'
            target='_blank'
          >
            Praneeth Kumar
          </a>
          {/* eslint-disable-next-line */}
          <a
            class='footerText'
            href='https://www.linkedin.com/in/koppineedi-surya-naga-vijaya-durga-kalyan-bbb28b199/'
            target='_blank'
          >
            Kalyan
          </a>
          {/* eslint-disable-next-line */}
          <a
            class='footerTextBottom'
            href='https://www.linkedin.com/in/mohan-sangeet-buddha-861a781a7'
            target='_blank'
          >
            Mohan Sangeet
          </a>
        </section>
      </section>
      <section className='footerRight'>
        <h1 className='footerTitle'>Project Report</h1>
        {/* eslint-disable-next-line */}
        <a
          class='footerText'
          href='https://docs.google.com/document/d/1EkBukAxJPNduY1PtIE9s27GadYuw6fNnndFWl3HeG44/edit?usp=sharing'
          target='_blank'
        >
          Project Report
        </a>
        <h1 className='referenceTitle'>References</h1>
        {/* eslint-disable-next-line */}
        <a
          class='footerText'
          href='https://www.annalsofrscb.ro/index.php/journal/article/view/2437/2043'
          target='_blank'
        >
          Hand Recognition
        </a>
        {/* eslint-disable-next-line */}
        <a
          class='footerText'
          href='https://www.nature.com/articles/s41928-020-00510-8'
          target='_blank'
        >
          Hand Recognition using Wearable
        </a>
        {/* eslint-disable-next-line */}
        <a
          class='footerText'
          href='https://www2.eecs.berkeley.edu/Pubs/TechRpts/2021/EECS-2021-119.pdf'
          target='_blank'
        >
          Mouse Control
        </a>
        {/* eslint-disable-next-line */}
        <a
          class='footerText'
          href='https://ieeexplore.ieee.org/abstract/document/8402452'
          target='_blank'
        >
          Virtual Keyboard
        </a>
      </section>
    </footer>
  )
}

export default index
