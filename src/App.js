import React from "react";
import { render } from "react-dom";
import Profile from "./components/Profile"

const App = () => {
    return (
        <div className="wrapper">
            <Profile />
        </div>
    );
}







render(<App />, document.getElementById('main'))