import React from 'react';
import style from './Resume.module.css';

import ContactID from '../ContactID/ContactID';
import Projects from '../Projects/Projects';
import Experience from '../Exp/Exp';
import Skills from '../Skills/Skills';

const resume = props => (
    <div className={style.Resume}>
        <div className={style.Header}><ContactID /></div>
        <div className={style.Skills}><Skills /></div>
        <div className={style.Projects}><Projects /></div>
        <div className={style.Experience}><Experience /></div>
    </div>
);

export default resume;