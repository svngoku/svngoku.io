import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import HomePage from "./components/HomePage.jsx";
import Blog from "./components/Blog.jsx";
import Blogs from "./components/Blogs.jsx";



const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Route exact path="/" component={HomePage} />
                <Route path="/blogs/" component={Blogs} />                
                <Route path="/blog/" component={Blog} />
                <Route path="blog/:id"  component={Blog} />
            </div>
        </Router>
       
    );
}

render(<App />, document.getElementById('main'))