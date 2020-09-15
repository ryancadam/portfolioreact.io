import React from "react";
import style from "./Projects.module.css";

import Description from "./Description";

// import Construction from '../../Media/Icons/General/Construction.svg';

// const Icon = <img src={Construction} width="20px" alt="Project" />;

const projects = (props) => {
  return (
    <div className={style.Card}>
      <h2>PROJECTS</h2>
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
        <li id="CutUp" onClick={props.clicked}>
          Cut-up Text Generator
        </li>
        <div hidden={!props.showCutUp}>
          <Description CutUp />
        </div>
        <li id="HW" onClick={props.clicked}>
          HW Quiz
        </li>
        <div hidden={!props.showHW}>
          <Description HW />
        </div>
        <li id="PWD" onClick={props.clicked}>
          Password Checker
        </li>
        <div hidden={!props.showPWD}>
          <Description Pwd />
        </div>
      </ul>
    </div>
  );
};

export default projects;
