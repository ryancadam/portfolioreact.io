import React from 'react';
import style from './Description.module.css';

const description = props => {
    if (props.Collage){
        return <p className={style.Proj}>Built in React, this <a href="https://ryancadam.github.io/react-text-collage.io/" target="blank">app</a> takes two user-inputted texts and combines them randomly to generate a new "collage" text. Designed to help creative writers overcome writer’s block. Under Construction! Check back for user-authentication and the option to store your “collages” to a unique account.</p> 
    } else if(props.Portfolio){
        return <p className={style.Proj}>The site you are currently viewing. I built it out of React, JavaScript, CSS and HTML in order to exercise my web developer muscles as well as showcase a few sample projects. All code available on GitHub.</p> 
    } 
};

export default description;