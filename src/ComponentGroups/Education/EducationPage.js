import React, { useState } from 'react'
import '../PageStyling/PageStyles.css'

// Programming Language Icons
import { SiPython, SiJupyter, SiReact } from 'react-icons/si'

export default function EducationPage() {

  const [majorExpanded, setMajorExpanded] = useState(false)
  const [minorExpanded, setMinorExpanded] = useState(false)
  const [skillsExpanded, setSkillsExpanded] = useState(false)

  const toggleMajor = () => {
    setMajorExpanded(!majorExpanded)
  }

  const toggleMinor = () => {
    setMinorExpanded(!minorExpanded)
  }

  const toggleSkills = () => {
    setSkillsExpanded(!skillsExpanded)
  }



  return (
    <div name='education' className='pageContainer'>
      <div className='contentContainer'>
          <h1 className='titleText'>Education & Skills</h1>
          
          {/* Major */}
          <div 
            style={{
              width: majorExpanded ? '80vh' : '55vh',
              height: majorExpanded ? '20vh' : '5vh'
            }}
            className='expandable'
            onMouseEnter={toggleMajor}
            onMouseLeave={toggleMajor}>
            <p>B.S. in Computer Science concentreated in AI</p>
            <div 
              style={{
                display: majorExpanded ? true : 'none'
              }}
              className='expandableBox'>
              <p>CS Coursework: OOP, Data Structures, Algorithms, Machine Learning, Computer Vision, Database Systems </p>
              <p>Math Coursework: Calculus I & II, Linear Algebra, Automata Theory, Programming Logic</p>
              <p>Major Coursework GPA:</p>
            </div>
          </div>

          {/* Minor */}
          <div 
            style={{
              width: minorExpanded ? '80vh' : '55vh',
              height: minorExpanded ? '20vh' : '5vh'
            }}
            className='expandable'
            onMouseEnter={toggleMinor}
            onMouseLeave={toggleMinor}>
            <p>Minor in Cybersecurity</p>
            <div 
              style={{
                display: minorExpanded ? true : 'none'
              }}
              className='expandableBox'>
              <p>Coursework: </p>
              <p>Minor Coursework GPA:</p>
            </div>
          </div>

          {/* Skills */}
          <div 
            style={{
              width: skillsExpanded ? '80vh' : '55vh',
              height: skillsExpanded ? '20vh' : '5vh'
            }}
            className='expandable'
            onMouseEnter={toggleSkills}
            onMouseLeave={toggleSkills}>
            <p>Relevant Skills</p>
            <div 
              style={{
                display: skillsExpanded ? true : 'none'
              }}
              className='expandableBox skillsExpandable'>
              <SiPython size={40}/>
              <SiReact size={40}/>
              <SiJupyter size={40}/>
            </div>
          </div>
        </div>
    </div>
  )
}
