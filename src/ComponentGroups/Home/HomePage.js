import React from "react";
import "../PageStyling/PageStyles.css";

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
          I am a full stack software engineer who is interested in learning and
          building new things all the time. Scroll through this site in order to
          read about my education and work experience, as well as view some of
          my projects.
        </p>
      </div>
    </div>
  );
}
