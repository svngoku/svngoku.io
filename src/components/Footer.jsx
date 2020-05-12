import React from "react";

export default function Footer() {
    const links = {
        twitter : "https://twitter.com/AsapGoku_",
        github: "https://github.com/Svngoku",
        portfolio: "https://portefoliomartynio.000webhostapp.com/Portfolio/"
    }
    return (
        <div>
            <footer>
                <small className="disclaimer">This is why we love coding 💻</small>
                <a id="twitter" className="btn follow twitter" href={links.twitter} target="_blank"><i></i><span>Twitter</span></a>
                <a id="github" className="btn follow github" href={links.github} target="_blank"><i></i><span>GitHub</span></a>
                <a className="btn follow homepage" href={links.portfolio} target="_blank" title="Portfolio"><i></i>
                <span></span>
                </a>
                <small className="contribution"><b>Copyright:</b> 2020 by <a href="https://portefoliomartynio.000webhostapp.com/Portfolio/" target="_blank">Marty NIONGOLO</a></small>
            </footer>
        </div>
    )
}