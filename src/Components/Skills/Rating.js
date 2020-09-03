import React from 'react';
import style from './Rating.module.css';

import Empty from '../../Media/Icons/Rating/star.svg';
import Blue from '../../Media/Icons/Rating/blue.svg';

const positive = <img src={Blue} alt="star" />;
const negative = <img src={Empty} alt="emptystar" />;

const rating = props => {
    if(props.two){
        return <span className={style.Star}>{positive}{positive}{negative}{negative}{negative}</span>
    } else if(props.three){
        return <div className={style.Star}>{positive}{positive}{positive}{negative}{negative}</div>
    } else if(props.four){
        return <div className={style.Star}>{positive}{positive}{positive}{positive}{negative}</div>
    } else {
        return <div className={style.Star}>{positive}{positive}{positive}{positive}{positive}</div>
    }
};

export default rating;