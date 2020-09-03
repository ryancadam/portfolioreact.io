import React from 'react';
import style from './ContactMe.module.css';

import Linked from '../../Media/Icons/Contact/linked.png';
import GitHub from '../../Media/Icons/Contact/GitHub.png';
import Email from '../../Media/Icons/Contact/email.png';


const contactIcons = props => (
    <div className={style.Contact}>
        <a href="https://www.linkedin.com/in/ryan-adam-linked/" target="blank"><img src={Linked}  alt="LinkedIn" /></a>
        <a href="https://github.com/ryancadam" target="blank"><img src={GitHub} alt="GitHub" /></a>
        <a href="mailto:ryancadam88@gmail.com"><img src={Email} title="ryancadam88@gmail.com" alt="Email" /></a>
    </div>
);

export default contactIcons;