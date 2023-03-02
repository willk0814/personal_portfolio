import React, { useState } from 'react'
import '../PageStyling/PageStyles.css'

export default function WorkExperiencePage() {

  const [viinkoExpanded, setViinkoExpanded] = useState(false)
  const [sparksExpanded, setSparksExpanded] = useState(false)

  const toggleSparks = () => {
    setSparksExpanded(!sparksExpanded)
  }

  const toggleViinko = () => {
    setViinkoExpanded(!viinkoExpanded)
  }

  return (
    <div name='experience' className='pageContainer'>
      <div
        className='contentContainer'>
          <h1 className='titleText'>Work Experience</h1>

          {/* Sparks Lab */}
          <div 
            style={{
              width: sparksExpanded ? '80vh' : '55vh',
              height: sparksExpanded ? '20vh' : '5vh'
            }}
            className='expandable'
            onMouseEnter={toggleSparks}
            onMouseLeave={toggleSparks}>
            <p>Sparks Lab - Software Engineer</p>
            <div 
              style={{
                display: sparksExpanded ? true : 'none'
              }}
              className='expandableBox'>
              <p>Led the developement of a React Native device controller application capable of connecting with a research device, running tests, and recieving and processing data to be used in the lab and delivered to Fortune 500 client</p>
              <p>App usage reduced research testing by 33%</p>
            </div>
          </div>

          {/* Viinko */}
          <div 
            style={{
              width: viinkoExpanded ? '80vh' : '55vh',
              height: viinkoExpanded ? '20vh' : '5vh'
            }}
            className='expandable'
            onMouseEnter={toggleViinko}
            onMouseLeave={toggleViinko}>
            <p>Viinko - Software Engineer Intern</p>
            <div 
              style={{
                display: viinkoExpanded ? true : 'none'
              }}
              className='expandableBox'>
              <p>Developed a chrome extension using JavaScript and HTML to be used daily by approximately 24000 students through two schools</p>
              <p>Chrome extension became a core part of the product allowing students to move their work directly from Google Classroom to Viinko Calendar</p>
            </div>
          </div>
        </div>
    </div>
  )
}
