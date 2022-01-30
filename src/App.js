import React, { useState } from "react";
import Navbar from "./components/NavBar.jsx";
import { Switch,
    Route
} from "react-router-dom"
import { BrowserRouter as Router, 
} from "react-router-dom";
import Playground from "./components/Playground.jsx";
import HomePage from "./components/HomePage.jsx";
import { NotFound } from "./components/Errors.jsx";
import { ThemeProvider } from "styled-components";


const LigthTheme = {
    pageBackground: "white",
    titleColor: "#f15b23",
    taglineColor: "black",
};

const DarkTheme = {
    pageBackground: "black",
    titleColor: "#f15b23",
    taglineColor: "white",
};

const themes = {
    light: LigthTheme,
    dark: DarkTheme,
};


const App = () => {
    const [theme, setTheme] = useState("light")

    return (
        <ThemeProvider theme={themes[theme]}>
            <Router>
                <div>
                    <Navbar theme={theme} setTheme={setTheme} />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/playground" component={Playground} />
                        {/* <Route exact path="/blogs" component={Blogs} />
                        <Route exact path="/blog" component={Blog} /> */}
                        <Route exact path="*" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;