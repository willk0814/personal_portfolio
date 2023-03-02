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
          <div 
            style={{
              width: sparksExpanded ? '80vh' : '55vh',
              height: sparksExpanded ? '20vh' : '5vh'
            }}
            className='expandable'
            onMouseEnter={toggleSparks}
            onMouseLeave={toggleSparks}>
            <p>Sparks Lab</p>
            <div 
              style={{
                display: sparksExpanded ? true : 'none'
              }}
              className='expandableBox'>
              <p>accomplishments</p>
              <p>accomplishments</p>
              <p>accomplishments</p>
              <p>accomplishments</p>
            </div>
          </div>
          <div 
            style={{
              width: viinkoExpanded ? '80vh' : '55vh',
              height: viinkoExpanded ? '20vh' : '5vh'
            }}
            className='expandable'
            onMouseEnter={toggleViinko}
            onMouseLeave={toggleViinko}>
            <p>Viinko</p>
            <div 
              style={{
                display: viinkoExpanded ? true : 'none'
              }}
              className='expandableBox'>
              <p>accomplishments</p>
              <p>accomplishments</p>
              <p>accomplishments</p>
              <p>accomplishments</p>
            </div>
          </div>
        </div>
    </div>
  )
}
