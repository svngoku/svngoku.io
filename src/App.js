import React from "react";
import { render } from "react-dom";
import Profile from "./components/Profile"
import Languages from './components/Languages'
import Footer from "./components/Footer"

const App = () => {
    return (
        <div className="wrapper">
            <Profile title="Marty NIONGOLO | Svngoku" />

            <h3 className="project">languages</h3>
            <Languages className="js" 
                link="https://www.javascript.com/" 
                name="JavaScript" stars="3" language="javascript" resume="was introduced in 1995 as a way to add programs to web pages in the Netscape Navigator browser. The language has since been adopted by all other major graphical web browsers. It has made modern web applications possible—applications with which you can interact directly without doing a page reload for every action. JavaScript is also used in more traditional websites to provide various forms of interactivity and cleverness.
                  It is important to note that JavaScript has almost nothing to do with the programming language named Java. The similar name was inspired by marketing considerations rather than good judgment. When JavaScript was being introduced, the Java language was being heavily marketed and was gaining popularity. Someone thought it was a good idea to try to ride along on this success. Now we are stuck with the name.
                  After its adoption outside of Netscape, a standard document was written to describe the way the JavaScript language should work so that the various pieces of software that claimed to support JavaScript were actually talking about the same language. This is called the ECMAScript standard, after the Ecma International organization that did the standardization. In practice, the terms ECMAScript and JavaScript can be used interchangeably—they are two names for the same language.
                  I decide to learn JS because is a very deep , quick and beautiful language .  And i recommend all peoples to do the same thing 😊" 
                example="https://gist.github.com/svngoku/b47ef0c9d21cb38d07275ec013e34a4b.js" 
            />
            <Footer />
        </div>
    );
}







render(<App />, document.getElementById('main'))