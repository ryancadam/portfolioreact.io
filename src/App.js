import React, { Component } from 'react';
import style from './App.module.css';

import Resume from './Components/Resume/Resume';

class App extends Component {

  render () {

    return (
      <div className={style.App}>
        <Resume />
      </div>
    );
    }
}

export default App;
