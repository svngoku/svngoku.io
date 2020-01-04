import React from "react";


export default function Tools() {
    return (
         <div>
            <h3 className="project">Tools</h3>
            <p>What`s better than sharing the tools that allow me to code properly.</p> 
            <pre>
                <Tool className="request tools"
                    resume="Probably the best Linux system for the web developer. I love working with this operating system. I can easily deploy applications and use the command line which is a great tool " 
                    link="https://www.ubuntu.com/"
                    title="Ubuntu 😍"
                />

                <Tool className="request tools" resume="We provide users with a hosted environment to practice coding and to build and deploy software and web servers, made available through our Service" 
                    link="http://repl.it/" title="Replt.it"
                />
              
                <Tool className="request tools" resume="fish is a smart and user-friendly command line shell for Linux, macOS, and the rest of the family. " 
                    link="https://fishshell.com/" title="fish shell"
                />
            </pre>

          </div>

    )
}


function Tool({className, resume, link, title}) {
    return (
        <div>
            <code className={className}>
                <a title={resume} href={link}>{title}</a>
            </code>
        </div>
    );
}