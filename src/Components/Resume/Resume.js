import React, { Component } from "react";
import style from "./Resume.module.css";

import ContactID from "../ContactID/ContactID";
import Projects from "../Projects/Projects";
import Experience from "../Exp/Exp";
import Skills from "../Skills/Skills";
import Degree from "../Degree/Degree";

class Resume extends Component {
  state = {
    // projects
    showPortfolio: false,
    showCutUp: false,
    showHW: false,
    showPWD: false,
    // work exp
    showTeach: false,
    showFSA: false,
    // degree
    showDegree: false,
  };

  showProjectHandler = (e) => {
    const proj = e.target.id;
    if (proj === "Portfolio") {
      const doesShow = this.state.showPortfolio;
      this.setState({ showPortfolio: !doesShow });
    } else if (proj === "CutUp") {
      const doesShow = this.state.showCutUp;
      this.setState({ showCutUp: !doesShow });
    } else if (proj === "HW") {
      const doesShow = this.state.showHW;
      this.setState({ showHW: !doesShow });
    } else {
      const doesShow = this.state.showPWD;
      this.setState({ showPWD: !doesShow });
    }
  };

  showExpHandler = (e) => {
    const exp = e.target.id;
    if (exp === "Teach") {
      const doesShow = this.state.showTeach;
      this.setState({ showTeach: !doesShow });
    } else {
      const doesShow = this.state.showFSA;
      this.setState({ showFSA: !doesShow });
    }
  };

  showEduHandler = (e) => {
    const doesShow = this.state.showDegree;
    this.setState({ showDegree: !doesShow });
  };

  render() {
    return (
      <div className={style.Resume}>
        <div className={style.Header}>
          <ContactID />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Projects
            showPortfolio={this.state.showPortfolio}
            showCutUp={this.state.showCutUp}
            showHW={this.state.showHW}
            showPWD={this.state.showPWD}
            clicked={this.showProjectHandler}
          />
        </div>
        <div>
          <Experience
            showTeach={this.state.showTeach}
            showFSA={this.state.showFSA}
            clicked={this.showExpHandler}
          />
        </div>
        <div>
          <Degree
            showDegree={this.state.showDegree}
            clicked={this.showEduHandler}
          />
        </div>
      </div>
    );
  }
}

export default Resume;
