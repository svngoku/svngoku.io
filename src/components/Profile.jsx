import React from "react";

// Profile component

export default function Profile({ name, animal, breed }) {
    const imgSrc = "https://raw.githubusercontent.com/svngoku/Pyline-App/master/pp.png"
    const styles = {
        display: 'none',
        
    }

    return (
      <div>
        <header>
          <h1>
            <a className="hvr-buzz-out" title="Marty NIONGOLO | Svngoku">
                <img className="pp" alt="Personnal Profile" src={imgSrc} />
            </a>
          </h1>
        </header>
        <section>
            <div>
                <p>
                    <b><a href="https://github.com/Svngoku">Svngoku</a></b> is a junior full-stack developer and programmer passionate by programming and web developpment
                    <a onClick={() => toggleMe('detailed-description')} href="#!🕶" >Read <span data-toggle-text="less">more</span></a>
                </p>
            </div>

            <div id="detailed-description" style={styles}>
                <p> Passionate about desktop, mobile and web application programming, I started in the system programming with <b>C</b> and 
                <b>PHP</b>, two wonders that introduced me to the web and system development. Now I'm using <b>Laravel</b> such as php framework , 
                followed by  <b>JavaScript</b> and is frameworks such as <a href="https://threejs.org/"><b>Threejs</b></a>  , <a href="https://reactjs.org/"><b>ReactJs</b></a>  
                and <a href="https://nodejs.org/en/"><b>NodeJs</b></a> to create dynamic, interactive websites ,
                I write in <b>Python 3</b> with  <a href="http://flask.pocoo.org/"><b>Flask</b></a> framework to create API'S , and web components  . 
                That allow me to code responsively and intelligently. 
                I am a developer fascinated by new technologies and all his domains .
                </p>
            </div>
        </section>

       </div>
    );
};


function toggleMe(n){var e=document.getElementById(n);if(!e){return!0};if('none'==e.style.display){e.style.display='block'}
else{e.style.display='none'};return!0};