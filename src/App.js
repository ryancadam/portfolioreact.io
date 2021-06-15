import React from "react";
import style from "./App.module.css";

import Resume from "./Components/Resume/Resume";

const App = () => {
  return (
    <div className={style.App}>
      <Resume />
    </div>
  );
};

export default App;
