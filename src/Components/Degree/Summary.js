import React from 'react';
import style from './Summary.module.css';

import LocationIcon from '../../Media/Icons/General/Location.svg';

const Icon = <img src={LocationIcon} style={{margin: "0 4px 0 12px"}} width="16px" alt="location" />

const summary = props => (
    <div className={style.Edu}>
        <span>Aug '20{Icon}<strong>Arlington, TX</strong></span>            
        <p>3.65 GPA</p>
        <p>My paper on Tolstoy’s <i>Resurrection</i> and his nonviolent philosophy will appear in <a href="https://globalinsight.journal.library.uta.edu/index.php/globalinsight" target="blank"><i>Global Insight</i></a>, the school’s undergrad research journal, in Oct. ‘20</p>
    </div> 
);

export default summary;