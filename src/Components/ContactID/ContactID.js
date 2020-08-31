import React from 'react';
import style from './ContactID.module.css';

import Mug from './Mug';
import Summary from '../Summary/Summary';

const contactID = props => (
    <div className={style.Card}>
        <div>
            <Mug />
            <h2><strong>RYAN ADAM</strong></h2>
            <h3>Software Engineer</h3>
            <p>email linkedin github</p>
        </div>
        <div><Summary /></div>
    </div>
);

export default contactID;