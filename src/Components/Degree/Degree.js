import React from "react";
import style from "./Degree.module.css";

import Summary from "./Summary";

const degree = (props) => (
  <div className={style.Card}>
    <h2>DEGREE</h2>
    <ul className={style.Edu}>
      <li id="Degree" onClick={props.clicked}>
        English BA
      </li>
      <div>University of Texas, Arlington</div>
      <p hidden={!props.showDegree}>
        <Summary />
      </p>
    </ul>
  </div>
);

export default degree;
