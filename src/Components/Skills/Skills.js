import React from "react";
import style from "./Skills.module.css";

import Rating from "./Rating";

const skills = (props) => (
  <div className={style.Card}>
    <h2>Skills</h2>
    <ul className={style.SkillList}>
      <li>
        <h3>Languages</h3>
        <ul>
          <li>
            TypeScript/JavaScript
            <Rating four />
          </li>
          <li>
            Python
            <Rating two />
          </li>
          <li>
            Java
            <Rating threeHalf />
          </li>
          <li>
            SQL
            <Rating three />
          </li>
        </ul>
      </li>
      <li>
        <h3>Development</h3>
        <ul>
        <li>
            Angular
            <Rating threeHalf />
          </li>
          <li>
            React
            <Rating four />
          </li>
          <li>
            PostgreSQL
            <Rating three />
          </li>
          <li>
            HTML5
            <Rating four />
          </li>
          <li>
            CSS
            <Rating four />
          </li>
        </ul>
      </li>
      <li>
        <h3>Tools</h3>
        <ul>
          <li>
            Visual Studio Code
            <Rating fourHalf />
          </li>
          <li>
            Eclipse
            <Rating three />
          </li>
          <li>
            Git/GitHub
            <Rating three />
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default skills;
