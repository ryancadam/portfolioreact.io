import React from 'react';
import style from './Description.module.css';

const description = props => {
    if(props.Portfolio){
        return <p className={style.Proj}>The site you are currently viewing. I built it out of React, JavaScript, CSS and HTML in order to exercise my web developer muscles as well as showcase a few sample projects. All code available on GitHub.</p> 
    } else if(props.CutUp){
        return <p className={style.Proj}>Based on William Burrough’s famous <a href="https://en.wikipedia.org/wiki/Cut-up_technique" target="blank">cut-up method</a>, which he used for his novel <i>Naked Lunch</i>, this program seeks to lift creative writers out of their writer’s block. It uses Python, Django, HTML, CSS, and Bootstrap, plus the Beautiful Soup library to scrape Project Gutenberg’s “Top 100” list for an entire text, chosen randomly. Snippets of the text are then cut out and rearranged to generate a new, compact text, with (perhaps) a deeper secret meaning. All code available on GitHub.</p>
    } else if(props.HW){
        return <p className={style.Proj}>AKA "The Reuben Quiz". Conceived initially to assist my wife in quizzing her students during the Covid lockdown but never used, this quiz template can be easily customized to reflect any subject or current lesson plan. Built with React, JavaScript, HTML, and CSS. All code available on GitHub.</p>
    } else {
        return <p className={style.Proj}>Securely seaches if a given password has been compromised in a data breach. Uses the SHA-1 cryptographic hash function via the Hashlib module to encrypt the given password. For additional security, only part of the password is sent to the API, returning a list which is then matched locally with the remainder of the encrypted password. Created with Python, Django, Bootstrap, HTML, CSS and the “Have I Been Pwned” API. Functionality based on a tutorial by Andrea Neagoi, which I riffed on and then designed into an interactive SPA. All code available on GitHub.</p>
    }
};

export default description;