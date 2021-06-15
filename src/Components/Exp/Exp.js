import React from "react";
import style from "./Exp.module.css";
import Summary from "./JobDescription";

const experience = (props) => (
  <div className={style.Card}>
    <h2>EXPERIENCE</h2>
    <ul className={style.Exp}>
      <li id="Infosys" onClick={props.clicked}>
        Infosys
      </li>
      <div>Software Developer, Associate</div>
      <p hidden={!props.showInfosys}>
        <Summary Infosys />
      </p>
      <li id="Freelance" onClick={props.clicked}>
        Freelance
      </li>
      <div>Software Developer</div>
      <p hidden={!props.showFreelance}>
        <Summary Freelance />
      </p>
      <li id="Teach" onClick={props.clicked}>
        Arlington I.S.D.
      </li>
      <div>Substitute Teacher</div>
      <p hidden={!props.showTeach}>
        <Summary Teach />
      </p>
      <li id="FSA" onClick={props.clicked}>
        Fidelity Investments
      </li>
      <div>Financial Services Associate</div>
      <p hidden={!props.showFSA}>
        <Summary FSA />
      </p>
    </ul>
  </div>
);

export default experience;
