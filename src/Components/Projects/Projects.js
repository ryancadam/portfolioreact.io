import React from "react";
import style from "./Projects.module.css";

import Description from "./Description";

const projects = (props) => {
  return (
    <div className={style.Card}>
      <h2>SELECTED PROJECTS</h2>
      <ul className={style.Projects}>
        <li id="Collage" onClick={props.clicked}>
          Text Collage App
        </li>
        <div hidden={!props.showCollage}>
          <Description Collage />
        </div>
        <li id="Portfolio" onClick={props.clicked}>
          Portfolio Site
        </li>
        <div hidden={!props.showPortfolio}>
          <Description Portfolio />
        </div>
      </ul>
    </div>
  );
};

export default projects;
