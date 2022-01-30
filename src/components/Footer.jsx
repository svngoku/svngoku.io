import React from "react";      

export default function Footer() {
    const links = {
        twitter : "https://twitter.com/AsapGoku_",
        github: "https://github.com/Svngoku",
        portfolio: "www.chrysniongolo.com"
    }
    return (
        <div>
            <footer>
                <small className="disclaimer">This is why we love coding 💻</small>
                <a id="twitter" className="btn follow twitter" href={links.twitter}><i></i><span>Twitter</span></a>
                <a id="github" className="btn follow github" href={links.github}><i></i><span>GitHub</span></a>
                <a className="btn follow homepage" href={links.portfolio} title="Portfolio"><i></i>
                <span></span>
                </a>
                <small className="contribution"><b>Copyright:</b> 2022 by <a href="/">Marty NIONGOLO</a></small>
            </footer>
        </div>
    )
}