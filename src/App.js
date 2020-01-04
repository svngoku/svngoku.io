import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import Playground from "./components/Playground.jsx";
import HomePage from "./components/HomePage.jsx";
// import { NotFound } from "./components/Errors.jsx"


const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Route exact path="svngoku.io/" component={HomePage} />
                <Route path="svngoku.io/playground/" component={Playground} />
            </div>
        </Router>
       
    );
}

render(<App />, document.getElementById('main'))