import React from "react";

// Profile component

export default function Profile({title}) {
    const imgSrc = "https://scontent-cdt1-1.xx.fbcdn.net/v/t31.0-8/22179930_1712875245413406_3245233517546279080_o.jpg?_nc_cat=100&_nc_oc=AQmWJVcX5lLCfr_iSr5dmz0Q_qp1NP0o9XMViADAUZWjLFoIPuVNKM3fJf5ZdelwqBJ5ozRkDGZTg3OJCpfDcCd-&_nc_ht=scontent-cdt1-1.xx&oh=63e976cdddf2dff9ee66fd1cee0903a1&oe=5EAA644C";
    // simple style for fun
    const styles = { display: 'none'};
    return (
      <div>
        <header>
          <h1>
            <a className="hvr-buzz-out" title={title} >
                <img className="pp" alt="Personnal Profile" src={imgSrc} />
            </a>
          </h1>
        </header>
        <section>
            <div>
                <p>
                    <b><a href="https://github.com/Svngoku">Svngoku</a></b> is a junior full-stack developer and programmer passionate by programming and web developpment.   
                    <a onClick={() => toggleMe('detailed-description')} href="#!🕶" ><b>Read<span data-toggle-text="less"> more</span></b></a>
                </p>
            </div>

            <div id="detailed-description" style={styles}>
                <p> Passionate about desktop, mobile and web application programming, I started in the system programming with <b>C</b> and <b>PHP</b>, two wonders that introduced me to the web and system development. Now I m using <b>Laravel</b> such as php framework , 
                followed by  <b>JavaScript</b> and is frameworks such as <a href="https://threejs.org/"><b>Threejs</b></a>  , <a href="https://reactjs.org/"><b>ReactJs</b></a> and <a href="https://nodejs.org/en/"><b>NodeJs</b></a> to create dynamic, interactive websites ,
                I write in <b>Python 3</b> with  <a href="http://flask.pocoo.org/"><b>Flask</b></a> framework to create APIS , and web components  . 
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