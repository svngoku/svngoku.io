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

            <Link className="request code" 
                resume="Grafikart is web site powered by a french web master developer called Jonathan , you can Improve yourself and learn new things through free video tutorials"
                link="https://www.grafikart.fr/"
                title="Grafikart"
            />

            <Link className="request sql"
                resume="This link is a gist containing all about MySQL"
                link="https://gist.github.com/hofmannsven/9164408"
                title="Intro on MySQL"
            />

            <Book className="request php" 
                resume="This book it's about laravel , a framework php based on MVC architecture"
                link="https://www.amazon.fr/Laravel-framework-efficace-d%C3%A9velopper-applications/dp/2409013783"
                title="Laravel | Un framework efficace pour developper vos applications PHP"
            />

            <Link className="request javascript"
                resume="frontendmaster is a great and super plateform for learning web developement, specially front-end and back-end technologies with Javacript"
                link="http://frontendmasters.com/"
                title="frontendmaster"
            />
            
        </pre>
    </section>
    );
}

// pure function
function Book({className, resume, link, title }){
    return (
        <div>
            <code className={className}>
                <a title={resume} href={link}>{title}</a>
            </code>
        </div>
    );
}

function Link({className, resume, link, title }){
    return (
        <div>
            <code className={className}>
                <a title={resume} href={link}>{title}</a>
            </code>
        </div>
    );
}