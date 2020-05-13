import React, { useState, useEffect } from "react";
import axios from "axios";

const openSource = () => {
    const [repositories, setRepositories] = useState([]);
    
    useEffect(() => {
        axios.get(`https://api.github.com/users/svngoku/repos`, {
            headers: { Authorization: "f910739549334dd00e407db640c407076b4c6c98" }
        }).then(res => {
            const repos = res.data;
            setRepositories(repos);
        })
    }, [])
    const renderRepo = (repo) => (
        <div className="each" key="{repo.id}">
            <h4 className="">{repo.name}</h4>
            <p>{repo.description}</p>
        </div>

    );
    return (
        <div className="container">
            <h3 className="project">Open source project</h3>
            <section>
                {
                    (repositories && repositories.length > 0) ?
                    ( repositories.map(repo => renderRepo(repo))) : (
                            <span className="center" role="img" aria-label="failed men">No repository found 😵</span>
                    )
                }
            </section>
        </div>
    );

}


export default openSource;