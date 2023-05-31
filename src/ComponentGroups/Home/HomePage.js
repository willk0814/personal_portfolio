import React from "react";
import "../RepeatedPageStyles/PageStyles.css";

export default function HomePage() {
  return (
    <div name="home" className="pageContainer">
      <div className="contentContainer">
        <p>Hi, my name is</p>
        <h1 className="titleText">Will Koenig</h1>
        <h1
          className="titleText"
          style={{
            color: "grey",
          }}
        >
          I am a Full Stack Software Engineer
        </h1>
        <p>
          A full stack Python and JavaScript engineer, with experience in both
          front-end and back-end development. Created dynamic applications with
          React Native and developed APIs using Node. I am passionate about
          delivering high-quality projects that bring real value to their end
          users. I’ve worked in team environments following Agile development
          methodologies.
        </p>
      </div>
    </div>
  );
}
