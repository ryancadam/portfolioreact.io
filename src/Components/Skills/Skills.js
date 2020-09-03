import React from 'react';
import style from './Skills.module.css';

import Rating from './Rating';

const skills = props => (
    <div className={style.Card}>
        <h2>Skills</h2>
        <ul className={style.SkillList}>
            <li><h3>Languages</h3>
                <ul>
                    <li>Python<Rating four /></li>
                    <li>JavaScript<Rating four /></li>
                </ul>
            </li>
            <li><h3>Development</h3>
                <ul>
                    <li>React<Rating four /></li>
                    <li>HTML5<Rating four /></li>
                    <li>CSS<Rating four /></li>
                    <li>Bootstrap<Rating three /></li>
                    <li>Django<Rating three /></li>
                </ul>
            </li>
            <li><h3>Tools</h3>
                <ul>
                    <li>Visual Studio Code<Rating five /></li>
                    <li>PyCharm<Rating three /></li>
                    <li>Git<Rating two /></li>
                </ul>
            </li>
        </ul>
    </div>
);

export default skills;