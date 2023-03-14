import React, { useState } from "react";

import "../PageStyling/PageStyles.css";

export default function ProjectPage() {
  const [appExpanded, setAppExpanded] = useState(false);
  const [sortingExpanded, setSortingExpanded] = useState(false);
  const [pythonGameExpanded, setPythonGameExapnded] = useState(false);
  const [pathFindingExpanded, setPathFindingExpanded] = useState(false);

  const toggleApp = () => {
    setAppExpanded(!appExpanded);
  };

  const toggleSorting = () => {
    setSortingExpanded(!sortingExpanded);
  };

  const togglePythonGame = () => {
    setPythonGameExapnded(!pythonGameExpanded);
  };

  const togglePathFinding = () => {
    setPathFindingExpanded(!pathFindingExpanded);
  };

  return (
    <div name="projects" className="pageContainer">
      <div className="contentContainer">
        <h1 className="titleText">Projects</h1>
        <div>
          <p
            style={{ display: "inline", marginRight: "9px" }}
            className="subTitle"
          >
            Device Controller Application
          </p>
          <a
            href="https://github.com/willk0814/DeviceControllerApp"
            target="_blank"
          >
            <button className="submitMessageButton">Repo</button>
          </a>
          <ul className="subList">
            <li className="subListItem">
              This is the mobile application that I developed while working at
              the Sparks Lab. It was made to aid in their research process by
              allowing researchers to interact with research devices via
              bluetooth
            </li>
            <li className="subListItem">
              This application was developed in JavaScript using React Native
            </li>
          </ul>
        </div>

        <div>
          <p
            style={{ display: "inline", marginRight: "9px" }}
            className="subTitle"
          >
            Sorting Visualizer
          </p>
          <a
            href="https://github.com/willk0814/sorting_visualizer"
            target="_blank"
          >
            <button
              className="submitMessageButton"
              style={{ marginRight: "9px" }}
            >
              Repo
            </button>
          </a>
          <a
            href="https://willk0814.github.io/sorting_visualizer/"
            target="_blank"
          >
            <button className="submitMessageButton">Site</button>
          </a>
          <ul className="subList">
            <li className="subListItem">
              A website that I developed to demonstrate the comparisons made as
              an array is sorted using different algorithms.
            </li>
            <li className="subListItem">
              I did this project in JavaScript using React
            </li>
          </ul>
        </div>

        <div>
          <p
            style={{ display: "inline", marginRight: "9px" }}
            className="subTitle"
          >
            2048 in Python
          </p>
          <a href="https://github.com/willk0814/2048" target="_blank">
            <button
              className="submitMessageButton"
              style={{ marginRight: "9px" }}
            >
              Repo
            </button>
          </a>
          <ul className="subList">
            <li className="subListItem">
              A simple 2048 game to be played in a python shell
            </li>
            <li className="subListItem">
              I did this project in Python and I am planning on adding a front
              end using PyGame
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
