import React, { useState } from "react";
import "../PageStyling/PageStyles.css";
import UD from "../Assets/UD.png";
import Stevens from "../Assets/stevens.png";

// Programming Language Icons
import { SiPython, SiJupyter, SiReact } from "react-icons/si";

export default function EducationPage() {
  const [majorExpanded, setMajorExpanded] = useState(false);
  const [minorExpanded, setMinorExpanded] = useState(false);
  const [extraCurricularExpanded, setExtraCurricularExpanded] = useState(false);
  const [skillsExpanded, setSkillsExpanded] = useState(false);

  const toggleMajor = () => {
    setMajorExpanded(!majorExpanded);
  };

  const toggleMinor = () => {
    setMinorExpanded(!minorExpanded);
  };

  const toggleExtraCurricular = () => {
    setExtraCurricularExpanded(!extraCurricularExpanded);
  };

  const toggleSkills = () => {
    setSkillsExpanded(!skillsExpanded);
  };

  return (
    <div name="education" className="pageContainer">
      <div className="contentContainer">
        <h1 className="titleText">Education & Skills</h1>

        {/* Non Expandable Layout - Education */}
        <div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {/* <img src={Stevens} style={{ width: "60px", height: "auto" }} /> */}
            <p className="subTitle">Masters of Science in Computer Science</p>
          </div>
          <ul className="subList">
            <li className="subListItem">
              <p className="subSectTitle">Expected:</p> December 2024
            </li>
            <li className="subListItem">
              <p className="subSectTitle">
                In Progress / Completed Coursework:
              </p>{" "}
              Algorithms
            </li>
          </ul>
        </div>

        <div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {/* <img
              src={UD}
              style={{ width: "85px", height: "auto", marginTop: "1vh" }}
            /> */}
            <p className="subTitle">
              B.S. in CS concentrated in ai w/ minor in CyberSecurity
            </p>
          </div>
          <ul className="subList">
            <li className="subListItem">
              <p className="subSectTitle">CS Coursework:</p> OOP, Data
              Structures, Algorithms, AI, Machine Learning, Computer Vision,
              Database Systems, Operating Systems, Parallel Computing, Data
              Mining
            </li>
            <li className="subListItem">
              <p className="subSectTitle">Math Coursework:</p> Calculus I & II,
              Linear Algebra, Automata Theory, Programming Logic, Statistical
              Methods
            </li>
            <li className="subListItem">
              <p className="subSectTitle">CyberSecurity Coursework:</p> Cloud
              Computing & Security, System Hardening, Computer Networks, Web App
              Security
            </li>
            {/* <li className="subListItem">
              <p className="subSectTitle">Core Coursework GPA:</p>
            </li> */}
          </ul>
        </div>

        {/* Non Expandable Layout -  Skills */}
        <div>
          <p className="subTitle">Relevant Skills</p>
          <ul className="subList">
            <li className="subListItem">
              <p className="subSectTitle">Languages & Frameworks:</p> Python,
              Java, Javascript, C++, React, React Native, HTML, CSS, NumPy,
              PyTorch, matplotlib, SQL
            </li>
            <li className="subListItem">
              <p className="subSectTitle">Project Management Tools:</p> Git,
              Jira, Asana
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
