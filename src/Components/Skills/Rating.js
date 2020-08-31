import React from 'react';
import style from './Rating.module.css';

import Empty from '../../Media/Icons/star.svg';
import Filled from '../../Media/Icons/star-filled.svg';
import Blue from '../../Media/Icons/blue.svg';

const positive = <img src={Blue} alt="star" />;
const negative = <img src={Empty} alt="emptystar" />;

const rating = props => {
    if(props.three){
        return <span className={style.Star}>{positive}{positive}{positive}{negative}{negative}</span>
    } else if(props.four){
        return <div className={style.Star}>{positive}{positive}{positive}{positive}{negative}</div>
    } else {
        return <div className={style.Star}>{positive}{positive}{positive}{positive}{positive}</div>
    }
};

export default rating;