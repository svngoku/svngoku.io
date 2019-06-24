import React from "react";
import ScriptTag from 'react-script-tag';

export default function Languages(){
    return (
    <div>
      <div> 
        <Language className="js" 
        link="https://www.javascript.com/" 
        name="JavaScript" stars={3} language="javascript" resume="was introduced in 1995 as a way to add programs to web pages in the Netscape Navigator browser. The language has since been adopted by all other major graphical web browsers. It has made modern web applications possible—applications with which you can interact directly without doing a page reload for every action. JavaScript is also used in more traditional websites to provide various forms of interactivity and cleverness.
        It is important to note that JavaScript has almost nothing to do with the programming language named Java. The similar name was inspired by marketing considerations rather than good judgment. When JavaScript was being introduced, the Java language was being heavily marketed and was gaining popularity. Someone thought it was a good idea to try to ride along on this success. Now we are stuck with the name.
        After its adoption outside of Netscape, a standard document was written to describe the way the JavaScript language should work so that the various pieces of software that claimed to support JavaScript were actually talking about the same language. This is called the ECMAScript standard, after the Ecma International organization that did the standardization. In practice, the terms ECMAScript and JavaScript can be used interchangeably—they are two names for the same language.
        I decide to learn JS because is a very deep , quick and beautiful language .  And i recommend all peoples to do the same thing 😊"
        code="https://gist.github.com/svngoku/b47ef0c9d21cb38d07275ec013e34a4b.js" />        
       </div>
       
       <div>
        <Language className="php" 
            link="https://secure.php.net/" 
            name="PHP" stars={2} language="php" resume=" (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used 
            open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML .
            The PHP code is enclosed in special start and end processing instructions that allow you to jump into and out of 'PHP 
            What distinguishes' PHP from something like client-side JavaScript 
            is that the code is executed on the server, generating HTML which is then sent to the client. 
            The client would receive the results of running that script, but would not know what the underlying code was. 
            You can even configure your web server to process all your HTML files with PHP, 
            and then there's really no way that users can tell what you have up your sleeve."
            code="https://gist.github.com/svngoku/b47ef0c9d21cb38d07275ec013e34a4b.js" />
        </div>
    </div>
    );
}

 function Language({className, link , name, stars, language,resume, code}) {
    return (
        <div className={className}>
                <p><b><a href={link}>{name}</a></b> { star(stars).map((item => { return ( item ) })) }</p>
                <pre>
                    <code className={"request " + language}>
                        {resume}
                    </code>                         
                        <ScriptTag isHydrating={true}  type="text/javascript" src={code} /> 
                </pre>
        </div>
    )   
}

function star(number) {
    const imgStar = "https://dumielauxepices.net/sites/default/files/stars-clipart-explosion-779070-6341730.png";
    const link = <img className="star" src={imgStar} width="35" />;
    var content = [];

    for(var i = 0; i < number; i++) {
         content.push(link);   
    }
     return content;
}