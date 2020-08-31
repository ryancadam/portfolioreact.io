import React, { Component } from 'react';
import style from './App.module.css';

import Resume from './Components/Resume/Resume';

class App extends Component {

  state={

  }

  render () {

    return (
      <div className={style.App}>
        <Resume />
      </div>
    );
    }
}

export default App;
