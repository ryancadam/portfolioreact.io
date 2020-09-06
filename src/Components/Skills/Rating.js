import React from 'react';
import style from './Rating.module.css';

import Empty from '../../Media/Icons/Rating/empty.svg';
import Full from '../../Media/Icons/Rating/full.svg';
import Half from '../../Media/Icons/Rating/half.svg';

const positive = <img src={Full} alt="star" />;
const negative = <img src={Empty} alt="emptystar" />;
const half = <img src={Half} alt="half star" />;

const rating = props => {
    if(props.two){
        return <span className={style.Star}>{positive}{positive}{negative}{negative}{negative}</span>
    } else if(props.twoHalf){
        return <div className={style.Star}>{positive}{positive}{half}{negative}{negative}</div>
    } else if(props.three){
        return <div className={style.Star}>{positive}{positive}{positive}{negative}{negative}</div>
    } else if(props.threeHalf){
        return <div className={style.Star}>{positive}{positive}{positive}{half}{negative}</div>
    } else if(props.four){
        return <div className={style.Star}>{positive}{positive}{positive}{positive}{negative}</div>
    } else if(props.fourHalf){
        return <div className={style.Star}>{positive}{positive}{positive}{positive}{half}</div>
    } else {
        return <div className={style.Star}>{positive}{positive}{positive}{positive}{positive}</div>
    }
};

export default rating;