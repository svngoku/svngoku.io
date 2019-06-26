import React from "react";
import { render } from "react-dom";
import Profile from "./components/Profile.jsx"
import Languages from './components/Languages.jsx'
import Projects from "./components/Projects.jsx"
import BooksLinks from "./components/BooksLinks.jsx"
import Tools from "./components/Tools.jsx"
import Footer from "./components/Footer.jsx"

const App = () => {
    return (
        <div>
            <div className="wrapper">
                {/* Profile Component */}
                <Profile title="Marty NIONGOLO | Svngoku" />
                
                {/* Languages Component */}
                <h3 className="project">languages</h3>
                <Languages/>

                {/* Project Component */}
                <Projects />

                {/* Books&Links Component */}
                <BooksLinks />

                {/* Tools component */}
                <h3 className="project">Tools</h3>
                <p>What`s better than sharing the tools that allow me to code properly.</p> 
                <Tools />

                {/* Footer Component */}
                <Footer />

            </div>
        </div>
    );
}







render(<App />, document.getElementById('main'))