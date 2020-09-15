import React from 'react';
import style from './JD.module.css';

import LocationIcon from '../../Media/Icons/General/Location.svg';

const Icon = <img src={LocationIcon} style={{margin: "0 4px 0 12px"}} width="16px" alt="location" />

const jobSum = props => {
    if(props.Dev){
        return <div className={style.Job}>
            <span>May ‘19 - present{Icon}<strong>Arlington, TX</strong></span>            
            <p>Successfully conceived and designed a web-based portfolio site. Experience building friendly intuitive SPAs. Manage and complete multiple projects simultaneously. Presently learning to connect front-end apps to the MongoDB NoSQL database via Node and Express </p></div> 
    } else if(props.Teach){
        return <div className={style.Job}>
            <span>Apr ‘17 – May ‘19{Icon}<strong>Arlington, TX</strong></span>            
            <p>Worked primarily with disadvantaged schools in an effort to provide mentorship to young students. Taught and/or assisted with technology classes, including some basic programming.</p></div> 
    } else{ 
        return <div className={style.Job}>
            <span>Apr ‘17 – May ‘19{Icon}<strong>Westlake, TX</strong></span>
            <p>Served as my team’s escalation ticket leader, in some cases triaging clients’ issues to the appropriate back office department. Doubled team’s efficiency in resolving tickets and reduced overall reliance on the solution desk. Served frequently in a mentor/mentee capacity towards new hires in order to teach them Fidelity’s software and frameworks. Utilized Xtrac, Fidelity’s enterprise workflow automation software and document manager to track and resolve both internal and external issues.</p></div>
    }
};

export default jobSum;