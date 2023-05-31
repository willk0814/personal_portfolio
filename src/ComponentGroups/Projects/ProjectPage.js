import React, { useState } from "react";

import "../RepeatedPageStyles/PageStyles.css";
import "./ProjectPage.css";

export default function ProjectPage() {
  const [viewJS, setViewJS] = useState(true);
  const [viewPython, setViewPython] = useState(false);
  const [viewFS, setViewFS] = useState(false);

  const handleViewJS = () => {
    setViewJS(true);
    setViewFS(false);
    setViewPython(false);
  };
  const handleViewPython = () => {
    setViewPython(true);
    setViewJS(false);
    setViewFS(false);
  };
  const handleViewFS = () => {
    setViewFS(true);
    setViewJS(false);
    setViewPython(false);
  };

  return (
    <div name="projects" className="pageContainer">
      <div className="contentContainer">
        <div className="projectSelectionRowContainer">
          <h1 className="titleText">Projects</h1>
          <button
            className={
              viewJS ? "projectTypeButton_selected" : "projectTypeButton"
            }
            onClick={handleViewJS}
          >
            JavaScript
          </button>
          <button
            className={
              viewFS ? "projectTypeButton_selected" : "projectTypeButton"
            }
            onClick={handleViewFS}
          >
            Full Stack Dev
          </button>
          <button
            className={
              viewPython ? "projectTypeButton_selected" : "projectTypeButton"
            }
            onClick={handleViewPython}
          >
            Python
          </button>
        </div>
        <div className="projectExampleContainer">
          {viewJS && (
            <div>
              <div>
                <p
                  style={{ display: "inline", marginRight: "9px" }}
                  className="subTitle"
                >
                  PathFinding Visualizer
                </p>
                <a
                  href="https://github.com/willk0814/pathfinding_visualizer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className="submitMessageButton"
                    style={{ marginRight: "9px" }}
                  >
                    Repo
                  </button>
                </a>
                <a
                  href="https://willk0814.github.io/pathfinding_visualizer/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="submitMessageButton">Site</button>
                </a>
                <ul className="subList">
                  <li className="subListItem">
                    A website that I developed to demonstrate the paths taken by
                    different algorithms as they explore a grid
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
                  Sorting Visualizer
                </p>
                <a
                  href="https://github.com/willk0814/sorting_visualizer"
                  target="_blank"
                  rel="noreferrer"
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
                  rel="noreferrer"
                >
                  <button className="submitMessageButton">Site</button>
                </a>
                <ul className="subList">
                  <li className="subListItem">
                    A website that I developed to demonstrate the comparisons
                    made as an array is sorted using different algorithms.
                  </li>
                  <li className="subListItem">
                    I did this project in JavaScript using React
                  </li>
                </ul>
              </div>
            </div>
          )}
          {viewFS && (
            <div>
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
                  rel="noreferrer"
                >
                  <button className="submitMessageButton">Repo</button>
                </a>
                <ul className="subList">
                  <li className="subListItem">
                    This is the mobile application that I developed while
                    working at the Sparks Lab. It was made to aid in their
                    research process by allowing researchers to interact with
                    research devices via bluetooth
                  </li>
                  <li className="subListItem">
                    This application was developed in JavaScript using React
                    Native
                  </li>
                </ul>
              </div>
              <div>
                <p
                  style={{ display: "inline", marginRight: "9px" }}
                  className="subTitle"
                >
                  Authentication Demo
                </p>
                <a
                  href="https://github.com/willk0814/authentication_demo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="submitMessageButton">Repo</button>
                </a>
                <ul className="subList">
                  <li className="subListItem">
                    I built this application so that I could spend some time
                    practicing building APIs and effectively storing data in
                    MongoDB
                  </li>
                  <li className="subListItem">
                    This application was developed using MongoDB, Express, Node,
                    and React
                  </li>
                </ul>
              </div>
            </div>
          )}
          {viewPython && (
            <div>
              <div>
                <p
                  style={{ display: "inline", marginRight: "9px" }}
                  className="subTitle"
                >
                  2048 in Python
                </p>
                <a
                  href="https://github.com/willk0814/2048"
                  target="_blank"
                  rel="noreferrer"
                >
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
                    I did this project in Python and I am planning on adding a
                    front end using PyGame
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
