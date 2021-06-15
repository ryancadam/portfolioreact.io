import React, { useState } from "react";
import style from "./Resume.module.css";

import ContactID from "../ContactID/ContactID";
import Projects from "../Projects/Projects";
import Experience from "../Exp/Exp";
import Skills from "../Skills/Skills";
import Degree from "../Degree/Degree";

const Resume = () => {
  const [showInfosys, setShowInfosys] = useState(false);
  const [showFreelance, setShowFreelance] = useState(false);
  const [showTeach, setShowTeach] = useState(false);
  const [showFSA, setShowFSA] = useState(false);

  const [showCollage, setShowCollage] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showDegree, setShowDegree] = useState(false);

  const showExpHandler = (e) => {
    const exp = e.target.id;
    if (exp === "Infosys") setShowInfosys(!showInfosys);
    if (exp === "Teach") setShowTeach(!showTeach);
    if (exp === "Freelance") setShowFreelance(!showFreelance);
    if (exp === "FSA") setShowFSA(!showFSA);
  };

  const showProjectHandler = (e) => {
    const proj = e.target.id;
    if (proj === "Portfolio") setShowPortfolio(!showPortfolio);
    if (proj === "Collage") setShowCollage(!showCollage);
  };

  const showEduHandler = (e) => {
    setShowDegree(!showDegree);
  };

  return (
    <div className={style.Resume}>
      <div className={style.Header}>
        <ContactID />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Experience
          showInfosys={showInfosys}
          showFreelance={showFreelance}
          showTeach={showTeach}
          showFSA={showFSA}
          clicked={showExpHandler}
        />
      </div>
      <div>
        <Degree showDegree={showDegree} clicked={showEduHandler} />
      </div>
      <div>
        <Projects
          showPortfolio={showPortfolio}
          showCollage={showCollage}
          clicked={showProjectHandler}
        />
      </div>
    </div>
  );
};

export default Resume;
