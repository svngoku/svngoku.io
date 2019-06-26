import React from "react";

export default function BooksLinks() {
    return (
        <section>
            <h3 className="project">Books and Links</h3>
        <p>The books I had to read in order to perform my skills.</p>
        <pre>
            <Book  className="request javascript"  
                resume="This is a book about JavaScript, programming, and the wonders of the digital. You can read it online here, or get your own" 
                link="https://eloquentjavascript.net/"
                title="Eloquent JavaScript"
            />
            
            {/* <code className="request code"><a title="Grafikart is web site powered by a french web master developer called Jonathan , you can Improve yourself and learn new things through free video tutorials" href="https://www.grafikart.fr/">Grafikart</a></code>
            <br />
            <code className="request php">
            <a href="https://www.amazon.fr/Laravel-framework-efficace-d%C3%A9velopper-applications/dp/2409013783">Laravel | Un framework efficace pour developper vos applications PHP</a>
            </code>
            <br />
            <code className="request sql">
            <a title="This link is a gist containing all about MySQL" href="https://gist.github.com/hofmannsven/9164408">MySQL</a>
            </code> */}
        </pre>
    </section>
    );
}

function Book({className, resume, link, title }){
    return (
        <code className={className}>
            <a title={resume} href={link}>{title}</a>
        </code>
    );
}

function Link({className, resume, link, title }){
    return (
        <code className={className}>
            <a title={resume} href={link}>{title}</a>
        </code>
    );
}