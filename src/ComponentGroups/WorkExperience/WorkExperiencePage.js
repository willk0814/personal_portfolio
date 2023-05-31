import React from "react";
import "../RepeatedPageStyles/PageStyles.css";

export default function WorkExperiencePage() {
  return (
    <div name="experience" className="pageContainer">
      <div className="contentContainer">
        <h1 className="titleText">Relevant Experience</h1>
        <div>
          <p className="subTitle">Sparks Lab - Software Engineer</p>
          <ul className="subList">
            <li className="subListItem">
              Led the developement of a React Native device controller
              application capable of connecting with a research device, running
              tests, and recieving and processing data
            </li>
            <li className="subListItem">
              Upon completion application was deployed on 6 iPads and delivered
              to a Fortune 500 client
            </li>
            <li className="subListItem">
              App usage reduced data collection time by 33%
            </li>
          </ul>
        </div>
        <div>
          <p className="subTitle">Viinko - Software Engineer Intern</p>
          <ul className="subList">
            <li className="subListItem">
              Developed a chrome extension using JavaScript and HTML to be used
              daily by approximately 2400 students through two schools
            </li>
            <li className="subListItem">
              Chrome extension became a core part of the product allowing
              students to move their work directly from Google Classroom to
              Viinko Calendar
            </li>
          </ul>
        </div>
        <div>
          <p className="subTitle">
            Business Basics for Engineers - President & Founder
          </p>
          <ul className="subList">
            <li className="subListItem">
              Founded an academic student organization aimed at teaching myself
              and my peers how to effectively market their STEM degrees in and
              out of tech industries. As president I organizaed meetings,
              recruited speakers from industry, and hosted student led
              discussions over zoom
            </li>
            <li className="subListItem">
              Maintained a membership of 65 students throughout my tenure
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
