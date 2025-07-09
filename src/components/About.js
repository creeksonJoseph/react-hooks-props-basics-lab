import React from "react";

function Links(props) {
  return (
    <>
      <h3>Links</h3>
      <a href={props.links.github}>{props.links.github}</a>
      <a href={props.links.linkedin}>{props.links.linkedin}</a>
    </>
  );
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>

      {props.bio && props.bio.trim() !== "" && <p>{props.bio}</p>}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links={props.links} />
    </div>
  );
}

export default About;
