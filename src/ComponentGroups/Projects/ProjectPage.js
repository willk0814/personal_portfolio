import React, { useState } from 'react'

import '../PageStyling/PageStyles.css'


export default function ProjectPage() {

  const [appExpanded, setAppExpanded] = useState(false)
  const [sortingExpanded, setSortingExpanded] = useState(false)
  const [pythonGameExpanded, setPythonGameExapnded] = useState(false)
  const [pathFindingExpanded, setPathFindingExpanded] = useState(false)

  const toggleApp = () => {
    setAppExpanded(!appExpanded)
  }

  const toggleSorting = () => {
    setSortingExpanded(!sortingExpanded)
  }

  const togglePythonGame = () => {
    setPythonGameExapnded(!pythonGameExpanded)
  }

  const togglePathFinding = () => {
    setPathFindingExpanded(!pathFindingExpanded)
  }

  return (
    <div name='projects' className='pageContainer'>
       <div
        className='contentContainer'>
          <h1 className='titleText'>Projects</h1>
          {/* Project - Device Controller */}
          <div 
            style={{
              width: appExpanded ? '80vh' : '55vh',
              height: appExpanded ? '20vh' : '5vh'
            }}
            className='expandable'
            onMouseEnter={toggleApp}
            onMouseLeave={toggleApp}>
            <p>Research Device Controller Application</p>
            <div 
              style={{
                display: appExpanded ? true : 'none'
              }}
              className='expandableBox'>
              <p>accomplishments</p>
              <p>accomplishments</p>
              <p>accomplishments</p>
              <p>accomplishments</p>
            </div>
          </div>
          
          {/* Project - Sorting Visualizer */}
          <div 
            style={{
              width: sortingExpanded ? '80vh' : '55vh',
              height: sortingExpanded ? '20vh' : '5vh'
            }}
            className='expandable'
            onMouseEnter={toggleSorting}
            onMouseLeave={toggleSorting}>
            <p>Sorting Visualizer</p>
            <div 
              style={{
                display: sortingExpanded ? true : 'none'
              }}
              className='expandableBox'>
              <p>accomplishments</p>
              <p>accomplishments</p>
              <p>accomplishments</p>
              <p>accomplishments</p>
            </div>
          </div>

          {/* Project - 2048 Game */}
          <div 
            style={{
              width: pythonGameExpanded ? '80vh' : '55vh',
              height: pythonGameExpanded ? '20vh' : '5vh'
            }}
            className='expandable'
            onMouseEnter={togglePythonGame}
            onMouseLeave={togglePythonGame}>
            <p>Python 2048 Game</p>
            <div 
              style={{
                display: pythonGameExpanded ? true : 'none'
              }}
              className='expandableBox'>
              <p>accomplishments</p>
              <p>accomplishments</p>
              <p>accomplishments</p>
              <p>accomplishments</p>
            </div>
          </div>
            
          {/* Project - Path Finding */}
          <div 
            style={{
              width: pathFindingExpanded ? '80vh' : '55vh',
              height: pathFindingExpanded ? '20vh' : '5vh'
            }}
            className='expandable'
            onMouseEnter={togglePathFinding}
            onMouseLeave={togglePathFinding}>
            <p>Path Finding Visualizer</p>
            <div 
              style={{
                display: pathFindingExpanded ? true : 'none'
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
