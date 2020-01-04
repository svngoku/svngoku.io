import React from "react";
import RenderGist from "react-render-gist"
export default function Languages(){
    return (
    <div>
       <h3 className="project">languages</h3>
      <div> 
        <Language className="js" 
        link="https://www.javascript.com/" 
        name="JavaScript" stars={4} language="javascript" resume="was introduced in 1995 as a way to add programs to web pages in the Netscape Navigator browser. The language has since been adopted by all other major graphical web browsers. It has made modern web applications possible—applications with which you can interact directly without doing a page reload for every action. JavaScript is also used in more traditional websites to provide various forms of interactivity and cleverness.
        It is important to note that JavaScript has almost nothing to do with the programming language named Java. The similar name was inspired by marketing considerations rather than good judgment. When JavaScript was being introduced, the Java language was being heavily marketed and was gaining popularity. Someone thought it was a good idea to try to ride along on this success. Now we are stuck with the name.
        After its adoption outside of Netscape, a standard document was written to describe the way the JavaScript language should work so that the various pieces of software that claimed to support JavaScript were actually talking about the same language. This is called the ECMAScript standard, after the Ecma International organization that did the standardization. In practice, the terms ECMAScript and JavaScript can be used interchangeably—they are two names for the same language.
        I decide to learn JS because is a very deep , quick and beautiful language .  And i recommend all peoples to do the same thing 😊"
        
        id="b47ef0c9d21cb38d07275ec013e34a4b" />        
       </div>
       
       <div>
        <Language className="php" 
            link="https://secure.php.net/" 
            name="PHP" stars={3} language="php" resume=" (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used 
            open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML .
            The PHP code is enclosed in special start and end processing instructions that allow you to jump into and out of 'PHP 
            What distinguishes' PHP from something like client-side JavaScript 
            is that the code is executed on the server, generating HTML which is then sent to the client. 
            The client would receive the results of running that script, but would not know what the underlying code was. 
            You can even configure your web server to process all your HTML files with PHP, 
            and then there's really no way that users can tell what you have up your sleeve."
            id="1bf4b23de900cf2725bd90d89767b31a" />
        </div>

        <div>
            <Language className="py" link="https://docs.python.org"
                name="Python"  stars={3} language="python" resume="an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace. It provides constructs that enable clear programming on both small and large scales. In July 2018, Van Rossum stepped down as the leader in the language community.
                Python features a dynamic type system and automatic memory management. It supports multiple programming paradigms, including object-oriented, imperative, functional and procedural, and has a large and comprehensive A standard library in computer programming is the library made available across implementations of a programming language. These libraries are conventionally described in programming language specifications; however, contents of a language's associated library may also be determined (in part or whole) by more informal practices of a language's community. 
                Python interpreters are available for many operating systems. CPython, the reference implementation of Python, is open source software and has a community-based development model, as do nearly all of Python's other implementations. Python and CPython are managed by the non-profit Python Software Foundation 🐍."
                id="ce68ed05610b7eea2c501baa9489f1af" />
        </div>

        <div>
            <Language className="c" link="https://docs.microsoft.com/en-us/dotnet/csharp/"
                name="C#" stars={3} language="c" resume="is a general-purpose, multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines. It was developed around 2000 by Microsoft within its .NET initiative and later approved as a standard by Ecma and ISO."
                id="868acf3f93f5a01897c6ae83a44c24c8"
            />
        </div>

        <div>
            <Language className="sql" link="https://fr.wikipedia.org/wiki/Structured_Query_Language"
                name="sql" stars={3} language="sql" resume=" is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data where there are relations between different entities/variables of the data. SQL offers two main advantages over older read/write APIs like ISAM or VSAM: first, it introduced the concept of accessing many records with one single command; and second, it eliminates the need to specify how to reach a record, e.g. with or without an index.
                Originally based upon relational algebra and tuple relational calculus, SQL consists of many types of statements,which may be informally classed as sublanguages, commonly: a data query language (DQL),a data definition language (DDL),a data control language (DCL), and a data manipulation language (DML).The scope of SQL includes data query, data manipulation (insert, update and delete), data definition (schema creation and modification), and data access control. Although SQL is often described as, and to a great extent is, a declarative language (4GL), it also includes procedural elements.
                SQL is pronounced ‘sequel’ and database technologies such as MySQL, PostgreSQL and Microsoft SQL Server power big businesses, small businesses, hospitals, banks, universities. Indeed, just about every computer and person with access to technology eventually touches something SQL. For instance, all Android phones and iPhones have access to a SQL database called SQLite and many mobile apps developed Google, Skype and DropBox use it directly.   So , I recommend it to you at 199% 😅"
                id="8dc8f73e888a0cd6968b533b09be2f5a" 
                    
            />
        </div>
    </div>
    );
}

 function Language({className, link , name, stars, language,resume, id}) {
    return (
        <div className={className}>
                <p><b><a href={link}>{name}</a></b> <span>{ star(stars).map((item => { return ( item ) })) }</span></p>
                <pre>
                    <code className={"request " + language}>
                        {resume}
                    </code>
                </pre>
                <RenderGist gist={id} />


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

