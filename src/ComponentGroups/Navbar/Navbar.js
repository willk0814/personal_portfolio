import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import pdf from "../Assets/KoenigResume2023.pdf";

import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import "../PageStyling/PageStyles.css";

export default function Navbar() {
  const [educationUnderlined, setEducationUnderlined] = useState(false);
  const [experienceUnderlined, setExperienceUnderliend] = useState(false);
  const [porjectsUnderlined, setProjectsUnderlined] = useState(false);
  const [contactUnderlined, setContactUnderlined] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  const [showMobile, setShowMobile] = useState(false);
  const [mobileNavClicked, setMobileNavClicked] = useState(false);

  const toggleEducationUnderlined = () => {
    setEducationUnderlined(!educationUnderlined);
  };
  const toggleExperienceUnderlined = () => {
    setExperienceUnderliend(!experienceUnderlined);
  };
  const toggleProjectsUnderlined = () => {
    setProjectsUnderlined(!porjectsUnderlined);
  };
  const toggleContactUnderlined = () => {
    setContactUnderlined(!contactUnderlined);
  };
  const handleClick = () => {
    setMobileNavClicked(!mobileNavClicked);
  };

  // useEffect to detect resizes
  useEffect(() => {
    const handleResize = () => {
      console.log("screen width: ", window.innerWidth);
      if (window.innerWidth <= 750) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }

      if (window.innerWidth <= 900) {
        setShowMobile(true);
      } else {
        setShowMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbarContainer">
      {/* Wide Screen Navbar */}

      <div>
        <Link to="home" smooth={true} duration={500}>
          <h2 className="navbarText">Will Koenig</h2>
        </Link>
      </div>
      <ul className="navbarMenu" style={{ display: showMobile ? "none" : "" }}>
        <li
          className="navbarMenuItem"
          onMouseEnter={toggleEducationUnderlined}
          onMouseLeave={toggleEducationUnderlined}
        >
          <Link to="education" smooth={true} duration={500}>
            Education
          </Link>
          <div
            className="underline"
            style={{ width: educationUnderlined ? "100%" : "0%" }}
          ></div>
        </li>

        <li
          className="navbarMenuItem"
          onMouseEnter={toggleExperienceUnderlined}
          onMouseLeave={toggleExperienceUnderlined}
        >
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>
          <div
            className="underline"
            style={{ width: experienceUnderlined ? "100%" : "0%" }}
          ></div>
        </li>

        <li
          className="navbarMenuItem"
          onMouseEnter={toggleProjectsUnderlined}
          onMouseLeave={toggleProjectsUnderlined}
        >
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
          <div
            className="underline"
            style={{ width: porjectsUnderlined ? "100%" : "0%" }}
          ></div>
        </li>

        {/* <li
          className="navbarMenuItem"
          onMouseEnter={toggleContactUnderlined}
          onMouseLeave={toggleContactUnderlined}
        >
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
          <div
            className="underline"
            style={{ width: contactUnderlined ? "100%" : "0%" }}
          ></div>
        </li> */}
      </ul>
      {/* End of Wide Screen Navbar */}

      {/* Mobile Navbar - FaBars */}
      <div
        className="mobileToggle"
        style={{ display: !showMobile ? "none" : "" }}
        onClick={handleClick}
      >
        {!mobileNavClicked ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile Navbar - List of Links */}
      <ul
        className="mobileNavBar"
        style={{ display: !mobileNavClicked ? "none" : "" }}
      >
        <li className="mobileNavItem">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="mobileNavItem">
          <Link
            onClick={handleClick}
            to="education"
            smooth={true}
            duration={500}
          >
            Education
          </Link>
        </li>
        <li className="mobileNavItem">
          <Link
            onClick={handleClick}
            to="experience"
            smooth={true}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li className="mobileNavItem">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
      </ul>

      {/* End of Mobile Navbar */}

      {/* Links on the side */}
      <div
        className="keyLinksBar"
        style={{ display: hideNavbar ? "none" : "" }}
      >
        <ul>
          <li className="socialListIcon">
            <a
              href="https://github.com/willk0814"
              target="_blank"
              className="socialLink"
            >
              <div className="socialIcon">
                <p className="iconText">Github</p>
                <FaGithub size={45} color="beige" />
              </div>
            </a>
          </li>

          <li className="socialListIcon">
            <a
              href="https://www.linkedin.com/in/will-koenig/"
              target="_blank"
              className="socialLink"
            >
              <div className="socialIcon">
                <p className="iconText">LinkedIn</p>
                <FaLinkedin size={45} color="beige" />
              </div>
            </a>
          </li>
          <li className="socialListIcon">
            <a
              href={pdf}
              download="Koenig_Resume_2023.pdf"
              className="socialLink"
            >
              <div className="socialIcon">
                <p className="iconText">Resume</p>
                <BsFillPersonLinesFill size={45} color="beige" />
              </div>
            </a>
          </li>
          {/* <li className="socialListIcon">
            <Link to="contact" smooth={true} duration={500}>
              <div className="socialIcon">
                <p className="iconText">Contact Me</p>
                <HiOutlineMail size={45} color="beige" />
              </div>
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
