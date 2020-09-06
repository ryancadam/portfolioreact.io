import React from "react";
import style from "./ContactID.module.css";

import Mug from "./Mug";
import Summary from "./Summary/Summary";
import ContactIcons from "./ContactMe";

const contactID = (props) => (
  <div className={style.Card}>
    <div>
      <Mug />
      <h2>
        <strong>RYAN ADAM</strong>
      </h2>
      <h3>Software Developer</h3>
    </div>
    <div>
      <Summary />
      <ContactIcons />
    </div>
  </div>
);

export default contactID;
