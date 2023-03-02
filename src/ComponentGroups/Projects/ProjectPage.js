import React, { useState } from 'react'
import  AppDemo from '../Assets/DeviceControllerDemo.MP4'
import sortingDemo from '../Assets/sortingVisualizer.MP4'

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
              height: appExpanded ? '27vh' : '5vh'
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
              <div className='projectExpandable'>
                <div>
                  <p>This is the React Native application that I built while working at the Sparks Lab.  It was used to connect to research devices, initiate tests via bluetooth, and recieve and process data.</p>
                  <a href='https://github.com/willk0814/DeviceControllerApp'>
                    <button className='submitMessageButton'>Repo</button>
                  </a>
                </div>
                <video height={190} autoPlay={true} loop={true} className='alignDemo'>
                  <source src={AppDemo} type='video/mp4' />
                </video>
              </div>
            </div>
          </div>
          
          {/* Project - Sorting Visualizer */}
          <div 
            style={{
              width: sortingExpanded ? '80vh' : '55vh',
              height: sortingExpanded ? '27vh' : '5vh'
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
              <div className='projectExpandable'>
                <div>
                  <p>A react project to demonstrate the comparisons made by different sorting algorithms when sorting an array</p>
                  <a href='https://github.com/willk0814/sorting_visualizer' target='_blank'>
                    <button className='submitMessageButton' style={{marginRight: '10px'}}>
                      Repo</button>
                  </a>
                  <a href='https://willk0814.github.io/sorting_visualizer/' target='_blank'>
                    <button className='submitMessageButton'>Site</button>
                  </a>
                </div>
                <video width={500} height={190} autoPlay={true} loop={true} className='alignDemo'>
                  <source src={sortingDemo} type='video/mp4' />
                </video>
              </div>
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
                display: pathFindingExpanded ? true : 'none',
              }}
              className='expandableBox'>
              <div className='projectExpandable'>
                <p>accomplishments</p>
                <p>accomplishments</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
