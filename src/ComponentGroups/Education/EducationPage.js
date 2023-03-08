import React, { useState } from "react";
import "../PageStyling/PageStyles.css";

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

        {/* Non Expandable Layout */}
        <div>
          <p>B.S. in Computer Science concentrated in AI</p>
          <p> CS Coursework:</p>
          <p> Math Coursework:</p>
        </div>

        {/* Major */}
        <div
          style={{
            width: majorExpanded ? "80vh" : "60vh",
            height: majorExpanded ? "25vh" : "5vh",
          }}
          className="expandable"
          onMouseEnter={toggleMajor}
          onMouseLeave={toggleMajor}
        >
          <p>B.S. in Computer Science concentrated in AI</p>
          <div
            style={{
              display: majorExpanded ? true : "none",
            }}
            className="expandableBox"
          >
            <p>
              CS Coursework: OOP, Data Structures, Algorithms, AI, Machine
              Learning, Computer Vision, Database Systems, Operating Systems,
              Parallel Computing, Data Mining
            </p>
            <p>
              Math Coursework: Calculus I & II, Linear Algebra, Automata Theory,
              Programming Logic, Statistical Methods
            </p>
            <p>Major Coursework GPA:</p>
          </div>
        </div>

        {/* Minor */}
        <div
          style={{
            width: minorExpanded ? "80vh" : "60vh",
            height: minorExpanded ? "20vh" : "5vh",
          }}
          className="expandable"
          onMouseEnter={toggleMinor}
          onMouseLeave={toggleMinor}
        >
          <p>Minor in CyberSecurity</p>
          <div
            style={{
              display: minorExpanded ? true : "none",
            }}
            className="expandableBox"
          >
            <p>
              Coursework: Cloud Computing & Security, System Hardening, Computer
              Networks, Web App Security
            </p>
            <p>Minor Coursework GPA:</p>
          </div>
        </div>

        {/* Major */}
        <div
          style={{
            width: extraCurricularExpanded ? "80vh" : "60vh",
            height: extraCurricularExpanded ? "25vh" : "5vh",
          }}
          className="expandable"
          onMouseEnter={toggleExtraCurricular}
          onMouseLeave={toggleExtraCurricular}
        >
          <p>Extra Curricular Involvement: Business Basics for Engineers</p>
          <div
            style={{
              display: extraCurricularExpanded ? true : "none",
            }}
            className="expandableBox"
          >
            <p>
              Founded an academic student organization aimed at teaching myself
              and my peers how to effectively market their STEM degrees in and
              out of tech industries.
            </p>
            <p>
              Organizaed meetings, recruited speakers from industry, and hosted
              student led discussions over zoom
            </p>
            <p>Maintained a membership of 65 students throughout my tenure</p>
          </div>
        </div>

        {/* Skills */}
        <div
          style={{
            width: skillsExpanded ? "80vh" : "60vh",
            height: skillsExpanded ? "20vh" : "5vh",
          }}
          className="expandable"
          onMouseEnter={toggleSkills}
          onMouseLeave={toggleSkills}
        >
          <p>Relevant Skills</p>
          <div
            style={{
              display: skillsExpanded ? true : "none",
            }}
            className="expandableBox"
          >
            <p>
              Languages and Frameworks: Python, Java, Javascript, C++, React,
              React Native, HTML, CSS, NumPy, PyTorch, matplotlib, SQL
            </p>
            <p>Project Management Skills and Tools: Git, Jira, Asana</p>
          </div>
        </div>
      </div>
    </div>
  );
}
