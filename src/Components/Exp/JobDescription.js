import React from "react";
import style from "./JD.module.css";

import LocationIcon from "../../Media/Icons/General/Location.svg";

const Icon = (
  <img
    src={LocationIcon}
    style={{ margin: "0 4px 0 12px" }}
    width="16px"
    alt="location"
  />
);

const jobSum = (props) => {
  if (props.Infosys) {
    return (
      <div className={style.Job}>
        <span>
          Oct '20 - present{Icon}
          <strong>Richardson, TX</strong>
        </span>
        <p>
          &nbsp;Currently working with a nationally-distributed team to design,
          build, and maintain an internal-facing application/website to track
          employee metrics and set new individual goals. <br />
          &nbsp;Environment: TypeScript/Angular, Java, PostgreSQL. Git for
          version control.
        </p>
      </div>
    );
  } else if (props.Freelance) {
    return (
      <div className={style.Job}>
        <span>
          May ‘19 - Oct '20{Icon}
          <strong>Arlington, TX</strong>
        </span>
        <p>
          &nbsp;Built SPA’s principally in React and Angular. <br />
          &nbsp;Managed and completed multiple projects simultaneously. <br />
          &nbsp;Continually researched and familiarized myself with new
          technologies/libraries/frameworks, including Angular, React, and some
          Django.
        </p>
      </div>
    );
  } else if (props.Teach) {
    return (
      <div className={style.Job}>
        <span>
          Apr ‘17 – May ‘19{Icon}
          <strong>Arlington, TX</strong>
        </span>
        <p>
          &nbsp;Worked primarily with disadvantaged schools in an effort to
          provide mentorship to young students. <br />
          &nbsp;Taught and/or assisted with technology classes, including some
          basic programming.
        </p>
      </div>
    );
  } else {
    return (
      <div className={style.Job}>
        <span>
          Apr ‘17 – May ‘19{Icon}
          <strong>Westlake, TX</strong>
        </span>
        <p>
          &nbsp;Served as my team’s escalation ticket leader, in some cases
          triaging clients’ issues to the appropriate back office department.
          Doubled team’s efficiency in resolving tickets and reduced overall
          reliance on the solution desk. <br />
          &nbsp;Served frequently in a mentor/mentee capacity towards new hires
          in order to teach them Fidelity’s software and frameworks. <br />
          &nbsp;Utilized Xtrac, Fidelity’s enterprise workflow automation
          software and document manager to track and resolve both internal and
          external issues.
        </p>
      </div>
    );
  }
};

export default jobSum;
