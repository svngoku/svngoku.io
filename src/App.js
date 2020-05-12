import React from "react";
import Navbar from "./components/NavBar.jsx";
import { BrowserRouter as Router, 
    Switch,
    Route
} from "react-router-dom";
import Playground from "./components/Playground.jsx";
import HomePage from "./components/HomePage.jsx";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import { NotFound } from "./components/Errors.jsx"

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/playground" component={Playground} />
                    <Route exact path="/blogs" component={Blogs} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="*" component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;