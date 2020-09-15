import React from 'react';
import style from './Exp.module.css';
import Summary from './JobDescription';


const experience = props => (
    <div className={style.Card}>
        <h2>EXPERIENCE</h2>
        <ul className={style.Exp}>
            <li id="Dev" onClick={props.clicked}>
                Software Developer
            </li>
                <div>Freelance</div>
                <p hidden={!props.showDev}><Summary Dev /></p>
            <li id="Teach" onClick={props.clicked}>
                Substitute Teacher
            </li>
                <div>Arlington I.S.D.</div>
                <p hidden={!props.showTeach}><Summary Teach /></p>
            <li id="FSA" onClick={props.clicked}>
                Financial Services Associate   
            </li>
                <div>Fidelity Investments</div>
                <p hidden={!props.showFSA}><Summary FSA /></p>
        </ul>
    </div>
);

export default experience;