import React from 'react';
import style from './Summary.module.css';

const summary = props => (
    <div className={style.Card}>
        <h2><strong>ABOUT ME</strong></h2>
        <p className={style.Summary}>Skilled and motivated software engineer experienced in programming professional, enterprise-level software in an Agile environment. 2+ years of engineering experience. Always seeking to advance in the industry, take on greater challenges, and master new technologies. </p>
        <br />
    </div>
);

export default summary;