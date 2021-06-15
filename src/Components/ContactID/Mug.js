import React from 'react';
import IDPic from '../../Media/Images/me.jpg';
import style from './Mug.module.css';

const Mug = props => (
    <div className={style.Mug}>
        <img src={IDPic} alt="Lookin dapper" />
    </div>
);

export default Mug;