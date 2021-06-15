import React from "react";
import style from "./Summary.module.css";

import LocationIcon from "../../Media/Icons/General/Location.svg";

const Icon = (
  <img
    src={LocationIcon}
    style={{ margin: "0 4px 0 12px" }}
    width="16px"
    alt="location"
  />
);

const summary = (props) => (
  <div className={style.Edu}>
    <span>
      Aug '20{Icon}
      <strong>Arlington, TX</strong>
    </span>
    <p>3.65 GPA</p>
    <p>
      Researched and wrote an essay on Tolstoy published in{" "}
      <a
        href="https://globalinsight.journal.library.uta.edu/index.php/globalinsight"
        target="blank"
      >
        <i>Global Insight</i>
      </a>
      , the school’s research journal for the humanities, Oct ‘20. <br />
      &nbsp;Achieved the President’s List in each of my last two semesters.
    </p>
  </div>
);

export default summary;
