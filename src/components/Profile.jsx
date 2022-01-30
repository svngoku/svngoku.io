import React, { useEffect, useState } from "react";

// Profile component

export default function Profile({title}) {
    const imgSrc = "https://d1fdloi71mui9q.cloudfront.net/QEL9PkV7SV6j63pINHrK_4pFr9whWqSVqOlY2";
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
            <a className="github-button" href="https://github.com/svngoku" data-show-count="true" aria-label="Follow @svngoku on GitHub">@svngoku</a>
            {/* <script src="https://gist.github.com/svngoku/5e3b1e9ff094b7eda68b6f395385ad47.js"></script> */}
        </header>
        <section>
            <div>
                <p>I'm
                    <b><a href="https://github.com/Svngoku"> Chrys Fé-Marty NIONGOLO</a></b>, a Full-stack developer and Data Scientist passionate by programming, web developpment, problem solving and Artificial Intelligence.   
                    <a className="more" onClick={() => toggleMe('detailed-description')}><b>Read<span data-toggle-text="less"> more</span></b></a>
                </p>
            </div>

            <div id="detailed-description" style={styles}>
                <p> 
                    Passionate by computer science, I started with the object oriented programming (<b>C#</b> and <b>C</b>), working on a <b>Linux environment</b> and Databases systems (<b>SQL</b> and <b>NoSQL</b>), that introduced me on the basic understanding of computer science and is world.
                    <br />
                    My passion became more and more consequent, I decided to learn web and mobile development by myself on <b>Youtube</b>, by reading programming books and articles on the web in addition to my academics 
                    courses as a <b>Junior full stack developer</b> and <b>IT Project Manager</b>.
                    <br />
                    <br />
                    Now, I do Data science as <b>Big Data Engineer</b>
                    <br />
                    This allows me to become an expert in data analysis and data treatment, able to solve complex problems with deep learning techniques, machine learning, data engineering 
                    (<b>ETL, DataLake, Data Warehousing</b>) and data visualization.
                    With the goal to reveal the true value of data by processing, analyzing and modeling it and then interpreting the result(s).
                    <br />
                    <br />
                    After 6 years in this binary and incredibly evolving world, I consider myself a multilingual computer programmer and a technology entrepreneur.
                </p>
            </div>
        </section>
        <section>
            <GitProfile />
        </section>


       </div>
    );
};


function toggleMe(n){
    let e = document.getElementById(n);
    if(!e){
        return!0
    };
    if('none'==e.style.display){
        e.style.display='block'
    } else { 
        e.style.display='none'
    };return!0
};


const GitProfile = () => {
    return (
    <React.Fragment>
        <div>
            <h3 className="project">🏆 Profile</h3>
            <div align="center">
                <img alt="" className="github_profile" src="https://github-readme-streak-stats.herokuapp.com?user=Svngoku&hide_border=false" alt="jaayperez" /> <br />
                <br />
                <img alt="" className="github_profile" src="https://github-readme-stats.vercel.app/api?username=svngoku&show_icons=true&count_private=true&theme=merko&text_color=c9cacc&icon_color=2bbc8a&bg_color=1d1f21" />
                <br />

                <img alt="" className="github_profile" src="https://github-readme-stats.vercel.app/api/top-langs/?layout=compact&username=svngoku&theme=merko&text_color=c9cacc&icon_color=2bbc8a&bg_color=1d1f21" />
            </div>
        </div>                                                                                                       
    </React.Fragment>

    );
} 