import React from 'react';
import style from './Projects.module.css';

const projects = props => (
    <div className={style.Card}>
        <h2>PROJECTS</h2>
        <ul className={style.Projects}>
            <li>Portfolio Site</li>
            <li>Cut-up Generator</li>
            <li>HW Quiz</li>            
            <li>Password</li>
        </ul>
    </div>
);

export default projects;